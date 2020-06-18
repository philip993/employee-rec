import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Styles
import Styles from '../Style/Style';
import './AddEmployee.scss';
// Redux Actions
import {
  inputTelephoneNumber,
  inputEmailAddress,
  stepIncrement,
} from './AddEmployeeActions';
// Material Ui
import {
  Typography,
  FormGroup,
  InputLabel,
  InputBase,
  Button,
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const ContactInfo = () => {
  const { telephoneNumber, emailAddress, step } = useSelector(
    (state) => state.AddEmployeeReducer
  );
  const dispatch = useDispatch();
  const classes = Styles();

  const handleStepIncrement = () => {
    dispatch(stepIncrement());
  };

  const handleTelephoneNumber = (e) => {
    dispatch(inputTelephoneNumber(e.target.value));
  };

  const handleEmailAddress = (e) => {
    dispatch(inputEmailAddress(e.target.value));
  };

  return (
    <div className={classes.addForm}>
      <Typography variant="h6" className={classes.formTitle}>
        Contact Info
      </Typography>
      <FormGroup className={classes.addFormGroup}>
        <InputLabel className={classes.formLabel}>Telephone Number</InputLabel>
        <InputBase
          id="telephoneNumber"
          type="text"
          value={telephoneNumber}
          onChange={handleTelephoneNumber}
          placeholder="Number..."
        />
      </FormGroup>
      <FormGroup className={classes.addFormGroup}>
        <InputLabel className={classes.formLabel}>Email Address</InputLabel>
        <InputBase
          id="emailAddress"
          type="text"
          value={emailAddress}
          onChange={handleEmailAddress}
          placeholder="Email..."
        />
      </FormGroup>
      <FormGroup className={classes.addFormGroup}>
        <Button onClick={handleStepIncrement} className={classes.formButton}>
          Next <NavigateNextIcon />
        </Button>
      </FormGroup>
    </div>
  );
};

export default ContactInfo;
