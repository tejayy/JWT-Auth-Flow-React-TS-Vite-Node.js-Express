const express = require('express');
const cors = require('cors');
require("dotenv").config()


const authRoutes = require("./routes/authRotues")

const app = express();

// Middleware
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth",authRoutes)


export default app;
