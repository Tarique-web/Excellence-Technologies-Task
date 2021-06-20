const express = require("express");
const router = express.Router();
const UsersController = require("../controller/candidateController");
router.post("/", UsersController.candidate);
router.get('/highestScore',UsersController.highestScore);
router.get('/avrageScore',UsersController.avgrageScore)

module.exports = router;