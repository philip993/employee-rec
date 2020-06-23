import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Styles
import Styles from '../Style/Style';
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
          <TableRow>
            <TableCell>EMPLOYEE ID</TableCell>
            <TableCell>FIRST NAME</TableCell>
            <TableCell>LAST NAME</TableCell>
            <TableCell>START DATE</TableCell>
            <TableCell>END DATE</TableCell>
            <TableCell>SHIFT</TableCell>
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
                <TableRow key={id}>
                  <TableCell>{employeeId}</TableCell>
                  <TableCell>{employees[0].firstName}</TableCell>
                  <TableCell>{employees[0].secondName}</TableCell>
                  <TableCell>{startDate}</TableCell>
                  <TableCell>{endDate}</TableCell>
                  <TableCell>{shiftCode}</TableCell>
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
