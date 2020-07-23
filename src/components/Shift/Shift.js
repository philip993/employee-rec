import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Styles
import Styles from '../Style/Style';
import './ShiftStyles.scss';
// Redux Actions
import {
  requestGetShifts,
  requestSwitchShiftSchedule,
  sortShiftAcc,
  sortShiftDec,
} from './ShiftActions';
// React Components
import Pdf from '../Pdf/Pdf';
import Search from '../Search/Search';
import SearchView from '../Search/SearchView';
import SearchError from '../Search/SearchError';
// Material Ui
import {
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  TablePagination,
} from '@material-ui/core';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import SwapVertIcon from '@material-ui/icons/SwapVert';

const Shift = () => {
  const { shiftSchedule, searchQuery } = useSelector((state) => ({
    ...state.ShiftReducer,
    ...state.SearchReducer,
  }));
  const dispatch = useDispatch();
  const classes = Styles();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);
  const [toggle, setToggle] = useState(null);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSwitchShiftSchedule = () => {
    dispatch(requestSwitchShiftSchedule());
    window.location.reload();
  };

  const handleSort = () => {
    dispatch(sortShiftAcc());
    setToggle(false);
  };

  const handleSortDec = () => {
    dispatch(sortShiftDec());
    setToggle(true);
  };

  useEffect(() => {
    dispatch(requestGetShifts());
  }, []);

  return (
    <div className={classes.pageContainer}>
      <div hidden disabled>
        <Table id="pdf-table">
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
            {shiftSchedule.map(
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
      </div>
      <Typography variant="h4" className={classes.pageSubheader}>
        Shift Schedule
      </Typography>
      <div className={classes.searchDiv}>
        <Search />
        {!searchQuery ? (
          <SearchError />
        ) : (
          searchQuery.map((empl, index) => (
            <SearchView key={empl.id} {...empl} />
          ))
        )}
      </div>
      <Table id="table" className={classes.shiftsTables}>
        <TableHead>
          <TableRow className={classes.tableHeader}>
            <TableCell id="id">EMPLOYEE ID</TableCell>
            <TableCell id="fname">FIRST NAME</TableCell>
            <TableCell id="lname">LAST NAME</TableCell>
            <TableCell id="department">DEPARTMENT</TableCell>
            <TableCell id="sdate">START DATE</TableCell>
            <TableCell id="edate">END DATE</TableCell>
            <TableCell id="shift">
              SHIFT
              <Button onClick={toggle === true ? handleSort : handleSortDec}>
                <SwapVertIcon />
              </Button>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {shiftSchedule
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
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
      <TablePagination
        className={classes.tablePagination}
        rowsPerPageOptions={[10, 25, 50]}
        component="div"
        count={shiftSchedule.length}
        page={page}
        rowsPerPage={rowsPerPage}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
      <div className={classes.shiftBtnSpan}>
        <Pdf />
        <Button
          onClick={handleSwitchShiftSchedule}
          className={classes.switchScheduleBtn}
        >
          New Schedule <AutorenewIcon />
        </Button>
      </div>
    </div>
  );
};

export default Shift;
