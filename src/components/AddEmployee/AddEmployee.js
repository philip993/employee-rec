import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Styles
import Styles from '../Style/Style';
// React Component
import EmploymentInfo from './EmploymentInfo';
// Redux Actions
import {} from './AddEmployeeActions';
// Material-Ui
import { Typography, FormGroup, InputBase } from '@material-ui/core';
import PersonalInfo from './PersonalInfo';

const AddEmployee = () => {
  const { step } = useSelector((state) => state.AddEmployeeReducer);
  const dispatch = useDispatch();
  const classes = Styles();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submited');
  };

  return (
    <div className={classes.pageContainer}>
      <Typography variant="h4">Add New Employee</Typography>
      {step === 1 ? <PersonalInfo /> : step === 2 ? <EmploymentInfo /> : 'xxx'}
    </div>
  );
};

export default AddEmployee;
