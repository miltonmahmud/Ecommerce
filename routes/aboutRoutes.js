const express = require("express");
const {
  createAbout,
  updateAbout,
  deleteAbout,
  getAbout,
  getAbouts,
} = require("../controllers/About.js");

const router = express.Router();

router.post("/", createAbout);
router.put("/:id", updateAbout);
router.delete("/:id", deleteAbout);
router.get("/find/:id", getAbout);
router.get("/", getAbouts);

module.exports = router;
