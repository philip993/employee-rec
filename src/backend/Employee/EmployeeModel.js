const Sequilize = require('sequelize');
const db = require('../database/db');

const Employee = db.define(
  'employee',
  {
    firstName: {
      type: Sequilize.STRING,
      field: 'first_name',
    },
    secondName: {
      type: Sequilize.STRING,
      field: 'second_name',
    },
    position: {
      type: Sequilize.STRING,
      field: 'position',
    },
    workDepartment: {
      type: Sequilize.STRING,
      field: 'work_department',
    },
    employmentDate: {
      type: Sequilize.DATE,
      field: 'employment_date',
    },
    address: {
      type: Sequilize.STRING,
      field: 'address',
    },
    city: {
      type: Sequilize.STRING,
      field: 'city',
    },
    state: {
      type: Sequilize.STRING,
      field: 'state',
    },
    socialNumber: {
      type: Sequilize.STRING,
      field: 'social_number',
    },
    identityCard: {
      type: Sequilize.STRING,
      field: 'identity_card',
    },
    telephoneNumber: {
      type: Sequilize.STRING,
      field: 'telephone_number',
    },
    emailAddress: {
      type: Sequilize.STRING,
      field: 'email_address',
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Employee;
