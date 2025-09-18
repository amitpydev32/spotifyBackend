const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const authRoutes = require("../routes/authRoutes");
const musicRoutes = require("../routes/musicRoutes");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// DB connect (MongoDB Atlas required, local MongoDB Vercel pe kaam nahi karega)
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.error(err));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/music", musicRoutes);

// Export as Vercel handler
module.exports = app;
