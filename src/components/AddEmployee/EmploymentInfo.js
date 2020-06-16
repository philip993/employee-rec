import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Styles
import Styles from '../Style/Style';
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
} from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';

const EmploymentInfo = () => {
  const { step, position, workDepartment, employmentDate } = useSelector(
    (state) => state.AddEmployeeReducer
  );
  const dispatch = useDispatch();
  const classes = Styles();

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
    <div>
      <Typography variant="h4">Personal Information</Typography>
      <Button onClick={handleStepIncrement}>Next</Button>
      {step}
      <FormGroup>
        <InputLabel>Position</InputLabel>
        <Select value={position} onChange={handlePosition}>
          <MenuItem>Choose position</MenuItem>
          <MenuItem value="worker">Worker</MenuItem>
          <MenuItem value="support">IT Support</MenuItem>
          <MenuItem value="accountant">Accountant</MenuItem>
          <MenuItem value="seller">Seller</MenuItem>
          <MenuItem value="hrspecialist"></MenuItem>
          <MenuItem value="supervisor">Supervisor</MenuItem>
          <MenuItem value="manager">Manager</MenuItem>
        </Select>
      </FormGroup>
      <FormGroup>
        <InputLabel>Employment Date</InputLabel>
        <KeyboardDatePicker
          margin="normal"
          label="Date picker"
          format="dd/MM/yyyy"
          value={employmentDate}
          onChange={handleEmploymentDate}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </FormGroup>
      <FormGroup>
        <InputLabel>Work Department</InputLabel>
        <Select value={workDepartment} onChange={handleWorkDepartment}>
          <MenuItem>Choose Department</MenuItem>
          <MenuItem value="production">Production</MenuItem>
          <MenuItem value="accounting">Accounting and Finance</MenuItem>
          <MenuItem value="hr">Human Resources</MenuItem>
          <MenuItem value="sales">Sales</MenuItem>
          <MenuItem value="it">IT Department</MenuItem>
        </Select>
      </FormGroup>
    </div>
  );
};

export default EmploymentInfo;
