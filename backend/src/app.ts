import express from "express";
import cors from "cors";
import "dotenv/config";
import authRoutes from "./routes/authRotues";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);

export default app;
