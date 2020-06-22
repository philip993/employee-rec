const { Sequelize } = require('sequelize');
const db = require('../database/db');

const Shift = db.define(
  'shift',
  {
    employeeId: {
      type: Sequelize.INTEGER,
      references: 'employees',
      refencesKey: 'id',
      field: 'employee_id',
    },
    shiftCode: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'shift_code',
    },
    startDate: {
      type: Sequelize.DATE,
      allowNull: false,
      field: 'start_date',
    },
    endDate: {
      type: Sequelize.DATE,
      allowNull: false,
      field: 'end_date',
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Shift;
