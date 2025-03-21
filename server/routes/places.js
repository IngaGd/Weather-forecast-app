const express = require("express");
const router = express.Router();
const placesController = require("../controllers/placesController");

router.get("/places", placesController.getPlaces);

module.exports = router;
