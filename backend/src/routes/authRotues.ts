import { Router, Request, Response } from "express";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import authMiddleware from "../middlewares/authMiddleware";

const router = Router();

interface User {
  email: string;
  password: string;
}

const users: User[] = [];

// GET /api/auth/profile
router.get("/profile", authMiddleware, (req: Request, res: Response) => {
  res.json({
    user: (req as any).user,
  });
});



// POST /api/auth/signup
router.post("/signup", async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const existingUser = users.find((u) => u.email === email);

  if (existingUser) {
    return res.status(400).json({
      message: "User already exists",
    });
  }

  const hashedPassword = await bcryptjs.hash(password,10)

  const newUser: User = {
    email,
    password: hashedPassword,
  };

  users.push(newUser);

  res.json({
    message: "Signup success",
  });
});

// POST /api/auth/login
router.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = users.find((u) => u.email === email);

  if (!user) {
    return res.status(400).json({
      message: "Invalid credentials",
    });
  }

  const isMatch = await bcryptjs.compare(password, user.password);

  if (!isMatch) {
    return res.status(400).json({
      message: "Invalid credentials",
    });
  }

  const token = jwt.sign(
    { email: user.email },
    process.env.JWT_SECRET as string,
    { expiresIn: "1d" }
  );

  res.json({ token });
});

export default router;
