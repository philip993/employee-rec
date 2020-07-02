const Meals = require('./MealModel');
const Shift = require('../Shift/ShiftModel');
const Employee = require('../Employee/EmployeeModel');

exports.getMeals = (req, res) => {
  Meals.findAll({
    include: [
      {
        model: Shift,
        as: 'shifts',
      },
      {
        model: Employee,
        as: 'employees',
      },
    ],
  })
    .then((meals) => {
      res.status(200).json({
        meals,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        msg: 'System Error. Cannot load Meal Schedule!',
      });
    });
};

exports.createMeals = (req, res) => {
  let { shiftId } = req.body;
  Meals.create({
    shiftId,
  })
    .then((meal) => {
      res.status(201).json({
        meal,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        msg: 'System Error. Cannot Create Meal Schedule!',
      });
    });
};
