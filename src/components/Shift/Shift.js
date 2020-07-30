import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Styles
import Styles from '../Style/Style';
import './ShiftStyles.scss';
// React Route Dom
import { useHistory } from 'react-router-dom';
// Redux Actions
import {
  requestGetShifts,
  requestSwitchShiftSchedule,
  sortShiftAcc,
  sortShiftDec,
} from './ShiftActions';
import {
  selectShift,
  requestStatusActive,
  requestStatusInactive,
  requestChangeShift,
  inputShiftCode,
} from '../UpdateShift/UpdateShiftActions';
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
  Modal,
  InputBase,
  InputLabel,
  Select,
  MenuItem,
  Popper,
  FormGroup,
} from '@material-ui/core';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import SwapVertIcon from '@material-ui/icons/SwapVert';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import { Alert } from '@material-ui/lab';

const Shift = () => {
  const { shiftSchedule, searchQuery, shiftCode } = useSelector((state) => ({
    ...state.ShiftReducer,
    ...state.SearchReducer,
    ...state.UpdateShiftReducer,
  }));
  const dispatch = useDispatch();
  const classes = Styles();
  const history = useHistory();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);
  const [toggle, setToggle] = useState(null);
  const [open, setOpen] = useState(null);
  const [preview, setPreview] = useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleCloseModal = () => {
    setOpen(false);
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

  const handleStatusActive = (e) => {
    dispatch(selectShift(e));
    dispatch(requestStatusActive());
    window.location.reload();
  };

  const handleStatusInactive = (e) => {
    dispatch(selectShift(e));
    dispatch(requestStatusInactive());
    window.location.reload();
  };

  const handleShiftSwitch = (e) => {
    dispatch(selectShift(e));
    setOpen(true);
  };

  const handleShiftInput = (e) => {
    dispatch(inputShiftCode(e.target.value));
  };

  const handleSwitchUpdate = () => {
    dispatch(requestChangeShift());
    setOpen(false);
  };

  const handlePreview = (e) => {
    setPreview(true);
    setAnchorEl(e.currentTarget);
  };

  const handleClosePreview = () => {
    setPreview(false);
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
              <TableCell id="status">STATUS</TableCell>
              <TableCell id="sdate">START DATE</TableCell>
              <TableCell id="edate">END DATE</TableCell>
              <TableCell id="shift">SHIFT</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {shiftSchedule
              .filter((empl) => empl.employeeStatus === 'active')
              .map(
                ({
                  id,
                  employeeId,
                  shiftCode,
                  startDate,
                  employeeStatus,
                  endDate,
                  employees,
                }) => (
                  <TableRow key={id} className={classes.tableCell}>
                    <TableCell className={classes.tableCell}>
                      {employeeId}
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      {employees[0].firstName}
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      {employees[0].secondName}
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      {employees[0].workDepartment}
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      {employeeStatus}
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      {startDate}
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      {endDate}
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      {shiftCode}
                    </TableCell>
                  </TableRow>
                )
              )}
          </TableBody>
        </Table>
      </div>
      <Typography variant="h4" className={classes.pageSubtitle}>
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
      <Table id="table" className={classes.tableLayout}>
        <TableHead>
          <TableRow className={classes.tableHeader}>
            <TableCell className={classes.tableHeaderCell}>
              EMPLOYEE ID
            </TableCell>
            <TableCell className={classes.tableHeaderCell}>
              FIRST NAME
            </TableCell>
            <TableCell className={classes.tableHeaderCell}>LAST NAME</TableCell>
            <TableCell className={classes.tableHeaderCell}>
              DEPARTMENT
            </TableCell>
            <TableCell className={classes.tableHeaderCell}>STATUS</TableCell>
            <TableCell className={classes.tableHeaderCell}>
              START DATE
            </TableCell>
            <TableCell className={classes.tableHeaderCell}>END DATE</TableCell>
            <TableCell className={classes.tableHeaderCell}>
              SHIFT
              <Button onClick={toggle === true ? handleSort : handleSortDec}>
                <SwapVertIcon className={classes.tableIcon} />
              </Button>
            </TableCell>
            <TableCell className={classes.tableHeaderCell}>STATUS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {shiftSchedule
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map(
              (
                {
                  id,
                  employeeId,
                  shiftCode,
                  employeeStatus,
                  startDate,
                  endDate,
                  employees,
                },
                index
              ) => (
                <TableRow key={id} className={classes.tableCell}>
                  <TableCell className={classes.tableCell}>
                    {employeeId}
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    {employees[0].firstName}
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    {employees[0].secondName}
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    {employees[0].workDepartment}
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    {employeeStatus}
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    {startDate}
                  </TableCell>
                  <TableCell className={classes.tableCell}>{endDate}</TableCell>
                  <TableCell
                    className={classes.tableCell}
                    onClick={handleShiftSwitch.bind(this, shiftSchedule[index])}
                    onMouseOut={handleClosePreview}
                    onMouseOver={handlePreview}
                  >
                    <Button>{shiftCode}</Button>
                  </TableCell>
                  <TableCell
                    className={classes.tableCell}
                    onMouseOut={handleClosePreview}
                    onMouseOver={handlePreview}
                  >
                    <Button
                      onClick={
                        employeeStatus === 'active'
                          ? handleStatusInactive.bind(this, id)
                          : handleStatusActive.bind(this, id)
                      }
                    >
                      {employeeStatus === 'active' ? (
                        <PauseCircleOutlineIcon />
                      ) : (
                        <LibraryAddIcon />
                      )}
                    </Button>
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
      <div className={classes.buttonNormalSpan}>
        <Pdf />
        <Button
          onClick={handleSwitchShiftSchedule}
          className={classes.buttonLeft}
        >
          New Schedule <AutorenewIcon />
        </Button>
      </div>
      <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="title"
        aria-describedby="description"
      >
        <form id="modalForm">
          <Typography className={classes.formTitle} variant="h6">
            CHANGE SHIFT
          </Typography>
          <FormGroup className={classes.formGroup}>
            <InputLabel className="modalTitle">SHIFT</InputLabel>
            <Select
              className="shiftCode"
              value={shiftCode}
              onChange={handleShiftInput}
            >
              <MenuItem className={classes.menuItem} value="first">
                FIRST
              </MenuItem>
              <MenuItem className={classes.menuItem} value="second">
                SECOND
              </MenuItem>
              <MenuItem className={classes.menuItem} value="third">
                THIRD
              </MenuItem>
            </Select>
          </FormGroup>
          <FormGroup className={classes.formGroup}>
            <Button className={classes.formButton} onClick={handleSwitchUpdate}>
              Update
            </Button>
          </FormGroup>
        </form>
      </Modal>
      <Popper className="popup" open={preview} anchorEl={anchorEl}>
        <Alert severity="info">Action</Alert>
      </Popper>
    </div>
  );
};

export default Shift;
