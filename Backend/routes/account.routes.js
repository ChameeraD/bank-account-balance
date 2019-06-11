const express = require('express');
var router = express.Router();

const ctrlAccount = require('../api/controllers/account/accountController');

router.get("/", ctrlAccount.getAllAccounts);
router.get("/details/:accountNumber", ctrlAccount.getOneAccount);


router.post("/", ctrlAccount.addNewAccount)

module.exports = router;