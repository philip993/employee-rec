import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Styles
import Styles from '../Style/Style';
import './AddEmployee.scss';
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
    <div className={classes.addForm}>
      <Typography variant="h6" className={classes.formTitle}>
        Personal Information
      </Typography>

      <FormGroup className={classes.addFormGroup}>
        <InputLabel className={classes.formLabel}>Name</InputLabel>
        <InputBase
          id="firstName"
          type="text"
          value={firstName}
          onChange={handleFirstName}
          placeholder="Enter name here..."
        />
      </FormGroup>
      <FormGroup className={classes.addFormGroup}>
        <InputLabel className={classes.formLabel}>Surname</InputLabel>
        <InputBase
          id="secondName"
          type="text"
          value={secondName}
          onChange={handleSecondName}
          placeholder="Enter surname..."
        />
      </FormGroup>
      <FormGroup className={classes.addFormGroup}>
        <InputLabel className={classes.formLabel}>Gender</InputLabel>
        <Select value={gender} onChange={handleGender} id="gender">
          <MenuItem>Choose Gender</MenuItem>
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
        </Select>
      </FormGroup>
      <FormGroup className={classes.addFormGroup}>
        <InputLabel className={classes.formLabel}>Age</InputLabel>
        <InputBase
          id="age"
          type="number"
          value={age}
          onChange={handleAge}
          placeholder="Age.."
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

export default PersonalInfo;
