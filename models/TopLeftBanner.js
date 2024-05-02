const mongoose = require("mongoose");

const TopLeftBannerSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    photo: {
      type: [],
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("TopLeftBanner", TopLeftBannerSchema);
