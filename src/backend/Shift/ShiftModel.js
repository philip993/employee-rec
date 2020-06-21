const { Sequelize } = require('sequelize');
const db = require('../database/db');

const Shift = db.define('shift', {
  id: {
    type: Sequelize.INTEGER,
    references: 'employees',
    refencesKey: 'id',
  },
  shiftCode: {
    type: Sequelize.toString,
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
});

module.exports = Shift;
