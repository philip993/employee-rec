import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Styles
import Styles from '../Style/Style';
import './AddEmployee.scss';
// Simple React Validator
import SimpleReactValidator from 'simple-react-validator';
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
  FormHelperText,
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const ContactInfo = () => {
  const { telephoneNumber, emailAddress } = useSelector(
    (state) => state.AddEmployeeReducer
  );
  const dispatch = useDispatch();
  const classes = Styles();
  const validator = useRef(
    new SimpleReactValidator({
      autoForceUpdate: this,
    })
  );

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
    <div className={classes.partFormLayout}>
      <Typography variant="h6" className={classes.formTitle}>
        Contact Info
      </Typography>
      <FormGroup className={classes.formGroup} id="addForm">
        <InputLabel className={classes.formLabel}>Telephone Number</InputLabel>
        <InputBase
          id="telephoneNumber"
          type="text"
          value={telephoneNumber}
          onChange={handleTelephoneNumber}
          placeholder="Number..."
          onBlur={validator.current.showMessageFor('telephone number')}
        />
        <FormHelperText className={classes.formHelperText}>
          {validator.current.message(
            'telephone number',
            telephoneNumber,
            'required|phone'
          )}
        </FormHelperText>
      </FormGroup>
      <FormGroup className={classes.formGroup}>
        <InputLabel className={classes.formLabel}>Email Address</InputLabel>
        <InputBase
          id="emailAddress"
          type="text"
          value={emailAddress}
          onChange={handleEmailAddress}
          placeholder="Email..."
          onBlur={validator.current.showMessageFor('email address')}
        />
        <FormHelperText className={classes.formHelperText}>
          {validator.current.message(
            'email address',
            emailAddress,
            'required|email'
          )}
        </FormHelperText>
      </FormGroup>
      <FormGroup className={classes.formBtnGroup}>
        <Button
          onClick={handleStepIncrement}
          className={classes.formButton}
          disabled={!validator.current.allValid()}
        >
          Next <NavigateNextIcon />
        </Button>
      </FormGroup>
    </div>
  );
};

export default ContactInfo;
