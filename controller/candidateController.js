const candidateModel = require("../model/candidateModel")


//Inserting user Details

exports.candidate = (req, res) => {
    /**
        * Request Validation
        */
    if (!req.body || JSON.stringify(req.body) == "{}") {
        console.log({ "candidateController": "request body con't be empty" })
        return res.status(400).send({
            message: "Request body can not be empty",
            status: 400
        });
    }
    if (!req.body.name || req.body.name == "") {
        return res.status(400).send({
            message: "Name  Can Not Be Empty Please Enter Your Name!",
            status: 400
        });
    }

    if (!req.body.email || req.body.email == "") {
        return res.status(400).send({
            message: "email can not be empty",
            status: 400
        });
    }
    if (!req.body.address || req.body.address == "") {
        return res.status(400).send({
            message: "address can not be empty",
            status: 400
        });
    }

    let first_round = req.body.first_round;
    let second_round = req.body.second_round;
    let third_round = req.body.third_round ;

    let candidateData = new candidateModel({
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        first_round:first_round,
        second_round:second_round,
        third_round:third_round,
        totalScore:first_round+second_round+third_round
    })
    candidateData.save().then((data) => {
        res.send({
            success: "Candidate Details is inserted !",
            name: data.name,
            status: 200
        });
    }).catch((err) => {
        res.status(500).send({
            message: err || "Some error occurred while inserting the candidate Details.",
            status: 500
        });
    })


}

//Getting Highest Score
exports.highestScore = (req,res) => {

    candidateModel.find().sort({"totalScore" : -1}).select({totalScore: 0})
    .then((data) => {
        res.send({
            message: data,
            name: data.name,
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
exports.avgrageScore = async(req,res) =>{

    candidateModel.find().then((data) => {
        res.send({
            message: data,
            name: data.name,
            status: 200
        });
    }).catch((err) => {
        res.status(500).send({
            message: err || "Some error occurred while getting the candidate avrage score.",
            status: 500
        });
    })


}