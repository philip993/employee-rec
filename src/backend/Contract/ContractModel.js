const { Sequelize } = require('sequelize');
const db = require('../database/db');
const Employee = require('../Employee/EmployeeModel');

const Contract = db.define(
  'contract',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    contractId: {
      type: Sequelize.INTEGER,
      references: 'employees',
      referencesKey: 'id',
      field: 'contract_id',
    },
    contractStart: {
      type: Sequelize.DATEONLY,
      allowNull: false,
      field: 'contract_start',
    },
    contractEnd: {
      type: Sequelize.DATEONLY,
      allowNull: false,
      field: 'contract_end',
    },
    activeContract: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: 1,
      field: 'active_contract',
    },
    daysLeft: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
      field: 'days_left',
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Contract;
