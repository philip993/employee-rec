import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Styles
import Styles from '../Style/Style';
import './AddEmployee.scss';
// Simple React Validator
import SimpleReactValidator from 'simple-react-validator';
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
  FormHelperText,
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const PersonalInfo = () => {
  const { step, firstName, secondName, gender, age } = useSelector(
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
    <div className={classes.partFormLayout} id="addForm">
      <Typography variant="h6" className={classes.formTitle}>
        Personal Information
      </Typography>
      {validator.current.hideMessages()}
      <FormGroup className={classes.formGroup}>
        <InputLabel className={classes.formLabel}>Name</InputLabel>
        <InputBase
          id="firstName"
          type="text"
          value={firstName}
          onChange={handleFirstName}
          placeholder="Enter name here..."
          onBlur={validator.current.showMessageFor('firstName')}
        />
        <FormHelperText className={classes.formHelperText}>
          {validator.current.message(
            'firstName',
            firstName,
            'required|alpha_space'
          )}
        </FormHelperText>
      </FormGroup>

      <FormGroup className={classes.formGroup}>
        <InputLabel className={classes.formLabel}>Surname</InputLabel>
        <InputBase
          id="secondName"
          type="text"
          value={secondName}
          onChange={handleSecondName}
          placeholder="Enter surname..."
          onBlur={validator.current.showMessageFor('secondName')}
        />
        <FormHelperText className={classes.formHelperText}>
          {validator.current.message(
            'secondName',
            secondName,
            'required|alpha_space'
          )}
        </FormHelperText>
      </FormGroup>
      <FormGroup className={classes.formGroup}>
        <InputLabel className={classes.formLabel}>Gender</InputLabel>
        <Select
          value={gender}
          onChange={handleGender}
          id="gender"
          onBlur={validator.current.showMessageFor('gender')}
        >
          <MenuItem>Choose Gender</MenuItem>
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
        </Select>
        <FormHelperText className={classes.formHelperText}>
          {validator.current.message('gender', gender, 'required')}
        </FormHelperText>
      </FormGroup>
      <FormGroup className={classes.formGroup}>
        <InputLabel className={classes.formLabel}>Age</InputLabel>
        <InputBase
          id="age"
          type="number"
          value={age}
          onChange={handleAge}
          placeholder="Age.."
          onBlur={validator.current.showMessageFor('age')}
        />
        <FormHelperText className={classes.formHelperText}>
          {validator.current.message(
            'age',
            age,
            'required|integer|min:18,num|max:67,num'
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

export default PersonalInfo;
