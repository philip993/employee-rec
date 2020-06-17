import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Styles
import Styles from '../Style/Style';
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
    <div>
      <Typography variant="h4">Contact Info</Typography>
      <FormGroup>
        <InputLabel>Telephone Number</InputLabel>
        <InputBase
          type="text"
          value={telephoneNumber}
          onChange={handleTelephoneNumber}
          placheholder="Number..."
        />
      </FormGroup>
      <FormGroup>
        <InputLabel>Email Address</InputLabel>
        <InputBase
          type="text"
          value={emailAddress}
          onChange={handleEmailAddress}
          placeholder="Email..."
        />
      </FormGroup>
      <FormGroup>
        <Button onClick={handleStepIncrement}>
          Next <NavigateNextIcon />
        </Button>
      </FormGroup>
    </div>
  );
};

export default ContactInfo;
