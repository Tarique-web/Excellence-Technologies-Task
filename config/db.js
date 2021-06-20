const mongoose = require("mongoose");

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

const Url = "mongodb+srv://Tarique:Tarique@1@cluster0.qxvbn.mongodb.net/candidate-databases?retryWrites=true&w=majority";

//candidate   DB
mongoose.connect(
    Url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
    .then(() => console.log("Successfully Established Connection with MongoDB"))
    .catch(err => {
        console.log(`Failed to Establish Connection with MongoDB with Error: ${err}`);
    });
module.exports = mongoose;