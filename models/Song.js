const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
  title: String,
  artist: String,
  fileUrl: String, // uploaded music file path
  coverUrl: String, // cover image path
});

module.exports = mongoose.model("Song", songSchema);
