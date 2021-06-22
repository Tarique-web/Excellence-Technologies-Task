const candidateModel = require("../model/candidateModel");


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

    let candidateData = new candidateModel({
        name: req.body.name,
        email: req.body.email,
        address: req.body.address
    })
    candidateData.save().then((data) => {
        res.status(200).send({
            success: "Candidate Details is inserted !",
            _id:data._id,
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
