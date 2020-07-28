import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Styles
import Styles from '../Style/Style';
// React Router Dom
import { useHistory } from 'react-router-dom';
// React Component
import EmploymentInfo from './EmploymentInfo';
import PersonalInfo from './PersonalInfo';
import AddressInfo from './AddressInfo';
import ContactInfo from './ContactInfo';
import IdentityInfo from './IdentityInfo';
// Redux Actions
import {} from './AddEmployeeActions';
// Material-Ui
import { Typography, Stepper, Step, StepLabel } from '@material-ui/core';
import Finish from './Finish';
import AddEmployeeError from './AddEmployeeError';

const AddEmployee = () => {
  const { step, activeStep, errors } = useSelector(
    (state) => state.AddEmployeeReducer
  );
  const dispatch = useDispatch();
  const classes = Styles();
  const history = useHistory();

  return (
    <div className={classes.pageContainer}>
      {errors === null
        ? ''
        : errors === false
        ? history.push('/addsuccess')
        : history.push('/addfail')}
      <Typography variant="h4" className={classes.pageSubheader}>
        Add New Employee
      </Typography>
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        className={classes.formStepper}
      >
        <Step activeStep={activeStep === 0}>
          <StepLabel>Personal Information</StepLabel>
        </Step>
        <Step>
          <StepLabel>Eployment Information</StepLabel>
        </Step>
        <Step>
          <StepLabel>Address Information</StepLabel>
        </Step>
        <Step>
          <StepLabel>Identity Information</StepLabel>
        </Step>
        <Step>
          <StepLabel>Contact Information</StepLabel>
        </Step>
        <Step>
          <StepLabel>Complete Request</StepLabel>
        </Step>
      </Stepper>
      {step === 1 ? (
        <PersonalInfo />
      ) : step === 2 ? (
        <EmploymentInfo />
      ) : step === 3 ? (
        <AddressInfo />
      ) : step === 4 ? (
        <ContactInfo />
      ) : step === 5 ? (
        <IdentityInfo />
      ) : (
        <Finish />
      )}
    </div>
  );
};

export default AddEmployee;
