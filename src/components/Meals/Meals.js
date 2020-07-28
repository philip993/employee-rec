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
      <Typography variant="h4" id="mealSub" className={classes.pageSubtitle}>
        Meals Schedule
      </Typography>
      <Table className={classes.tableLayoutSmall} id="pdf-table">
        <TableHead>
          <TableRow className={classes.tableHeader}>
            <TableCell className={classes.tableCellMiddle}>SHIFT</TableCell>
            <TableCell className={classes.tableCellBold}>COUNT</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell className={classes.tableCellMiddle}>FIRST</TableCell>
            <TableCell className={classes.tableCellBold}>
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
            <TableCell className={classes.tableCellMiddle}>SECOND</TableCell>
            <TableCell className={classes.tableCellBold}>
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
            <TableCell className={classes.tableCellMiddle}>THIRD</TableCell>
            <TableCell className={classes.tableCellBold}>
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
            <TableCell className={classes.tableCellBold}>TOTAL</TableCell>
            <TableCell className={classes.tableCellBold}>
              {shiftSchedule
                .filter((empl) => empl.employeeStatus === 'active')
                .map((arr) => arr.mealCount)
                .reduce((a, b) => a + b, 0)}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      <div className={classes.buttonSmallSpan}>
        <Pdf />
      </div>
    </div>
  );
};

export default Meals;
