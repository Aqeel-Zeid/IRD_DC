var fs = require("fs");
var path = require("path");

//Create Data Folder in the user system

console.log("Initialize Folders in the System");

let dir = "./IRD_data_collector/SystemData";

function createDirectories(pathname) {
  const __dirname = path.resolve();
  pathname = pathname.replace(/^\.*\/|\/?[^\/]+\.[a-z]+|\/$/g, ""); // Remove leading directory markers, and remove ending /file-name.extension
  fs.mkdir(path.resolve(__dirname, pathname), { recursive: true }, (e) => {
    if (e) {
      console.error(e);
    } else {
      console.log("Successfully Created");
    }
  });
}

createDirectories(dir);

//Create a questionaire directory

createDirectories(`${dir}/Questionaires`);

//------------------------------------------------

//Import Server Dependencies and Initialize the Server

const express = require("express");
const cors = require("cors");
let app = express();

//Enable Cross-Origin Request
app.use(cors({ credentials: true, origin: true }));

// support parsing of application/json type post data
var bodyParser = require("body-parser");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());
//-----------------------------------------------

//Initialize Database----------------------------

// const sqlite3 = require("sqlite3").verbose();

// let db = new sqlite3.Database(`${__dirname}/${dir}/ird_dc.db` ,(err) => {
//   if (err) {
//     return console.error(err.message);
//   }
//   console.log("Connected to the SQlite database.");
// });

// //Add The db object to the request object

// app.use(function(req, res, next){
//     // Edit request object here
//     req.db = db;
//     next();
//   });

//-----------------------------------------------

//Run The Database Script

// const db_script = require("./db_script")

// db.run( db_script.sqliteString ,
// (err) => {
//     if (err) {
//         // Table already created
//         console.log(err)
//     }else{
//         // Table just created, creating some rows
//         console.log(err)

//     }
// });

//-----------------------------------------------

//-----------------------------------------------

//Define Routes-----------------------------------

// "questionaireName": "",
//     "questionaireDescription": "",
//     "respondent_code_format" : {
//         format : "",
//         description : "",
//         exampleUsage : ""
//     },
//     "qid": "",
//     "created_date": "",

//Create new questionaire

app.post("/CreateNewQuestionaire", function (req, res) {
  let {
    questionaireName,
    questionaireDescription,
    respondent_code_format,
    qid,
    created_date,
    sections,
  } = req.body;

  console.log(
    questionaireName,
    questionaireDescription,
    respondent_code_format,
    qid,
    created_date,
    sections
  );

  fs.writeFileSync(
    `${dir}/Questionaires/${questionaireName}.json`,
    JSON.stringify(req.body),
    "utf8"
  );

  res.send("Successfully Created").status(200);
});

//Update Questionaire-----------------------------

app.post("/UpdateQuestionaire", function (req, res) {
  let { updatedQuestionaire } = req.body;

  console.log(updatedQuestionaire);

  fs.writeFileSync(
    `${dir}/Questionaires/${updatedQuestionaire.questionaireName}.json`,
    JSON.stringify(updatedQuestionaire),
    "utf8"
  );

  res.send("Successfully Updated Questionaire").status(200);
});

//Get All the questionaires-------------------

app.get("/GetAllQuestionaires", (req, res) => {
  let Qarray = [];

  fs.readdir(`${dir}/Questionaires`, function (err, files) {
    //handling error
    if (err) {
      return console.log("Unable to scan directory: " + err);
    }
    //listing all files using forEach
    files.forEach(function (file) {
      // Do whatever you want to do with the file
      let rawdata = fs.readFileSync(
        `${dir}/Questionaires/${file}`,
        "utf8",
        (err, data) => {}
      );
      Qarray.push(JSON.parse(rawdata));
      //console.log(JSON.parse(rawdata));
    });

    //console.log(Qarray)
    res.json(Qarray).status(200);
  });
});

app.get("/downloadQuestionaire/:questionnaireName", function (req, res) {
  const file = `${dir}/Questionaires/${req.params.questionnaireName}.json`;
  res.download(file); // Set disposition and send it.
});

//Start Server-----------------------------------
const port = 4000;
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

//-----------------------------------------------
