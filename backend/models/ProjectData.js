const mongoose = require("mongoose");
const projectSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [false],
    },
    description: {
      type: String,
      required: [false],
    },
    images: [{ data: Buffer, contentType: String }]
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("ProjectData", projectSchema);
