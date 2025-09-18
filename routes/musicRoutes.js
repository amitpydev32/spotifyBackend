const express = require("express");
const { addSong, getSongs, updateSong, deleteSong } = require("../controllers/musicController");

const router = express.Router();

// CRUD routes
router.post("/", addSong);       // Add song
router.get("/", getSongs);       // Get all songs
router.put("/:id", updateSong);  // Update song by id
router.delete("/:id", deleteSong); // Delete song by id

module.exports = router;
