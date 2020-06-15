import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Styles
import Styles from '../Style/Style';
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
  InputBase,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

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
    dispatch(inputEmploymentDate());
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
          <MenuItem value="supervisor">Supervisor</MenuItem>
          <MenuItem value="manager">Manager</MenuItem>
        </Select>
      </FormGroup>
      <FormGroup>
        <InputLabel>Employment Date</InputLabel>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            value={employmentDate}
            onChange={handleEmploymentDate}
            disableToolbar
            format="mm/dd/yyyy"
            variant="inline"
          />
        </MuiPickersUtilsProvider>
      </FormGroup>
      <FormGroup></FormGroup>
    </div>
  );
};

export default EmploymentInfo;
