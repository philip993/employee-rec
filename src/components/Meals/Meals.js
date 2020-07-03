import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Style
import Style from '../Style/Style';
// Redux Actions
import { requestMealSchedule } from './MealActions';
// Material Ui
import {
  Typography,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableFooter,
} from '@material-ui/core';

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
      <Table className={classes.mealTable}>
        <TableHead>
          <TableRow className={classes.mealSub}>
            <TableCell className={classes.mealCellTwo}>SHIFT</TableCell>
            <TableCell className={classes.mealCell}>COUNT</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell className={classes.mealCellTwo}>FIRST</TableCell>
            <TableCell className={classes.mealCell}>
              {mealsSchedule
                .filter((s) => s.shifts[0].shiftCode === 'first')
                .map((arr) => arr.mealCount)
                .reduce((a, b) => a + b, 0)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.mealCellTwo}>SECOND</TableCell>
            <TableCell className={classes.mealCell}>
              {mealsSchedule
                .filter((s) => s.shifts[0].shiftCode === 'second')
                .map((arr) => arr.mealCount)
                .reduce((a, b) => a + b, 0)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.mealCellTwo}>THIRD</TableCell>
            <TableCell className={classes.mealCell}>
              {mealsSchedule
                .filter((s) => s.shifts[0].shiftCode === 'third')
                .map((arr) => arr.mealCount)
                .reduce((a, b) => a + b, 0)}
            </TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell className={classes.mealCellFooter}>TOTAL</TableCell>
            <TableCell className={classes.mealCellFooter}>
              {mealsSchedule
                .map((arr) => arr.mealCount)
                .reduce((a, b) => a + b, 0)}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default Meals;
