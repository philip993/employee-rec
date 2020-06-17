import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Styles
import Styles from '../Style/Style';
// React Component
import EmploymentInfo from './EmploymentInfo';
import PersonalInfo from './PersonalInfo';
import AddressInfo from './AddressInfo';
// Redux Actions
import {} from './AddEmployeeActions';
// Material-Ui
import { Typography } from '@material-ui/core';
import ContactInfo from './ContactInfo';

const AddEmployee = () => {
  const { step } = useSelector((state) => state.AddEmployeeReducer);
  const dispatch = useDispatch();
  const classes = Styles();

  return (
    <div className={classes.pageContainer}>
      <Typography variant="h4">Add New Employee</Typography>
      {step === 1 ? (
        <PersonalInfo />
      ) : step === 2 ? (
        <EmploymentInfo />
      ) : step === 3 ? (
        <AddressInfo />
      ) : step === 4 ? (
        <ContactInfo />
      ) : (
        'xxx'
      )}
    </div>
  );
};

export default AddEmployee;
