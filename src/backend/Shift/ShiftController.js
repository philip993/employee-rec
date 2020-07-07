const Shift = require('./ShiftModel');
const db = require('../database/db');
const Employee = require('../Employee/EmployeeModel');

exports.createShift = (req, res) => {
  let { employeeId, shiftCode, startDate, endDate, mealCount } = req.body;

  Shift.create({
    employeeId,
    shiftCode,
    startDate,
    endDate,
    mealCount,
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
  Shift.findAll({
    include: [
      {
        model: Employee,
        as: 'employees',
      },
    ],
  })
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

exports.getOneEmployeeShift = (req, res) => {
  Shift.findOne({
    where: { employeeId: req.params.id },
    include: [{ model: Employee, as: 'employees' }],
  })
    .then((oneEmp) => {
      if (oneEmp === null) {
        console.log('no employee');
        res.status(404).json({
          msg: 'Invalid Employee ID',
        });
        return;
      }
      res.status(200).json({
        oneEmp,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        msg: 'System Error.',
      });
    });
};

exports.changeShifts = (req, res) => {
  res.send(
    db.query(
      'UPDATE shifts SET shift_code = (CASE WHEN shift_code = "first" THEN "second" WHEN shift_code = "second" THEN "third" WHEN shift_code = "third" THEN "first" end)'
    ),
    db.query(
      'UPDATE shifts SET start_date=DATE_ADD(start_date, INTERVAL 7 DAY)'
    ),
    db.query('UPDATE shifts SET end_date=DATE_ADD(end_date, INTERVAL 7 DAY)')
  );
};
