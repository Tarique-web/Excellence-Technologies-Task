const express = require('express');
const db = require("./config/db")
const app = express();
const router = express.Router();
app.use(express.json())

app.use('/', router);


// base URLs
app.use("/candidate", require("./routes/candidateRouts"));
app.use('/testScore',require('./routes/testScoreRouts'))



const PORT =  8000;
app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
})

//api URL List

console.log("                                                                     ");

console.log("POST candidate data inserting  ..........." + "/candidate");

console.log("                                                                     ");

console.log("POST candidate score inserting  ..........." + "/testScore");

console.log("                                                                     ");
console.log("PUT candidate updting score  ..........." + "/testScore/addTestScore");

console.log("                                                                     ");


console.log("Get all candidate highest score data................/testScore/highestScore")

console.log("                                                                     ");
console.log("Get all candidate avrage score data............... /testScore/avrageScore");

console.log("                                                                     ");

console.log("                                                                     ");
