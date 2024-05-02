const UserSettings = require("../models/UserSettings.js");

// Get user settings
async function getUserSettings(req, res) {
  try {
    let userSettings = await UserSettings.findOne({});
    // If no settings document exists, create a new one with default values
    if (!userSettings) {
      userSettings = await UserSettings.create({});
    }
    res.status(200).json(userSettings);
  } catch (error) {
    console.error("Error getting user settings:", error);
    res.status(500).json({ error: "Failed to get user settings" });
  }
}

// Update user settings
async function updateUserSettings(req, res) {
  const { body } = req;
  try {
    const updatedUserSettings = await UserSettings.findOneAndUpdate({}, body, {
      new: true,
      upsert: true, // Create a new document if none exists
    });
    res.status(200).json(updatedUserSettings);
  } catch (error) {
    console.error("Error updating user settings:", error);
    res.status(500).json({ error: "Failed to update user settings" });
  }
}

module.exports = { getUserSettings, updateUserSettings };
