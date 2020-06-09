const Sequilize = require('sequelize');
const db = require('../database/db');

const Employee = db.define(
  'employee',
  {
    first_name: {
      type: Sequilize.STRING,
    },
    second_name: {
      type: Sequilize.STRING,
    },
    position: {
      type: Sequilize.STRING,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Employee;
