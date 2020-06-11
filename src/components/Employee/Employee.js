import React, { useEffect } from 'react';
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
} from '@material-ui/core';

const Employee = () => {
  const data = useSelector((state) => state.EmployeeReducer);
  const dispatch = useDispatch();
  const classes = Styles();
  const history = useHistory();

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

  return (
    <div className={classes.pageContainer}>
      <Typography variant="h4">List of Employees</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>No.</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Surname</TableCell>
            <TableCell>Position</TableCell>
            <TableCell>Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.employees.map((employee, index) => (
            <TableRow key={employee.id}>
              <TableCell>{employee.id}</TableCell>
              <TableCell>{employee.first_name}</TableCell>
              <TableCell>{employee.second_name}</TableCell>
              <TableCell>{employee.position}</TableCell>
              <TableCell>
                <Button onClick={handleEmployeeDetails.bind(this, employee.id)}>
                  Details
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Employee;
