const Banner = require("../models/Banner");

const createBanner = async (req, res, next) => {
  try {
    const newBanner = new Banner(req.body);
    const savedBanner = await newBanner.save();
    res.status(201).json(savedBanner);
  } catch (error) {
    next(error);
  }
};

const updateBanner = async (req, res, next) => {
  try {
    const updatedBanner = await Banner.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    if (!updatedBanner) {
      return res.status(404).json({ message: "Banner not found" });
    }
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};

const deleteBanner = async (req, res, next) => {
  try {
    await Banner.findByIdAndDelete(req.params.id);
    res.status(200).json("Banner has been deleted.");
  } catch (err) {
    next(err);
  }
};

const getBanner = async (req, res, next) => {
  try {
    const banner = await Banner.findById(req.params.id);
    res.status(200).json(banner);
  } catch (err) {
    next(err);
  }
};

const getBanners = async (req, res, next) => {
  try {
    const banners = await Banner.find();
    res.status(200).json(banners);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createBanner,
  updateBanner,
  deleteBanner,
  getBanner,
  getBanners,
};
