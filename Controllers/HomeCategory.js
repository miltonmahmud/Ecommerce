const HomeCategory = require("../models/HomeCategory");

const createOrUpdateHomeCategory = async (req, res, next) => {
  try {
    let homeCategory = await HomeCategory.findOne();

    if (!homeCategory) {
      homeCategory = new HomeCategory(req.body);
    } else {
      homeCategory.categories = req.body.categories;
    }

    const savedHomeCategory = await homeCategory.save();
    res.status(200).json(savedHomeCategory);
  } catch (error) {
    next(error);
  }
};

const getHomeCategory = async (req, res, next) => {
  try {
    const homeCategory = await HomeCategory.findOne();
    if (!homeCategory) {
      return res.status(404).json({ message: "Home category not found" });
    }
    res.status(200).json(homeCategory);
  } catch (error) {
    next(error);
  }
};

const updateHomeCategory = async (req, res, next) => {
  try {
    let homeCategory = await HomeCategory.findOne();
    if (!homeCategory) {
      return res.status(404).json({ message: "Home category not found" });
    }

    homeCategory.categories = req.body.categories;
    homeCategory.number = req.body.number;

    const updatedHomeCategory = await homeCategory.save();

    res.status(200).json(updatedHomeCategory);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createOrUpdateHomeCategory,
  getHomeCategory,
  updateHomeCategory,
};
