import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Style
import Styles from '../Style/Style';
import './UpdateShiftStyle.scss';
// Redux Actions
import {
  requestUpdateShift,
  inputEmployeeId,
  inputShiftCode,
  inputStartDate,
  inputEndDate,
} from './UpdateShiftActions';
// Material Ui
import {
  FormGroup,
  InputBase,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Typography,
} from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const UpdateShift = () => {
  const { employeeId, shiftCode, startDate, endDate } = useSelector(
    (state) => state.UpdateShiftReducer
  );
  const dispatch = useDispatch();
  const classes = Styles();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(requestUpdateShift());
  };

  const handleEmployeeId = (e) => {
    dispatch(inputEmployeeId(e.target.value));
  };

  const handleShiftCode = (e) => {
    dispatch(inputShiftCode(e.target.value));
  };

  const handleStartDate = (e) => {
    dispatch(inputStartDate(e));
  };

  const handleEndDate = (e) => {
    dispatch(inputEndDate(e));
  };

  return (
    <div>
      <Typography variant="h4">Add Employee to Shift Schedule</Typography>
      <form onSubmit={handleSubmit} className={classes.addForm}>
        <FormGroup className={classes.addFormGroup}>
          <InputLabel className={classes.formLabel}>Employee ID</InputLabel>
          <InputBase
            id="employeeId"
            type="number"
            value={employeeId}
            onChange={handleEmployeeId}
            placeholder="Employee ID..."
          />
        </FormGroup>
        <FormGroup className={classes.addFormGroup}>
          <InputLabel className={classes.formLabel}>Shift Code</InputLabel>
          <Select id="shiftCode" value={shiftCode} onChange={handleShiftCode}>
            <MenuItem>Choose Shift Code</MenuItem>
            <MenuItem value="first">FIRST</MenuItem>
            <MenuItem value="second">SECOND</MenuItem>
            <MenuItem value="third">THIRD</MenuItem>
          </Select>
        </FormGroup>
        <FormGroup className={classes.addFormGroup}>
          <InputLabel className={classes.formLabel}>Start Date</InputLabel>
          <KeyboardDatePicker
            id="startDate"
            value={startDate}
            margin="normal"
            format="dd/MM/yyyy"
            onChange={handleStartDate}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </FormGroup>
        <FormGroup className={classes.addFormGroup}>
          <InputLabel className={classes.formLabel}>End Date</InputLabel>
          <KeyboardDatePicker
            id="endDate"
            value={endDate}
            margin="normal"
            format="dd/MM/yyyy"
            onChange={handleEndDate}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </FormGroup>
        <FormGroup className={classes.addFormGroup}>
          <Button type={'submit'} className={classes.formButton}>
            ADD <AddCircleOutlineIcon />
          </Button>
        </FormGroup>
      </form>
    </div>
  );
};

export default UpdateShift;
