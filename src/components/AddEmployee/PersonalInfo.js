import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Styles
import Styles from '../Style/Style';
// Redux Actions
import {
  stepIncrement,
  inputFirstName,
  inputSecondName,
} from './AddEmployeeActions';
// Material Ui
import {
  Typography,
  Button,
  FormGroup,
  InputBase,
  InputLabel,
} from '@material-ui/core';

const PersonalInfo = () => {
  const { step, firstName, secondName } = useSelector(
    (state) => state.AddEmployeeReducer
  );
  const dispatch = useDispatch();
  const classes = Styles();

  const handleStepIncrement = () => {
    dispatch(stepIncrement());
  };

  const handleFirstName = (e) => {
    dispatch(inputFirstName(e.target.value));
  };

  const handleSecondName = (e) => {
    dispatch(inputSecondName(e.target.value));
  };

  return (
    <div>
      <Typography variant="h4">Personal Information</Typography>
      <Button onClick={handleStepIncrement}>Next</Button>
      {step}
      <FormGroup>
        <InputLabel>Name</InputLabel>
        <InputBase
          type="text"
          value={firstName}
          onChange={handleFirstName}
          placeholder="Enter name here..."
        />
      </FormGroup>
      <FormGroup>
        <InputLabel>Surname</InputLabel>
        <InputBase
          type="text"
          value={secondName}
          onChange={handleSecondName}
          placeholder="Enter surname..."
        />
      </FormGroup>
    </div>
  );
};

export default PersonalInfo;
