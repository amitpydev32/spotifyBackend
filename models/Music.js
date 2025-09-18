const mongoose = require("mongoose");

const musicSchema = new mongoose.Schema({
  title: { type: String, required: true },       // Song name
  artist: { type: String, required: true },      // Artist name
  url: { type: String, required: true },         // Song file / link
  createdAt: { type: Date, default: Date.now },  // Auto timestamp
});

module.exports = mongoose.model("Music", musicSchema);
