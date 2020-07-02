const { Sequelize } = require('sequelize');
const db = require('../database/db');
const Meals = require('../Meal/MealModel');
const Employee = require('../Employee/EmployeeModel');

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
      referencesKey: 'id',
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

Shift.hasOne(Meals, { foreignKey: 'shift_id' });
Meals.hasMany(Shift, { as: 'shifts', foreignKey: 'id' });

module.exports = Shift;
