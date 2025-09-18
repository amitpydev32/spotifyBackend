const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");   // DB connection function
const authRoutes = require("./routes/authRoutes");
const musicRoutes = require("./routes/musicRoutes");

const app = express();

// Connect DB
(async () => {
  try {
    await connectDB();  
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("MongoDB connection failed ❌", err.message);
    process.exit(1); // stop server if DB not connected
  }
})();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/music", musicRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`));
