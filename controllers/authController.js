const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  try {
    const { username } = req.body;
    if (!username || typeof username !== "string" || username.trim() === "") {
      return res.status(400).json({ msg: "Valid username is required" });
    }

    // Check if user already exists
    let user = await User.findOne({ username });

    if (!user) {
      try {
        user = await User.create({ username });
        // Generate token for new user
        const token = jwt.sign(
          { userId: user._id, username: user.username },
          process.env.JWT_SECRET,
          { expiresIn: process.env.JWT_EXPIRES_IN || "1d" }
        );

        return res.json({
          msg: "New user created & logged in",
          user,
          token,
        });
      } catch (err) {
        if (err.code === 11000) {
          return res
            .status(409)
            .json({ msg: "Username already exists. Please try logging in." });
        }
        return res
          .status(400)
          .json({ msg: "Failed to create user", error: err.message });
      }
    }

    // Existing user → login
    const token = jwt.sign(
      { userId: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || "1d" }
    );

    res.json({ msg: "Login success", user, token });
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};
