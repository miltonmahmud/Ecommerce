const express = require("express");
const {
  createTopLeftBanner,
  updateTopLeftBanner,
  deleteTopLeftBanner,
  getTopLeftBanner,
  getTopLeftBanners,
} = require("../controllers/TopLeftBanner.js");

const router = express.Router();

router.post("/", createTopLeftBanner);
router.put("/:id", updateTopLeftBanner);
router.delete("/:id", deleteTopLeftBanner);
router.get("/find/:id", getTopLeftBanner);
router.get("/", getTopLeftBanners);

module.exports = router;
