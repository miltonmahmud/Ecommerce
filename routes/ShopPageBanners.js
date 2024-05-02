const express = require("express");
const {
  createShopPageBanner,
  updateShopPageBanner,
  deleteShopPageBanner,
  getShopPageBanner,
  getShopPageBanners,
} = require("../controllers/ShopPageBanner.js");

const router = express.Router();

router.post("/", createShopPageBanner);
router.put("/:id", updateShopPageBanner);
router.delete("/:id", deleteShopPageBanner);
router.get("/find/:id", getShopPageBanner);
router.get("/", getShopPageBanners);

module.exports = router;
