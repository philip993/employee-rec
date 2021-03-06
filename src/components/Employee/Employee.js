import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Styles
import Styles from '../Style/Style';
import './Employee.scss';
// Redux Actions
import { requestEmployees } from './EmployeeActions';
import { requestDetails } from '../Details/DetailsActions';
// React Router Dom
import { useHistory } from 'react-router-dom';
// Material-Ui
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  Button,
  TablePagination,
  Popper,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Alert } from '@material-ui/lab';

const Employee = () => {
  const { employees } = useSelector((state) => state.EmployeeReducer);
  const dispatch = useDispatch();
  const classes = Styles();
  const history = useHistory();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);
  const [preview, setPreview] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    dispatch(requestEmployees());
  }, []);

  const handleEmployeeDetails = (e) => {
    console.log(e);
    dispatch(requestDetails(e));
    setTimeout(() => {
      history.push('/details');
    }, 500);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handlePreview = (e) => {
    setPreview(true);
    setAnchorEl(e.currentTarget);
  };

  const handleClosePreview = () => {
    setPreview(false);
  };

  return (
    <div className={classes.pageContainer}>
      <Typography variant="h4" className={classes.pageSubtitle}>
        Employees
      </Typography>
      <Table className={classes.tableLayout}>
        <TableHead>
          <TableRow className={classes.tableHeader}>
            <TableCell className={classes.tableHeaderCell}>No.</TableCell>
            <TableCell className={classes.tableHeaderCell}>Name</TableCell>
            <TableCell className={classes.tableHeaderCell}>Surname</TableCell>
            <TableCell className={classes.tableHeaderCell}>Position</TableCell>
            <TableCell className={classes.tableHeaderCell}>Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .sort((empA, empB) => empA.id - empB.id)
            .map(({ id, firstName, secondName, position }, index) => (
              <TableRow>
                <TableCell className={classes.tableCell}>{id}</TableCell>
                <TableCell className={classes.tableCell}>{firstName}</TableCell>
                <TableCell className={classes.tableCell}>
                  {secondName}
                </TableCell>
                <TableCell className={classes.tableCell}>{position}</TableCell>
                <TableCell
                  className={classes.tableCell}
                  onMouseOut={handleClosePreview}
                  onMouseOver={handlePreview}
                >
                  <Button onClick={handleEmployeeDetails.bind(this, id)}>
                    Show <ExpandMoreIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        className={classes.tablePagination}
        rowsPerPageOptions={[2, 25, 50]}
        component="div"
        count={employees.length}
        page={page}
        rowsPerPage={rowsPerPage}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
      <Popper className="popup" open={preview} anchorEl={anchorEl}>
        <Alert severity="info">Employee's Profile</Alert>
      </Popper>
    </div>
  );
};

export default Employee;
