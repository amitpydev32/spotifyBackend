const Music = require("../models/Music");

// Add new song
exports.addSong = async (req, res) => {
  try {
    const { title, artist, url } = req.body;
    const song = await Music.create({ title, artist, url });
    res.status(201).json({ msg: "Song added", song });
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};

// Get all songs
exports.getSongs = async (req, res) => {
  try {
    const songs = await Music.find().sort({ createdAt: -1 });
    res.json(songs);
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};

// Update song
exports.updateSong = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, artist, url } = req.body;
    const song = await Music.findByIdAndUpdate(
      id,
      { title, artist, url },
      { new: true }
    );
    res.json({ msg: "Song updated", song });
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};

// Delete song
exports.deleteSong = async (req, res) => {
  try {
    const { id } = req.params;
    await Music.findByIdAndDelete(id);
    res.json({ msg: "Song deleted" });
  } catch (err) {
    res.status(500).json({ msg: "Server error", error: err.message });
  }
};
