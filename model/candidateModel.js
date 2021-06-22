const mongoose = require("../config/db");
const schema = new mongoose.Schema(

    {
        name: {
            desc: "The user's name.",
            trim: true,
            type: String,
            required: true,
        },
        email: {
            desc: "The user's mobile no",
            trim: true,
            type: String,
            required: true,
            default: ''


        },

        address: {
            desc: "the users address details",
            trim: true,
            type: String,
            default: ''

        }

    },
    {
        timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
    }

)


module.exports = mongoose.model("Candidate", schema);

