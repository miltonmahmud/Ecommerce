const Attribute = require("../models/Attribute");

const createAttribute = async (req, res, next) => {
  try {
    const newAttribute = new Attribute(req.body);
    const savedAttribute = await newAttribute.save();
    res.status(201).json(savedAttribute);
  } catch (error) {
    next(error);
  }
};

const updateAttribute = async (req, res, next) => {
  try {
    const updatedAttribute = await Attribute.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    if (!updatedAttribute) {
      return res.status(404).json({ message: "Attribute not found" });
    }
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};

const deleteAttribute = async (req, res, next) => {
  try {
    await Attribute.findByIdAndDelete(req.params.id);
    res.status(200).json("Attribute has been deleted.");
  } catch (err) {
    next(err);
  }
};

const getAttribute = async (req, res, next) => {
  try {
    const attribute = await Attribute.findById(req.params.id);
    res.status(200).json(attribute);
  } catch (err) {
    next(err);
  }
};

const getAttributes = async (req, res, next) => {
  try {
    const attributes = await Attribute.find();
    res.status(200).json(attributes);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createAttribute,
  updateAttribute,
  deleteAttribute,
  getAttribute,
  getAttributes,
};
