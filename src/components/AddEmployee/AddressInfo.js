import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Styles
import Styles from '../Style/Style';
import './AddEmployee.scss';
// Redux Actions
import {
  inputAddress,
  inputCity,
  inputState,
  stepIncrement,
} from './AddEmployeeActions';
// Material Ui
import {
  Typography,
  FormGroup,
  InputBase,
  InputLabel,
  Button,
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const AddressInfo = () => {
  const { address, city, state, step } = useSelector(
    (state) => state.AddEmployeeReducer
  );
  const dispatch = useDispatch();
  const classes = Styles();

  const handleStepIncrement = () => {
    dispatch(stepIncrement());
  };

  const handleAddress = (e) => {
    dispatch(inputAddress(e.target.value));
  };

  const handleCity = (e) => {
    dispatch(inputCity(e.target.value));
  };

  const handleState = (e) => {
    dispatch(inputState(e.target.value));
  };

  return (
    <div className={classes.addForm}>
      <Typography variant="h6" className={classes.formTitle}>
        Address Information
      </Typography>
      <FormGroup className={classes.addFormGroup}>
        <InputLabel className={classes.formLabel}>Address</InputLabel>
        <InputBase
          id="address"
          type="text"
          value={address}
          onChange={handleAddress}
          placeholder="Address..."
        />
      </FormGroup>
      <FormGroup className={classes.addFormGroup}>
        <InputLabel className={classes.formLabel}>City</InputLabel>
        <InputBase
          id="city"
          type="text"
          value={city}
          onChange={handleCity}
          placeholder="City..."
        />
      </FormGroup>
      <FormGroup className={classes.addFormGroup}>
        <InputLabel className={classes.formLabel}>State</InputLabel>
        <InputBase
          id="state"
          type="text"
          value={state}
          onChange={handleState}
          placeholder="State..."
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

export default AddressInfo;
