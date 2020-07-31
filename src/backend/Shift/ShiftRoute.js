const express = require('express');
const router = express.Router();
const shiftCtrl = require('./ShiftController');

router.post('/add', shiftCtrl.createShift);
router.get('/', shiftCtrl.getShifts);
router.put('/update', shiftCtrl.changeShifts);
router.get('/:id', shiftCtrl.getOneEmployeeShift);
router.put('/upstatus', shiftCtrl.updateOneShift);
router.put('/changeshift', shiftCtrl.updateChangeShift);
router.delete('/delete/:id', shiftCtrl.deleteOne);

module.exports = router;
