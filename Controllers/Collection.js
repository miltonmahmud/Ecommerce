const Collection = require("../models/Collection");

const createCollection = async (req, res, next) => {
  try {
    const newCollection = new Collection(req.body);
    const savedCollection = await newCollection.save();
    res.status(201).json(savedCollection);
  } catch (error) {
    next(error);
  }
};

const updateCollection = async (req, res, next) => {
  try {
    const updatedCollection = await Collection.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    if (!updatedCollection) {
      return res.status(404).json({ message: "Collection not found" });
    }
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};

const deleteCollection = async (req, res, next) => {
  try {
    await Collection.findByIdAndDelete(req.params.id);
    res.status(200).json("Collection has been deleted.");
  } catch (err) {
    next(err);
  }
};

const getCollection = async (req, res, next) => {
  try {
    const collection = await Collection.findById(req.params.id);
    res.status(200).json(collection);
  } catch (err) {
    next(err);
  }
};

const getCollections = async (req, res, next) => {
  try {
    const collections = await Collection.find();
    res.status(200).json(collections);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createCollection,
  updateCollection,
  deleteCollection,
  getCollection,
  getCollections,
};
