import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Styles
import Styles from '../Style/Style';
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
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Employee = () => {
  const { employees } = useSelector((state) => state.EmployeeReducer);
  const dispatch = useDispatch();
  const classes = Styles();
  const history = useHistory();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);

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

  return (
    <div className={classes.pageContainer}>
      <Typography variant="h4" className={classes.pageSubheader}>
        Employees
      </Typography>
      <Table className={classes.tableLayout}>
        <TableHead>
          <TableRow className={classes.listSub}>
            <TableCell>No.</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Surname</TableCell>
            <TableCell>Position</TableCell>
            <TableCell>Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map(({ id, firstName, secondName, position }, index) => (
              <TableRow key={id}>
                <TableCell className={classes.tableCell}>{id}</TableCell>
                <TableCell className={classes.tableCell}>{firstName}</TableCell>
                <TableCell className={classes.tableCell}>
                  {secondName}
                </TableCell>
                <TableCell className={classes.tableCell}>{position}</TableCell>
                <TableCell className={classes.tableCell}>
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
    </div>
  );
};

export default Employee;
