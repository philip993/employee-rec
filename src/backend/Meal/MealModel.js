const { Sequelize } = require('sequelize');
const db = require('../database/db');

const Meals = db.define(
  'meals',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    shiftId: {
      type: Sequelize.INTEGER,
      references: 'shifts',
      referencesKey: 'id',
      field: 'shift_id',
    },
    mealCount: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: 'meal_count',
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Meals;
