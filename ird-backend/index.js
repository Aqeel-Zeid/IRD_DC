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

//------------------------------------------------

//Import Server Dependencies and Initialize the Server

const express = require("express");
const cors = require("cors");
let app = express();

//Enable Cross-Origin Request
app.use(cors());

// support parsing of application/json type post data
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.use(bodyParser.json());
//-----------------------------------------------

//Initialize Database----------------------------

const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database(`${__dirname}/${dir}/ird_dc.db` ,(err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Connected to the SQlite database.");
});

//Add The db object to the request object

app.use(function(req, res, next){
    // Edit request object here
    req.db = db;
    next();
  });

//-----------------------------------------------

//Run The Database Script 

const db_script = require("./db_script")

db.run( db_script.sqliteString ,
(err) => {
    if (err) {
        // Table already created
        console.log(err)
    }else{
        // Table just created, creating some rows
        console.log(err)
      
    }
});  

//-----------------------------------------------


//-----------------------------------------------

//Start Server-----------------------------------
const port = 4000;
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

//-----------------------------------------------
