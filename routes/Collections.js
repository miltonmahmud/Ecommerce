const express = require("express");
const {
  createCollection,
  updateCollection,
  deleteCollection,
  getCollection,
  getCollections,
} = require("../controllers/Collection.js");

const router = express.Router();

router.post("/", createCollection);
router.put("/:id", updateCollection);
router.delete("/:id", deleteCollection);
router.get("/find/:id", getCollection);
router.get("/", getCollections);

module.exports = router;
