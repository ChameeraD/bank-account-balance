const express = require('express');
var router = express.Router();

const ctrlTransaction = require('../api/controllers/account/transactionController');

router.get("/accountId/:accountNumber",ctrlTransaction.getAllTransactionsByAccId)
router.post("/", ctrlTransaction.addNewTransaction)

module.exports = router;