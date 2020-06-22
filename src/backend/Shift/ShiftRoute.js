const express = require('express');
const router = express.Router();
const shiftCtrl = require('./ShiftController');

router.post('/add', shiftCtrl.createShift);
router.get('/', shiftCtrl.getShifts);
router.put('/update', shiftCtrl.changeShifts);

module.exports = router;
