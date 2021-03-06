const { Sequelize } = require('sequelize');
const Shift = require('../Shift/ShiftModel');
const Contract = require('../Contract/ContractModel');
const db = require('../database/db');

const Employee = db.define(
  'employee',
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id',
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'firstName is required..' },
      },
      field: 'first_name',
    },
    secondName: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'second_name',
    },
    gender: {
      type: Sequelize.ENUM('male', 'female'),
      allowNull: false,
      field: 'gender',
    },
    age: {
      type: Sequelize.NUMBER,
      allowNull: false,
      field: 'age',
    },
    position: {
      type: Sequelize.ENUM({
        values: [
          'worker',
          'support',
          'accountant',
          'seller',
          'hrspecialist',
          'supervisor',
          'manager',
        ],
      }),
      allowNull: false,

      field: 'position',
    },
    workDepartment: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'work_department',
    },
    employmentDate: {
      type: Sequelize.DATEONLY,
      field: 'employment_date',
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'address',
    },
    city: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'city',
    },
    state: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'state',
    },
    socialNumber: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      field: 'social_number',
    },
    identityCard: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      field: 'identity_card',
    },
    telephoneNumber: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'telephone_number',
    },
    emailAddress: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      field: 'email_address',
    },
  },
  {
    timestamps: false,
  }
);

Employee.hasOne(Shift, { foreignKey: 'employeeId' });
Employee.hasOne(Contract, { foreignKey: 'contractId' });
Shift.hasMany(Employee, {
  as: 'employees',
  foreignKey: 'id',
  sourceKey: 'employeeId',
});
Contract.hasMany(Employee, {
  as: 'employees',
  foreignKey: 'id',
  sourceKey: 'contractId',
});

module.exports = Employee;
