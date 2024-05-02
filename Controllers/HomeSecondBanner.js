const HomeSecondBanner = require("../models/HomeSecondBanner");

const createHomeSecondBanner = async (req, res, next) => {
  try {
    const newHomeSecondBanner = new HomeSecondBanner(req.body);
    const savedHomeSecondBanner = await newHomeSecondBanner.save();
    res.status(201).json(savedHomeSecondBanner);
  } catch (error) {
    next(error);
  }
};

const updateHomeSecondBanner = async (req, res, next) => {
  try {
    const updatedHomeSecondBanner = await HomeSecondBanner.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    if (!updatedHomeSecondBanner) {
      return res.status(404).json({ message: "HomeSecondBanner not found" });
    }
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};

const deleteHomeSecondBanner = async (req, res, next) => {
  try {
    await HomeSecondBanner.findByIdAndDelete(req.params.id);
    res.status(200).json("HomeSecondBanner has been deleted.");
  } catch (err) {
    next(err);
  }
};

const getHomeSecondBanner = async (req, res, next) => {
  try {
    const homeSecondBanner = await HomeSecondBanner.findById(req.params.id);
    res.status(200).json(homeSecondBanner);
  } catch (err) {
    next(err);
  }
};

const getHomeSecondBanners = async (req, res, next) => {
  try {
    const homeSecondBanners = await HomeSecondBanner.find();
    res.status(200).json(homeSecondBanners);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createHomeSecondBanner,
  updateHomeSecondBanner,
  deleteHomeSecondBanner,
  getHomeSecondBanner,
  getHomeSecondBanners,
};
