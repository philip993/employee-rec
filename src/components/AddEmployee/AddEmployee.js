import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Styles
import Styles from '../Style/Style';
// Redux Actions
import {} from './AddEmployeeActions';
// Material-Ui
import { Typography, FormGroup, InputBase } from '@material-ui/core';

const AddEmployee = () => {
  const addEmp = useSelector((state) => state.AddEmployeeReducer);
  const dispatch = useDispatch();
  const classes = Styles();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submited');
  };

  return (
    <div className={classes.pageContainer}>
      <Typography variant="h4">Add New Employee</Typography>
      <form>
        <FormGroup>
          <InputBase
            type="text"
            value={'val'}
            onChange={'func'}
            placeholder="First Name here.."
          />
        </FormGroup>
      </form>
    </div>
  );
};

export default AddEmployee;
