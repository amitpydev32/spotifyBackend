const Song = require("../models/Song");

exports.uploadSong = async (req, res) => {
  try {
    const { title, artist } = req.body;
    const fileUrl = `/uploads/${req.files.song[0].filename}`;
    const coverUrl = `/uploads/${req.files.cover[0].filename}`;

    const newSong = await Song.create({ title, artist, fileUrl, coverUrl });

    res.json(newSong);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getSongs = async (req, res) => {
  try {
    const songs = await Song.find();
    res.json(songs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
