const { Sequelize } = require('sequelize');
const db = require('../database/db');

const Shift = db.define(
  'shift',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    employeeId: {
      type: Sequelize.INTEGER,
      references: 'employees',
      refencesKey: 'id',
      field: 'employee_id',
    },
    shiftCode: {
      type: Sequelize.ENUM({
        values: ['first', 'second', 'third'],
      }),
      allowNull: false,
      field: 'shift_code',
    },
    startDate: {
      type: Sequelize.DATEONLY,
      allowNull: false,
      field: 'start_date',
    },
    endDate: {
      type: Sequelize.DATEONLY,
      allowNull: false,
      field: 'end_date',
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Shift;
