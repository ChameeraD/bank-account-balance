const express = require('express');

var con = require('../../../config');


//Add New Account
module.exports.addNewAccount = function (req, res, next) {
    var sql = "INSERT INTO Accounts ("+req.body.accountNumber+","+req.body.typeId+","+req.body.balance+")";
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
    var sql = "SELECT * FROM Accounts";
    con.query(sql, function (err, result, fields) {
        if (err) {
            res.status(500).send(err.sqlMessage)
        } else {
            res.send(result);
        }
    });
};

//Get Details of One Account
module.exports.getOneAccounts = function(req, res, next) {
  var sql = "SELECT * FROM Accounts WHERE accountNumber ="+req.params.accountNumber;
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
    var sql = "INSERT INTO AccountTypes (" + req.body.typeId + ",'" + req.body.name + "'," + req.body.intrestRate + ")";
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
    var sql = "SELECT * FROM AccountTypes";
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
  var sql = "SELECT * FROM AccountTypes WHERE typeId="+req.body.typeId;
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
    var sql = "UPDATE AccountTypes SET name='" + req.body.name + "',intrestRate=" + req.body.intrestRate+"WHERE typeId=" + req.body.typeId;
    con.query(sql, function (err, result, fields) {
        if (err) {
            res.status(500).send(err.sqlMessage);
        } else {
            res.send(result);
        }
    });
};