const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path  = require('path');
const multer = require('multer');

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bank'
});

connection.connect(function(err) {
  if (!err) {
    console.log("Database Connection Created");
  } else {
    console.log("Connetion error occured" + err);
  }
});

const port = process.env.PORT ||4201;

var app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

/*
app.use(cors(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'POST GET PUT DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
}));*/

app.listen(port, () => console.log('Server started at port :'+ port));


