const mongoose = require("../config/db");
const candidateModel = require('../model/candidateModel')
const Schema = mongoose.Schema;
const schema = new mongoose.Schema(

    {  
        first_round: {
            desc: "the users first round score",
            trim: true,
            type: Number,
            min: 0,
            max: 10,
            default:0
        },

        second_round: {
            desc: "the users second round score",
            trim: true,
            type: Number,
            min: 0,
            max: 10,
            default:0
        },
        third_round: {
            desc: "the users third round score",
            trim: true,
            type: Number,
            min: 0,
            max: 10,
            default:0  

        },
        CandidateId:{
            type: Schema.Types.ObjectId, ref:'candidateModel'

        },
        totalScore:{
            desc: "the users total score",
            trim: true,
            type: Number
        },
        avrageScore:{
            desc: "the users Avrage score",
            trim: true,
            type: Number
        }
    },
    {

        timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
    }

)
module.exports = mongoose.model("TestScore", schema);
