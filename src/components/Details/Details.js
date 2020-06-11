import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Styles
import Styles from '../Style/Style';
// Material-Ui
import {
  Typography,
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
} from '@material-ui/core';

const Details = () => {
  const emp = useSelector((state) => state.DetailsReducer);
  const dispatch = useDispatch();
  const classes = Styles();

  return (
    <div className={classes.pageContainer}>
      <Typography variant="h4">Details</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Surname</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {emp.details.map(({ id, first_name, second_name }, index) => (
            <TableRow>
              <TableCell>{id}</TableCell>
              <TableCell>{first_name}</TableCell>
              <TableCell>{second_name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Details;
