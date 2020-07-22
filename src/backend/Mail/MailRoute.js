const express = require('express');
const router = express.Router();
const mailCtrl = require('./MailController');

router.post('/sent', mailCtrl.sendMail);

module.exports = router;
