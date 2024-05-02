const express = require("express");
const {
  createTopRightBanner,
  updateTopRightBanner,
  deleteTopRightBanner,
  getTopRightBanner,
  getTopRightBanners,
} = require("../controllers/TopRightBanner.js");

const router = express.Router();

router.post("/", createTopRightBanner);
router.put("/:id", updateTopRightBanner);
router.delete("/:id", deleteTopRightBanner);
router.get("/find/:id", getTopRightBanner);
router.get("/", getTopRightBanners);

module.exports = router;
