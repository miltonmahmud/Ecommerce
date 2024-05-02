const TopRightBanner = require("../models/TopRightBanner.js");

async function createTopRightBanner(req, res, next) {
  try {
    const newTopRightBanner = new TopRightBanner(req.body);
    const savedTopRightBanner = await newTopRightBanner.save();
    res.status(201).json(savedTopRightBanner);
  } catch (error) {
    next(error);
  }
}

async function updateTopRightBanner(req, res, next) {
  try {
    const updatedTopRightBanner = await TopRightBanner.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    if (!updatedTopRightBanner) {
      return res.status(404).json({ message: "TopRightBanner not found" });
    }
    res.status(204).end();
  } catch (err) {
    next(err);
  }
}

async function deleteTopRightBanner(req, res, next) {
  try {
    await TopRightBanner.findByIdAndDelete(req.params.id);
    res.status(200).json("TopRightBanner has been deleted.");
  } catch (err) {
    next(err);
  }
}

async function getTopRightBanner(req, res, next) {
  try {
    const topRightBanner = await TopRightBanner.findById(req.params.id);
    res.status(200).json(topRightBanner);
  } catch (err) {
    next(err);
  }
}

async function getTopRightBanners(req, res, next) {
  try {
    const topRightBanners = await TopRightBanner.find();
    res.status(200).json(topRightBanners);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  createTopRightBanner,
  updateTopRightBanner,
  deleteTopRightBanner,
  getTopRightBanner,
  getTopRightBanners,
};
