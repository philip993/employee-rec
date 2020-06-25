import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Style
import Styles from '../Style/Style';
import './UpdateShiftStyle.scss';
// Simple React Validator
import SimpleReactValidator from 'simple-react-validator';
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
  FormHelperText,
} from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const UpdateShift = () => {
  const { employeeId, shiftCode, startDate, endDate } = useSelector(
    (state) => state.UpdateShiftReducer
  );
  const dispatch = useDispatch();
  const classes = Styles();
  const validator = useRef(
    new SimpleReactValidator({
      autoForceUpdate: this,
    })
  );

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
            onBlur={validator.current.showMessageFor('employee id')}
          />
          <FormHelperText className={classes.formHelperText}>
            {validator.current.message(
              'employee id',
              employeeId,
              'required|numeric|min:0,num'
            )}
          </FormHelperText>
        </FormGroup>
        <FormGroup className={classes.addFormGroup}>
          <InputLabel className={classes.formLabel}>Shift Code</InputLabel>
          <Select
            id="shiftCode"
            value={shiftCode}
            onChange={handleShiftCode}
            onBlur={validator.current.showMessageFor('shift code')}
          >
            <MenuItem>Choose Shift Code</MenuItem>
            <MenuItem value="first">FIRST</MenuItem>
            <MenuItem value="second">SECOND</MenuItem>
            <MenuItem value="third">THIRD</MenuItem>
          </Select>
          <FormHelperText className={classes.formHelperText}>
            {validator.current.message('shift code', shiftCode, 'required')}
          </FormHelperText>
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
            onBlur={validator.current.showMessageFor('start date')}
          />
          <FormHelperText className={classes.formHelperText}>
            {validator.current.message('start date', startDate, 'required')}
          </FormHelperText>
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
            onBlur={validator.current.showMessageFor('end date')}
          />
          <FormHelperText className={classes.formHelperText}>
            {validator.current.message('end date', endDate, 'required')}
          </FormHelperText>
        </FormGroup>
        <FormGroup className={classes.addFormGroup}>
          <Button
            type={'submit'}
            className={classes.formButton}
            disabled={validator.current.allValid()}
          >
            ADD <AddCircleOutlineIcon />
          </Button>
        </FormGroup>
      </form>
    </div>
  );
};

export default UpdateShift;
