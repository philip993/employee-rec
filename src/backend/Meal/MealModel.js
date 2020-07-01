const { Sequelize } = require('sequelize');
const db = require('../database/db');

const Meals = db.define(
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Meals;
