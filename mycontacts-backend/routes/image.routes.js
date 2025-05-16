const express = require("express");
const {
  uploadImage,
  deleteImage,
  getAllImages,
} = require("../controllers/image.controller");

const router = express.Router();

router.get("", getAllImages);
router.post("/upload", uploadImage);
router.delete("/:id", deleteImage);

module.exports = router;
