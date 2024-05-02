const Coupon = require("../models/Coupon");

const createCoupon = async (req, res, next) => {
  try {
    const newCoupon = new Coupon(req.body);
    const savedCoupon = await newCoupon.save();
    res.status(201).json(savedCoupon);
  } catch (error) {
    next(error);
  }
};

const updateCoupon = async (req, res, next) => {
  try {
    const updatedCoupon = await Coupon.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    if (!updatedCoupon) {
      return res.status(404).json({ message: "Coupon not found" });
    }
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};

const deleteCoupon = async (req, res, next) => {
  try {
    await Coupon.findByIdAndDelete(req.params.id);
    res.status(200).json("Coupon has been deleted.");
  } catch (err) {
    next(err);
  }
};

const getCoupon = async (req, res, next) => {
  try {
    const coupon = await Coupon.findOne({ coupon_code: req.params.id });
    if (!coupon) {
      return res.status(404).json({ message: "Coupon not found" });
    }
    res.status(200).json(coupon);
  } catch (err) {
    next(err);
  }
};

const getCoupons = async (req, res, next) => {
  try {
    const coupons = await Coupon.find();
    res.status(200).json(coupons);
  } catch (err) {
    next(err);
  }
};

const getCouponByCode = async (req, res, next) => {
  try {
    const code = req.params.code;
    const coupon = await Coupon.findOne({ coupon_code: code });

    if (!coupon) {
      return res.status(404).json({ message: "Coupon not found" });
    }

    res.status(200).json(coupon);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createCoupon,
  updateCoupon,
  deleteCoupon,
  getCoupon,
  getCoupons,
  getCouponByCode,
};
