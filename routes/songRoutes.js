const express = require("express");
const multer = require("multer");
const { uploadSong, getSongs } = require("../controllers/songController");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/upload", upload.fields([{ name: "song" }, { name: "cover" }]), uploadSong);
router.get("/", getSongs);

module.exports = router;
