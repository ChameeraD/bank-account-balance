const express = require('express');
var router = express.Router();

const ctrlAccount = require('../api/controllers/account/accountController');

router.get("/", ctrlAccount.getAllAccounts);
router.get("/details/:accountNumber", ctrlAccount.getOneAccount);
router.get("/accounttype",ctrlAccount.getAllAccountType)
router.get("/accounttype/:typeId",ctrlAccount.getAccountTypeById)
router.get("/typeId/:typeId",ctrlAccount.getAllAccountsByTypeId)
router.get("/totalbalance/:typeId",ctrlAccount.getTotalBalance)

router.post("/", ctrlAccount.addNewAccount)
router.post("/accounttype",ctrlAccount.addNewAccountType)
module.exports = router;