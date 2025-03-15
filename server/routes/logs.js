const express = require("express");
const router = express.Router();
const logsController = require("../controllers/logsController");

router.post("/logs", logsController.logUserAction);

module.exports = router;
