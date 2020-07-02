import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Style
import Style from '../Style/Style';
// Redux Actions
import { requestMealSchedule } from './MealActions';
// Material Ui
import { Typography, Button } from '@material-ui/core';

const Meals = () => {
  const { mealsSchedule } = useSelector((state) => state.MealsReducer);
  const dispatch = useDispatch();
  const classes = Style();

  useEffect(() => {
    dispatch(requestMealSchedule());
  }, []);

  return (
    <div>
      <Typography variant="h4">Meals Schedule</Typography>
      {mealsSchedule
        .filter((empl, index) => empl.shifts[0].shiftCode === 'third')
        .map((meal) => (
          <div>
            <h4>{meal.id}</h4>
            <h4>{meal.employees[0].firstName}</h4>
            <h4>{meal.shifts[0].shiftCode}</h4>
            <h4>{meal.shifts.length}</h4>
          </div>
        ))}
    </div>
  );
};

export default Meals;
