const Popup = require("../models/Popup");

const createPopup = async (req, res, next) => {
  try {
    const newPopup = new Popup(req.body);
    const savedPopup = await newPopup.save();
    res.status(201).json(savedPopup);
  } catch (error) {
    next(error);
  }
};

const updatePopup = async (req, res, next) => {
  try {
    const updatedPopup = await Popup.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    if (!updatedPopup) {
      return res.status(404).json({ message: "Popup not found" });
    }
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};

const deletePopup = async (req, res, next) => {
  try {
    await Popup.findByIdAndDelete(req.params.id);
    res.status(200).json("Popup has been deleted.");
  } catch (err) {
    next(err);
  }
};

const getPopup = async (req, res, next) => {
  try {
    const popup = await Popup.findById(req.params.id);
    res.status(200).json(popup);
  } catch (err) {
    next(err);
  }
};

const getPopups = async (req, res, next) => {
  try {
    const popups = await Popup.find();
    res.status(200).json(popups);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createPopup,
  updatePopup,
  deletePopup,
  getPopup,
  getPopups,
};
