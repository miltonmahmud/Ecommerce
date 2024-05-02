const ShopPageBanner = require("../models/ShopPageBanner.js");

const createShopPageBanner = async (req, res, next) => {
  try {
    const newShopPageBanner = new ShopPageBanner(req.body);
    const savedShopPageBanner = await newShopPageBanner.save();
    res.status(201).json(savedShopPageBanner);
  } catch (error) {
    next(error);
  }
};

const updateShopPageBanner = async (req, res, next) => {
  try {
    const updatedShopPageBanner = await ShopPageBanner.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    if (!updatedShopPageBanner) {
      return res.status(404).json({ message: "ShopPageBanner not found" });
    }
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};

const deleteShopPageBanner = async (req, res, next) => {
  try {
    await ShopPageBanner.findByIdAndDelete(req.params.id);
    res.status(200).json("ShopPageBanner has been deleted.");
  } catch (err) {
    next(err);
  }
};

const getShopPageBanner = async (req, res, next) => {
  try {
    const shopPageBanner = await ShopPageBanner.findById(req.params.id);
    res.status(200).json(shopPageBanner);
  } catch (err) {
    next(err);
  }
};

const getShopPageBanners = async (req, res, next) => {
  try {
    const shopPageBanners = await ShopPageBanner.find();
    res.status(200).json(shopPageBanners);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createShopPageBanner,
  updateShopPageBanner,
  deleteShopPageBanner,
  getShopPageBanner,
  getShopPageBanners,
};
