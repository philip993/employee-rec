import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Styles
import Styles from '../Style/Style';
import './AddEmployee.scss';
// Simple React Validator
import SimpleReactValidator from 'simple-react-validator';
// Date
import 'date-fns';
// Redux Actions
import {
  stepIncrement,
  inputPosition,
  inputEmploymentDate,
  inputWorkDepartment,
} from './AddEmployeeActions';
// Material Ui
import {
  Typography,
  Button,
  FormGroup,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const EmploymentInfo = () => {
  const { step, position, workDepartment, employmentDate } = useSelector(
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

  const handlePosition = (e) => {
    dispatch(inputPosition(e.target.value));
  };

  const handleEmploymentDate = (e) => {
    dispatch(inputEmploymentDate(e));
  };

  const handleWorkDepartment = (e) => {
    dispatch(inputWorkDepartment(e.target.value));
  };

  return (
    <div className={classes.addForm} id="addForm">
      <Typography variant="h6" className={classes.formTitle}>
        Personal Information
      </Typography>
      <FormGroup className={classes.addFormGroup}>
        <InputLabel className={classes.formLabel}>Position</InputLabel>
        <Select
          value={position}
          onChange={handlePosition}
          id="position"
          onBlur={validator.current.showMessageFor('position')}
        >
          <MenuItem>Choose position</MenuItem>
          <MenuItem value="worker">Worker</MenuItem>
          <MenuItem value="support">IT Support</MenuItem>
          <MenuItem value="accountant">Accountant</MenuItem>
          <MenuItem value="seller">Seller</MenuItem>
          <MenuItem value="hrspecialist"></MenuItem>
          <MenuItem value="supervisor">Supervisor</MenuItem>
          <MenuItem value="manager">Manager</MenuItem>
        </Select>
        <FormHelperText className={classes.formHelperText}>
          {validator.current.message('position', position, 'required')}
        </FormHelperText>
      </FormGroup>
      <FormGroup className={classes.addFormGroup}>
        <InputLabel className={classes.formLabel}>Employment Date</InputLabel>
        <KeyboardDatePicker
          id="employmentDate"
          margin="normal"
          format="dd/MM/yyyy"
          value={employmentDate}
          onChange={handleEmploymentDate}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          onBlur={validator.current.showMessageFor('employment date')}
        />
        <FormHelperText className={classes.formHelperText}>
          {validator.current.message(
            'employment date',
            employmentDate,
            'required'
          )}
        </FormHelperText>
      </FormGroup>
      <FormGroup className={classes.addFormGroup}>
        <InputLabel className={classes.formLabel}>Work Department</InputLabel>
        <Select
          value={workDepartment}
          onChange={handleWorkDepartment}
          id="workDepartment"
          onBlur={validator.current.showMessageFor('work department')}
        >
          <MenuItem>Choose Department</MenuItem>
          <MenuItem value="production">Production</MenuItem>
          <MenuItem value="accounting">Accounting and Finance</MenuItem>
          <MenuItem value="hr">Human Resources</MenuItem>
          <MenuItem value="sales">Sales</MenuItem>
          <MenuItem value="it">IT Department</MenuItem>
        </Select>
        <FormHelperText className={classes.formHelperText}>
          {validator.current.message(
            'work department',
            workDepartment,
            'required'
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

export default EmploymentInfo;
