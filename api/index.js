const express = require("express");
const connectDB = require("../config/db");
const authRoutes = require("../routes/authRoutes");
const musicRoutes = require("../routes/musicRoutes");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/music", musicRoutes);

// Ensure DB is connected before handling requests
connectDB();

module.exports = app;
