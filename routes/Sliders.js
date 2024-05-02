const express = require("express");
const {
  createSlider,
  updateSlider,
  deleteSlider,
  getSlider,
  getSliders,
} = require("../controllers/Slider.js");

const router = express.Router();

router.post("/", createSlider);
router.put("/:id", updateSlider);
router.delete("/:id", deleteSlider);
router.get("/find/:id", getSlider);
router.get("/", getSliders);

module.exports = router;
