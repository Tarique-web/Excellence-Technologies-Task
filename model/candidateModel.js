const mongoose = require("../config/db");
const schema = new mongoose.Schema(

    {
        name: {
            desc: "The user's name.",
            trim: true,
            type: String,
            required: true,
            default:''
        },
        email: {
            desc: "The user's mobile no",
            trim: true,
            type: String,
            required: true,
            default:''

            
        },
      
        address: {
            desc : "the users address details", 
            trim: true,
            type: String,
            default:''

        },

        first_round:{
            desc : "the users first round score", 
            trim: true,
            type: Number,
            min:0,
            max:10,
            default:0
        },

        second_round: {
            desc : "the users second round score", 
            trim: true,
            type: Number,
            min:0,
            max:10,
            default:0
        },
        third_round: {
            desc : "the users third round score", 
            trim: true,
            type: Number,
            min:0,
            max:10,
            default:0

        },
        totalScore:{
            desc : "the users total score", 
            trim: true,
            type: Number,
            min:0,
            max:30,
            default:0
        }
    },
    {
       
        timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
    }

)
module.exports = mongoose.model("Candidate", schema);