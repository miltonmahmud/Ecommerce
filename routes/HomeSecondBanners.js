const express = require("express");
const {
  createHomeSecondBanner,
  updateHomeSecondBanner,
  deleteHomeSecondBanner,
  getHomeSecondBanner,
  getHomeSecondBanners,
} = require("../controllers/HomeSecondBanner.js");

const router = express.Router();

router.post("/", createHomeSecondBanner);
router.put("/:id", updateHomeSecondBanner);
router.delete("/:id", deleteHomeSecondBanner);
router.get("/find/:id", getHomeSecondBanner);
router.get("/", getHomeSecondBanners);

module.exports = router;
