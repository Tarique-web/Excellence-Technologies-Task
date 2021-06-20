const express = require('express');
const db = require("./config/db")
const app = express();
const router = express.Router();
app.use(express.json())

app.use('/', router);


// base URLs
app.use("/candidate", require("./routes/candidateRouts"));



const PORT =  8000;
app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
})

// URL List

console.log("                                                                     ");

console.log("POST candidate data inserting  ..........." + "/candidate");

console.log("                                                                     ");

console.log("Get all candidate highest score data................/candidate/highestScore")

console.log("                                                                     ");
console.log("Get all candidate avrage score data............... /candidate/avrageScore");

console.log("                                                                     ");

console.log("                                                                     ");
