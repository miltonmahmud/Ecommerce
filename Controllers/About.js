const About = require("../models/About");

const createAbout = async (req, res, next) => {
  try {
    const newAbout = new About(req.body);
    const savedAbout = await newAbout.save();
    res.status(201).json(savedAbout);
  } catch (error) {
    next(error);
  }
};

const updateAbout = async (req, res, next) => {
  try {
    const updatedAbout = await About.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    if (!updatedAbout) {
      return res.status(404).json({ message: "About not found" });
    }
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};

const deleteAbout = async (req, res, next) => {
  try {
    await About.findByIdAndDelete(req.params.id);
    res.status(200).json("About has been deleted.");
  } catch (err) {
    next(err);
  }
};

const getAbout = async (req, res, next) => {
  try {
    const about = await About.findById(req.params.id);
    res.status(200).json(about);
  } catch (err) {
    next(err);
  }
};

const getAbouts = async (req, res, next) => {
  try {
    const Abouts = await About.find();
    res.status(200).json(Abouts);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createAbout,
  updateAbout,
  deleteAbout,
  getAbout,
  getAbouts,
};
