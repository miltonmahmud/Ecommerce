const TopLeftBanner = require("../models/TopLeftBanner.js");

async function createTopLeftBanner(req, res, next) {
  try {
    const newTopLeftBanner = new TopLeftBanner(req.body);
    const savedTopLeftBanner = await newTopLeftBanner.save();
    res.status(201).json(savedTopLeftBanner);
  } catch (error) {
    next(error);
  }
}

async function updateTopLeftBanner(req, res, next) {
  try {
    const updatedTopLeftBanner = await TopLeftBanner.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    if (!updatedTopLeftBanner) {
      return res.status(404).json({ message: "TopLeftBanner not found" });
    }
    res.status(204).end();
  } catch (err) {
    next(err);
  }
}

async function deleteTopLeftBanner(req, res, next) {
  try {
    await TopLeftBanner.findByIdAndDelete(req.params.id);
    res.status(200).json("TopLeftBanner has been deleted.");
  } catch (err) {
    next(err);
  }
}

async function getTopLeftBanner(req, res, next) {
  try {
    const topLeftBanner = await TopLeftBanner.findById(req.params.id);
    res.status(200).json(topLeftBanner);
  } catch (err) {
    next(err);
  }
}

async function getTopLeftBanners(req, res, next) {
  try {
    const topLeftBanners = await TopLeftBanner.find();
    res.status(200).json(topLeftBanners);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  createTopLeftBanner,
  updateTopLeftBanner,
  deleteTopLeftBanner,
  getTopLeftBanner,
  getTopLeftBanners,
};
