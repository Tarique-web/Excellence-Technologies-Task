const testScoreModel = require('../model/testScoreModel');
const candidateModel = require("../model/candidateModel");
var ObjectId = require('mongodb').ObjectID;


// Storing candidate score
exports.candidateScore = async (req, res) => {

    let first_round = req.body.first_round;
    let second_round = req.body.second_round;
    let third_round = req.body.third_round ;

    // maximum allowed value 10
    if ((first_round>10) || (second_round>10) || (third_round>10)) {

        return res.status(400).send({
            message: "Score can not be empty and maximum allowed value (10)",
            status: 400
        });
    }
    var totalScores;
    var candidateTestScore = new testScoreModel({

        first_round: first_round,
        second_round: second_round,
        third_round: third_round,
        CandidateId: req.body.candidateId,

    })
    totalScores = candidateTestScore.first_round + candidateTestScore.second_round + candidateTestScore.third_round;

    candidateTestScore.totalScore = totalScores;
    candidateTestScore.avrageScore = totalScores / 3; //getting avrage 



    // checking condidate exist or not
    let checkCandidate = await candidateModel.findById(ObjectId(req.body.candidateId));
    // console.log(checkCandidate);

    if (checkCandidate !== null) {
        candidateTestScore.save().then((data) => {
            res.status(200).send({
                success: "Candidate Score Is Inserted !",
                message: data,
                status: 200
            });
        }).catch((err) => {
            res.status(500).send({
                message: err || "Some error occurred while inserting the candidate Score.",
                status: 500
            });
        })
    }
    else {
        res.status(404).send({
            message: "Candidate is not found !",
            status: 404
        })

    }



}
//updating further round score 
exports.updateCandidateScore = async (req, res) => {

    let first_round = req.body.first_round;
    let second_round = req.body.second_round;
    let third_round = req.body.third_round ;

    if ((first_round>10) || (second_round>10) || (third_round>10)) {

        return res.status(400).send({
            message: "Score can not be empty and maximum allowed value (10)",
            status: 400
        });
    }


    var totalScores = 0;
    var candidateTestScore = {

    }
    if (first_round !== undefined) {
        candidateTestScore.first_round = first_round;
        totalScores += first_round;
    }

    if (second_round !== undefined) {
        candidateTestScore.second_round = second_round;
        totalScores += second_round;
    }

    if (!third_round !== undefined) {
        candidateTestScore.third_round = third_round;
        totalScores += third_round;

    }

    candidateTestScore.totalScore = totalScores;
    candidateTestScore.avrageScore = totalScores / 3;

    // checking condidate exist or not
    var checkCandidate = await candidateModel.findOne(ObjectId(req.body.CandidateId));
    if (checkCandidate !== null) {
        testScoreModel.findOneAndUpdate({ "CandidateId": req.body.CandidateId }, candidateTestScore, { new: true })
            .select({ avrageScore: 0, totalScore: 0, _id: 0 })
            .then((data) => {
                res.status(200).send({
                    success: "Candidate Score is inserted !",
                    message: data,
                    status: 200
                });
            }).catch((err) => {
                res.status(500).send({
                    message: err || "Some error occurred while inserting the Candidate Score.",
                    status: 500
                });
            })
    }
    else {
        res.status(404).send({
            message: "Candidate is not found !",
            status: 404
        })

    }

}


//Getting Highest Score
exports.highestScore = (req, res) => {

    testScoreModel.find().populate({ path: 'CandidateId', model: candidateModel }).sort({ totalScore: -1 }).select({ avrageScore: 0 })
        .then((data) => {
            res.send({
                message: data,
                status: 200
            });
        }).catch((err) => {
            res.status(500).send({
                message: err || "Some error occurred while getting the candidate score.",
                status: 500
            });
        })

}

//Getting Avrage Score
exports.avgrageScore = async (req, res) => {

    testScoreModel.find().populate({ path: 'CandidateId', model: candidateModel }).sort({ totalScore: -1 })
        .then((data) => {
            res.send({
                message: data,
                status: 200
            });
        }).catch((err) => {
            res.status(500).send({
                message: err || "Some error occurred while getting the candidate avrage score.",
                status: 500
            });
        })


}