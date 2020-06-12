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
    work_department: {
      type: Sequilize.STRING,
    },
    employment_date: {
      type: Sequilize.DATE,
    },
    address: {
      type: Sequilize.STRING,
    },
    city: {
      type: Sequilize.STRING,
    },
    state: {
      type: Sequilize.STRING,
    },
    social_number: {
      type: Sequilize.STRING,
    },
    identity_card: {
      type: Sequilize.STRING,
    },
    telephone_number: {
      type: Sequilize.STRING,
    },
    email_address: {
      type: Sequilize.STRING,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Employee;
