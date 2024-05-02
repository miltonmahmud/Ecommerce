const express = require("express");
const {
  createOrUpdateHomeCategory,
  getHomeCategory,
  updateHomeCategory,
} = require("../Controllers/HomeCategory.js");

const router = express.Router();

router.post("/", createOrUpdateHomeCategory);
router.put("/", updateHomeCategory); // Add route to handle PUT requests
router.get("/", getHomeCategory);

module.exports = router;
