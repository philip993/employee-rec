import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Style
import Styles from '../Style/Style';
import './UpdateShiftStyle.scss';
// React Router Dom
import { useHistory } from 'react-router-dom';
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
import { requestEmployees } from '../Employee/EmployeeActions';
import { addMealCount, requestUpdateMeals } from '../Meals/MealActions';
// Material Ui
import {
  FormGroup,
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
  const {
    employeeId,
    shiftCode,
    startDate,
    endDate,
    employees,
    errorsShift,
  } = useSelector((state) => ({
    ...state.UpdateShiftReducer,
    ...state.EmployeeReducer,
  }));
  const dispatch = useDispatch();
  const classes = Styles();
  const history = useHistory();
  const validator = useRef(
    new SimpleReactValidator({
      autoForceUpdate: this,
    })
  );

  useEffect(() => {
    dispatch(requestEmployees());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addMealCount());
    dispatch(requestUpdateShift());
    dispatch(requestUpdateMeals());
  };

  const handleEmployeeId = (e) => {
    dispatch(inputEmployeeId(e.target.value));
  };

  const handleShiftCode = (e) => {
    dispatch(inputShiftCode(e.target.value));
  };

  const handleStartDate = (e) => {
    dispatch(inputStartDate(e));
    dispatch(inputEndDate(e));
  };

  return (
    <div className={classes.pageContainer}>
      <Typography variant="h4">Update Shift Schedule</Typography>
      {errorsShift === null
        ? ''
        : errorsShift === false
        ? history.push('/updatesuccess')
        : history.push('/updatefail')}
      <form onSubmit={handleSubmit} className={classes.updateForm}>
        <Typography variant="h6" className={classes.updateSub}>
          Update Shift
        </Typography>
        <FormGroup className={classes.addFormGroup}>
          <InputLabel className={classes.formLabel}>ID</InputLabel>
          <Select
            value={employeeId}
            onChange={handleEmployeeId}
            id="employeeId"
            onBlur={validator.current.showMessageFor('employee id')}
          >
            {employees.map((el) => (
              <MenuItem value={el.id}>{el.id}</MenuItem>
            ))}
          </Select>
          <FormHelperText className={classes.updateHelperText}>
            {validator.current.message('employee id', employeeId, 'required')}
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
          <FormHelperText className={classes.updateHelperText}>
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
          <FormHelperText className={classes.updateHelperText}>
            {validator.current.message('start date', startDate, 'required')}
          </FormHelperText>
        </FormGroup>
        <FormGroup className={classes.addFormGroup}>
          <InputLabel className={classes.formLabel}>End Date</InputLabel>
          <KeyboardDatePicker
            disabled
            id="endDate"
            value={endDate}
            margin="normal"
            format="dd/MM/yyyy"
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
            onBlur={validator.current.showMessageFor('end date')}
          />
          <FormHelperText className={classes.updateHelperText}>
            {validator.current.message('end date', endDate, 'required')}
          </FormHelperText>
        </FormGroup>
        <FormGroup className={classes.updateBtnGroup}>
          <Button
            type={'submit'}
            className={classes.formButton}
            disabled={!validator.current.allValid()}
          >
            ADD <AddCircleOutlineIcon />
          </Button>
        </FormGroup>
      </form>
    </div>
  );
};

export default UpdateShift;
