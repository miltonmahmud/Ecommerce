const Label = require("../models/Label");

const createLabel = async (req, res, next) => {
  try {
    const newLabel = new Label(req.body);
    const savedLabel = await newLabel.save();
    res.status(201).json(savedLabel);
  } catch (error) {
    next(error);
  }
};

const updateLabel = async (req, res, next) => {
  try {
    const updatedLabel = await Label.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    if (!updatedLabel) {
      return res.status(404).json({ message: "Label not found" });
    }
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};

const deleteLabel = async (req, res, next) => {
  try {
    await Label.findByIdAndDelete(req.params.id);
    res.status(200).json("Label has been deleted.");
  } catch (err) {
    next(err);
  }
};

const getLabel = async (req, res, next) => {
  try {
    const label = await Label.findById(req.params.id);
    res.status(200).json(label);
  } catch (err) {
    next(err);
  }
};

const getLabels = async (req, res, next) => {
  try {
    const labels = await Label.find();
    res.status(200).json(labels);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createLabel,
  updateLabel,
  deleteLabel,
  getLabel,
  getLabels,
};
