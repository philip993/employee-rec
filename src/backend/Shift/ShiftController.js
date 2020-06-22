const Shift = require('./ShiftModel');
const db = require('../database/db');

exports.createShift = (req, res) => {
  let { employeeId, shiftCode, startDate, endDate } = req.body;

  Shift.create({
    employeeId,
    shiftCode,
    startDate,
    endDate,
  })
    .then((shift) => {
      res.status(201).json({
        shift,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        msg: 'System Error. Cannot create shift schedule.',
      });
    });
};

exports.getShifts = (req, res) => {
  Shift.findAll()
    .then((shifts) => {
      res.status(200).json({
        shifts,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        msg: 'System Error. Cannot load Shift Schedules',
      });
    });
};

exports.changeShifts = (req, res) => {
  res.send(
    db.query(
      'UPDATE shifts SET shift_code = (CASE WHEN shift_code = "first" THEN "second" WHEN shift_code = "second" THEN "third" WHEN shift_code = "third" THEN "first" end)'
    )
  );
};
