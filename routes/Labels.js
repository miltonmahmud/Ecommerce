const express = require("express");
const {
  createLabel,
  updateLabel,
  deleteLabel,
  getLabel,
  getLabels,
} = require("../controllers/Label.js");

const router = express.Router();

router.post("/", createLabel);
router.put("/:id", updateLabel);
router.delete("/:id", deleteLabel);
router.get("/find/:id", getLabel);
router.get("/", getLabels);

module.exports = router;
