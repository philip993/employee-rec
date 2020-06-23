import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Styles
import Styles from '../Style/Style';
import './ShiftStyles.scss';
// Redux Actions
import { requestGetShifts } from './ShiftActions';
// Material Ui
import {
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';
import Pdf from '../Pdf/Pdf';

const Shift = () => {
  const { shiftSchedule } = useSelector((state) => state.ShiftReducer);
  const dispatch = useDispatch();
  const classes = Styles();

  useEffect(() => {
    dispatch(requestGetShifts());
  }, []);

  return (
    <div>
      <Typography variant="h4">Shift Schedule</Typography>
      <Table id="table">
        <TableHead>
          <TableRow className={classes.tableHeader}>
            <TableCell id="id">EMPLOYEE ID</TableCell>
            <TableCell id="fname">FIRST NAME</TableCell>
            <TableCell id="lname">LAST NAME</TableCell>
            <TableCell id="sdate">START DATE</TableCell>
            <TableCell id="edate">END DATE</TableCell>
            <TableCell id="shift">SHIFT</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {shiftSchedule
            .sort((a, b) =>
              a.shiftCode > b.shiftCode ? 1 : b.shiftCode > a.shiftCode ? -1 : 0
            )
            .map(
              ({
                id,
                employeeId,
                shiftCode,
                startDate,
                endDate,
                employees,
              }) => (
                <TableRow key={id} className={classes.shiftRow}>
                  <TableCell className={classes.shiftRow}>
                    {employeeId}
                  </TableCell>
                  <TableCell className={classes.shiftRow}>
                    {employees[0].firstName}
                  </TableCell>
                  <TableCell className={classes.shiftRow}>
                    {employees[0].secondName}
                  </TableCell>
                  <TableCell className={classes.shiftRow}>
                    {startDate}
                  </TableCell>
                  <TableCell className={classes.shiftRow}>{endDate}</TableCell>
                  <TableCell className={classes.shiftRow}>
                    {shiftCode}
                  </TableCell>
                </TableRow>
              )
            )}
        </TableBody>
      </Table>
      <Pdf />
    </div>
  );
};

export default Shift;
