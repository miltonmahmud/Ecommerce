const express = require("express");
const {
  createPopup,
  updatePopup,
  deletePopup,
  getPopup,
  getPopups,
} = require("../controllers/Popup.js");

const router = express.Router();

router.post("/", createPopup);
router.put("/:id", updatePopup);
router.delete("/:id", deletePopup);
router.get("/find/:id", getPopup);
router.get("/", getPopups);

module.exports = router;
