const express = require("express");
const {
  getUserSettings,
  updateUserSettings,
} = require("../controllers/userSettings.js");

const router = express.Router();

// Get user settings
router.get("/", getUserSettings);

// Update user settings
router.put("/", updateUserSettings);

module.exports = router;
