const express = require("express");
const {
  createBanner,
  updateBanner,
  deleteBanner,
  getBanner,
  getBanners,
} = require("../controllers/Banner.js");

const router = express.Router();

router.post("/", createBanner);
router.put("/:id", updateBanner);
router.delete("/:id", deleteBanner);
router.get("/find/:id", getBanner);
router.get("/", getBanners);

module.exports = router;
