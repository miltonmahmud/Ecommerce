const express = require("express");
const {
  createAttribute,
  updateAttribute,
  deleteAttribute,
  getAttribute,
  getAttributes,
} = require("../controllers/Attribute.js");

const router = express.Router();

router.post("/", createAttribute);
router.put("/:id", updateAttribute);
router.delete("/:id", deleteAttribute);
router.get("/find/:id", getAttribute);
router.get("/", getAttributes);

module.exports = router;
