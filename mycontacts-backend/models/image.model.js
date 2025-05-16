const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    url: {
      type: String,
      required: [true, "Name is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Image", imageSchema);
