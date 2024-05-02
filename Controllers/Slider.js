const Slider = require("../models/Slider.js");

const createSlider = async (req, res, next) => {
  try {
    const newSlider = new Slider(req.body);
    const savedSlider = await newSlider.save();
    res.status(201).json(savedSlider);
  } catch (error) {
    next(error);
  }
};

const updateSlider = async (req, res, next) => {
  try {
    const updatedSlider = await Slider.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    if (!updatedSlider) {
      return res.status(404).json({ message: "Slider not found" });
    }
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};

const deleteSlider = async (req, res, next) => {
  try {
    await Slider.findByIdAndDelete(req.params.id);
    res.status(200).json("Slider has been deleted.");
  } catch (err) {
    next(err);
  }
};

const getSlider = async (req, res, next) => {
  try {
    const slider = await Slider.findById(req.params.id);
    res.status(200).json(slider);
  } catch (err) {
    next(err);
  }
};

const getSliders = async (req, res, next) => {
  try {
    const sliders = await Slider.find();
    res.status(200).json(sliders);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createSlider,
  updateSlider,
  deleteSlider,
  getSlider,
  getSliders,
};
