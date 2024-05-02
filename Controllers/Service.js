const Service = require("../models/Service.js");

const createService = async (req, res, next) => {
  try {
    const newService = new Service(req.body);
    const savedService = await newService.save();
    res.status(201).json(savedService);
  } catch (error) {
    next(error);
  }
};

const updateService = async (req, res, next) => {
  try {
    const updatedService = await Service.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    if (!updatedService) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};

const deleteService = async (req, res, next) => {
  try {
    await Service.findByIdAndDelete(req.params.id);
    res.status(200).json("Service has been deleted.");
  } catch (err) {
    next(err);
  }
};

const getService = async (req, res, next) => {
  try {
    const service = await Service.findById(req.params.id);
    res.status(200).json(service);
  } catch (err) {
    next(err);
  }
};

const getServices = async (req, res, next) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createService,
  updateService,
  deleteService,
  getService,
  getServices,
};
