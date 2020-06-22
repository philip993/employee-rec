const express = require('express');
const router = express.Router();
const shiftCtrl = require('./ShiftController');

router.post('/shifts/add', shiftCtrl.createShift);

module.exports = router;
