import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Style
import Style from '../Style/Style';
// Redux Actions
import { requestGetShifts } from '../Shift/ShiftActions';
// Material Ui
import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Typography,
} from '@material-ui/core';

const InactiveList = () => {
  const { shiftSchedule } = useSelector((state) => ({
    ...state.ShiftReducer,
  }));
  const dispatch = useDispatch();
  const classes = Style();

  useEffect(() => {
    dispatch(requestGetShifts());
  }, []);

  return (
    <div>
      <Typography variant="h4" className={classes.pageSubtitle}>
        On Leave
      </Typography>
      <Table className={classes.tableLayoutSmall}>
        <TableHead>
          <TableRow className={classes.tableHeader}>
            <TableCell className={classes.tableHeaderCell}>ID</TableCell>
            <TableCell className={classes.tableHeaderCell}>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {shiftSchedule
            .filter((emp) => emp.employeeStatus === 'inactive')
            .map((empl) => (
              <TableRow key={empl.id}>
                <TableCell className={classes.tableCell}>
                  {empl.employeeId}
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {empl.employees[0].firstName} {empl.employees[0].secondName}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default InactiveList;
