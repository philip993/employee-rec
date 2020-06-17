import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Styles
import Styles from '../Style/Style';
// Redux Actions
import {
  stepIncrement,
  inputFirstName,
  inputSecondName,
  inputAge,
  inputGender,
} from './AddEmployeeActions';
// Material Ui
import {
  Typography,
  Button,
  FormGroup,
  InputBase,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const PersonalInfo = () => {
  const { step, firstName, secondName, gender, age } = useSelector(
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

  const handleGender = (e) => {
    dispatch(inputGender(e.target.value));
  };

  const handleAge = (e) => {
    dispatch(inputAge(e.target.value));
  };

  return (
    <div>
      <Typography variant="h4">Personal Information</Typography>

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
      <FormGroup>
        <InputLabel>Gender</InputLabel>
        <Select value={gender} onChange={handleGender}>
          <MenuItem>Choose Gender</MenuItem>
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
        </Select>
      </FormGroup>
      <FormGroup>
        <InputLabel>Age</InputLabel>
        <InputBase
          type="number"
          value={age}
          onChange={handleAge}
          placeholder="Age.."
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

export default PersonalInfo;
