const multer = require("multer");
const imageModel = require("../models/image.model");
const fs = require("fs");

// Configure multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

const uploadImage = [
  upload.single("image"), // 'image' should match your form field name
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).send("No file uploaded.");
      }
      const filename = req.file.filename;
      const image = await imageModel.create({
        name: filename,
        url: `/images/${filename}`,
      });
      res.json({
        message: "Image uploaded successfully",
        image: image,
      });
    } catch (error) {
      res.status(500).send("Error uploading image" + error.message);
    }
  },
];

const deleteImage = async (req, res) => {
  const id = req.params.id;
  imageModel
    .findByIdAndDelete(id)
    .then((image) => {
      if (!image) {
        return res.status(404).send("Image not found");
      }
      const filename = image.name;
      const path = `images/${filename}`;
      fs.unlinkSync(path);
      res.json({ message: "Image deleted successfully" });
    })
    .catch((error) => {
      res.status(500).send("Error deleting image" + error.message);
    });
};

const getAllImages = async (req, res) => {
  const images = await imageModel.find();
  res.status(200).json(images);
};

module.exports = {
  uploadImage,
  deleteImage,
  getAllImages,
};
