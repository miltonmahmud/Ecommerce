const express = require("express");
const {
  createCoupon,
  updateCoupon,
  deleteCoupon,
  getCoupon,
  getCoupons,
  getCouponByCode,
} = require("../controllers/Coupon.js");

const router = express.Router();

router.post("/", createCoupon);
router.put("/:id", updateCoupon);
router.delete("/:id", deleteCoupon);
router.get("/find/:id", getCoupon);
router.get("/", getCoupons);
router.get("/code/:code", getCouponByCode);

module.exports = router;
