const mongoose = require("mongoose");
const CouponSchema = new mongoose.Schema(
  {
    coupon_code: {
      type: String,
      required: true,
    },
    coupon_type: {
      type: String,
      enum: ["fixed", "percent"],
      required: true,
    },
    coupon_value: {
      type: Number,
      required: true,
    },
    cart_value: {
      type: Number,
      required: true,
    },
    expiry_date: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Coupon", CouponSchema);
