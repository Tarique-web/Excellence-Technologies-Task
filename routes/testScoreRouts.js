const express = require("express");
const router = express.Router();
const UsersController = require("../controller/testScoreController");
router.post("/addTestScore", UsersController.candidateScore);
router.put('/addTestScore',UsersController.updateCandidateScore);
router.get('/highestScore',UsersController.highestScore);
router.get('/avrageScore',UsersController.avgrageScore)

module.exports = router;