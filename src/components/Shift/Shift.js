import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Styles
import Styles from '../Style/Style';
import './ShiftStyles.scss';
// Redux Actions
import { requestGetShifts, requestSwitchShiftSchedule } from './ShiftActions';
// React Components
import Pdf from '../Pdf/Pdf';
// Material Ui
import {
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from '@material-ui/core';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import Search from '../Search/Search';
import SearchView from '../Search/SearchView';

const Shift = () => {
  const { shiftSchedule, searchQuery } = useSelector((state) => ({
    ...state.ShiftReducer,
    ...state.SearchReducer,
  }));
  const dispatch = useDispatch();
  const classes = Styles();

  const handleSwitchShiftSchedule = () => {
    dispatch(requestSwitchShiftSchedule());
    window.location.reload();
  };

  useEffect(() => {
    dispatch(requestGetShifts());
  }, []);

  return (
    <div>
      <Typography variant="h4">Shift Schedule</Typography>
      <Search />
      {!searchQuery
        ? 'Employee is not in the list...'
        : searchQuery.map((empl, index) => (
            <SearchView {...empl.employees[index]} />
          ))}
      <Table id="table">
        <TableHead>
          <TableRow className={classes.tableHeader}>
            <TableCell id="id">EMPLOYEE ID</TableCell>
            <TableCell id="fname">FIRST NAME</TableCell>
            <TableCell id="lname">LAST NAME</TableCell>
            <TableCell id="department">DEPARTMENT</TableCell>
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
                    {employees[0].workDepartment}
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
      <Button
        onClick={handleSwitchShiftSchedule}
        className={classes.switchScheduleBtn}
      >
        New Schedule <AutorenewIcon />
      </Button>
    </div>
  );
};

export default Shift;
