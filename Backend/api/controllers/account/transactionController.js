const express = require('express');

var con = require('../../../config');


//Add New Account
module.exports.addNewTransaction = function (req, res, next) {
    if(req.body.type =='in'){
        console.log(req.body)
        var sql = "CALL addTransaction(" + req.body.accountNumber + ","
        + req.body.amount + ",'"
        + req.body.date + "','"
        + req.body.type + "')";
        console.log(sql);
        con.query(sql, function (err, result, fields) {
            if (err) {
                res.json({ state: false, msg: err.sqlMessage });
            } else {
                res.send(result);
            }
        });
    }else{
    console.log(req.body)
    var sql = "CALL minusTransaction(" + req.body.accountNumber + ","
    + req.body.amount + ",'"
    + req.body.date + "','"
    + req.body.type + "')";
    console.log(sql);
    con.query(sql, function (err, result, fields) {
        if (err) {
            res.json({ state: false, msg: err.sqlMessage });
        } else {
            res.send(result);
        }
    });
    }
    
};

//Get All Transactions by AccNumber 
module.exports.getAllTransactionsByAccId = function (req, res, next) {
    var sql = "SELECT * FROM transactions where accountNumber = "+req.params.accountNumber;
    con.query(sql, function (err, result, fields) {
        if (err) {
            res.status(500).send(err.sqlMessage)
        } else {
            res.send(result);
        }
    });
};


