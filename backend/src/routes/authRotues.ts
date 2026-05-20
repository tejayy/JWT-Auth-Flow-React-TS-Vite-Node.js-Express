const express = require('express');
const bcryptjs = require('bcryptjs');
const jsonwebtoken = require('jsonwebtoken');

const router  = express.Router()
const authMiddleware = require("../middlewares/authMiddleware")

let users = []


router.get("/profile",authMiddleware), (req,res)=>{
    res.json({
        user:req.user,
    })
}


router.post("/signup"), async(req,res)=>{
    const {email,password}  = req.body

    const existingUser  = users.find(
        (u)=> u.email  ===  email
    );

    if(existingUser){
        return res.status(400).json({
            message:"User Already exists"
        })
    }

    const hashedPassword = 
    await bcryptjs.hash(password,10)

    const newUser = {
        email,
        password:hashedPassword,
    };

    users.push(newUser)

    res.json({
        message:"Signup success"
    })
}

router.post("/login"),  async(req,res)=>{
    const [email,password]  = req.body

    const user  = users.find(
        (u)=> e.email===  email
    );

    if(!user) {
        return res.status(400).json({
            message:'Invalid Creds'
        })
    }

    const isMatch = 
    await bcryptjs.compare(
        password,
        user.password
    )

    if(!isMatch){
        return res.status(400).json({
            message:"Invalid  Creds"
        })
    }

    const token = jsonwebtoken.sign(
        {
            email:user.email,
        },
        {
            process.env.JWT_SECRET,
        },
        {
            expiresIn:"1d"
        }
    )

    res.json({
        token,
    })
}






module.exports = router