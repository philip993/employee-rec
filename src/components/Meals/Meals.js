import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Style
import Style from '../Style/Style';
import './Meals.scss';
// Redux Actions
import { requestGetShifts } from '../Shift/ShiftActions';
// Material Ui
import {
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableFooter,
} from '@material-ui/core';
import Pdf from '../Pdf/Pdf';

const Meals = () => {
  const { shiftSchedule } = useSelector((state) => state.ShiftReducer);
  const dispatch = useDispatch();
  const classes = Style();

  useEffect(() => {
    dispatch(requestGetShifts());
  }, []);

  return (
    <div>
      <Typography variant="h4" id="mealSub" className={classes.pageSubheader}>
        Meals Schedule
      </Typography>
      <Table className={classes.mealTable} id="pdf-table">
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
              {shiftSchedule
                .filter(
                  (s) =>
                    s.shiftCode === 'first' && s.employeeStatus === 'active'
                )
                .map((arr) => arr.mealCount)
                .reduce((a, b) => a + b, 0)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.mealCellTwo}>SECOND</TableCell>
            <TableCell className={classes.mealCell}>
              {shiftSchedule
                .filter(
                  (s) =>
                    s.shiftCode === 'second' && s.employeeStatus === 'active'
                )
                .map((arr) => arr.mealCount)
                .reduce((a, b) => a + b, 0)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.mealCellTwo}>THIRD</TableCell>
            <TableCell className={classes.mealCell}>
              {shiftSchedule
                .filter(
                  (s) =>
                    s.shiftCode === 'third' && s.employeeStatus === 'active'
                )
                .map((arr) => arr.mealCount)
                .reduce((a, b) => a + b, 0)}
            </TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell className={classes.mealCellFooter}>TOTAL</TableCell>
            <TableCell className={classes.mealCellFooter}>
              {shiftSchedule
                .filter((empl) => empl.employeeStatus === 'active')
                .map((arr) => arr.mealCount)
                .reduce((a, b) => a + b, 0)}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      <div className={classes.mealsBtnSpan}>
        <Pdf />
      </div>
    </div>
  );
};

export default Meals;
