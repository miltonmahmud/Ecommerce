const Subscriber = require("../models/Subscriber.js");

const createSubscriber = async (req, res, next) => {
  try {
    const newSubscriber = new Subscriber(req.body);
    const savedSubscriber = await newSubscriber.save();
    res.status(201).json(savedSubscriber);
  } catch (error) {
    next(error);
  }
};

const deleteSubscriber = async (req, res, next) => {
  try {
    await Subscriber.findByIdAndDelete(req.params.id);
    res.status(200).json("Subscriber has been deleted.");
  } catch (err) {
    next(err);
  }
};

const getSubscribers = async (req, res, next) => {
  try {
    const subscribers = await Subscriber.find();
    res.status(200).json(subscribers);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createSubscriber,
  deleteSubscriber,
  getSubscribers,
};
