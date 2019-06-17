const express = require('express');

var con = require('../../../config');


//Add New Account
module.exports.addNewAccount = function (req, res, next) {
    console.log(req.body)
    var sql = "INSERT INTO accounts VALUES ("+req.body.accountNumber+","+req.body.typeId+","+req.body.balance+",'"+req.body.region+"')";
    console.log(sql);
    con.query(sql, function (err, result, fields) {
        if (err) {
            res.status(500).send(err.sqlMessage)
        } else {
            res.send(result);
        }
    });
};

//Get All Account Details
module.exports.getAllAccounts = function (req, res, next) {
    var sql = "SELECT * FROM accounts";
    con.query(sql, function (err, result, fields) {
        if (err) {
            res.status(500).send(err.sqlMessage)
        } else {
            res.send(result);
        }
    });
};

//Get Details of One Account
module.exports.getOneAccount = function(req, res, next) {
  var sql = "SELECT * FROM accounts WHERE accountNumber ="+req.params.accountNumber;
  con.query(sql, function(err, result, fields) {
    if (err) {
      res.status(500).send(err.sqlMessage);
    } else {
      res.send(result);
    }
  });
};

//New transaction - Acc balance eka update wenna proc ekak ona


//Add New Account Type
module.exports.addNewAccountType = function (req, res, next) {
    var sql = "INSERT INTO accountTypes (" + req.body.typeId + ",'" + req.body.name + "'," + req.body.intrestRate + ")";
    con.query(sql, function (err, result, fields) {
        if (err) {
            res.status(500).send(err.sqlMessage)
        } else {
            res.send(result);
        }
    });
};

//Get all account types
module.exports.getAllAccountType = function (req, res, next) {
    var sql = "SELECT * FROM accountTypes";
    con.query(sql, function (err, result, fields) {
        if (err) {
            res.status(500).send(err.sqlMessage)
        } else {
            res.send(result);
        }
    });
};

//Get one account type
module.exports.getOneAccountType = function(req, res, next) {
  var sql = "SELECT * FROM accountTypes WHERE typeId="+req.body.typeId;
  con.query(sql, function(err, result, fields) {
    if (err) {
      res.status(500).send(err.sqlMessage);
    } else {
      res.send(result);
    }
  });
};

//Update one account type
module.exports.UpdateOneAccountType = function (req, res, next) {
    var sql = "UPDATE accountTypes SET name='" + req.body.name + "',intrestRate=" + req.body.intrestRate+"WHERE typeId=" + req.body.typeId;
    con.query(sql, function (err, result, fields) {
        if (err) {
            res.status(500).send(err.sqlMessage);
        } else {
            res.send(result);
        }
    });
};