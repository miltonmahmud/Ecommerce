const mongoose = require("mongoose");

const UserSettingsSchema = new mongoose.Schema(
  {
    facebookLink: {
      type: String,
      default: "",
    },
    twitterLink: {
      type: String,
      default: "",
    },
    linkedInLink: {
      type: String,
      default: "",
    },
    youtubeLink: {
      type: String,
      default: "",
    },
    pinterestLink: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      default: "",
    },
    phone: {
      type: String,
      default: "",
    },
    phone2: {
      type: String,
      default: "",
    },
    address: {
      type: String,
      default: "",
    },
    map: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("UserSettings", UserSettingsSchema);
