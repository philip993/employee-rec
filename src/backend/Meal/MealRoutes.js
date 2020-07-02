const express = require('express');
const router = express.Router();
const mealCtrl = require('./MealController');

router.get('/', mealCtrl.getMeals);
router.post('/add', mealCtrl.createMeals);

module.exports = router;
