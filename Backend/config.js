var mysql = require('mysql');
require('dotenv').config()

var con = mysql.createConnection({
    host: 'localhost',
    user: 'chameera',
    password: '',
    database: 'bank'
});
// var con = mysql.createConnection({
//     host: process.env.DB_HOST ||  "localhost",
//     user: process.env.DB_USER || "root",
//     password: process.env.DB_PASSWORD ||  "",
//     database: process.env.DB_NAME || "mining",
// });
con.connect(function (err) {
    if (!err) {
        console.log("Database Connection Created");
    }
    else {
        console.log('Connetion error occured' + err);
    }
});

module.exports = con;