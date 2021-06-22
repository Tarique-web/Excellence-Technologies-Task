const express = require("express");
const router = express.Router();
const UsersController = require("../controller/candidateController");
router.post("/", UsersController.candidate);

module.exports = router;