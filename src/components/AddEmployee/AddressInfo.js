import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Styles
import Styles from '../Style/Style';
import './AddEmployee.scss';
// Simple React Validator
import SimpleReactValidator from 'simple-react-validator';
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
  FormHelperText,
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const AddressInfo = () => {
  const { address, city, state, step } = useSelector(
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
          onBlur={validator.current.showMessageFor('address')}
        />
        <FormHelperText className={classes.formHelperText}>
          {validator.current.message(
            'address',
            address,
            'required|alpha_num_dash_space'
          )}
        </FormHelperText>
      </FormGroup>
      <FormGroup className={classes.addFormGroup}>
        <InputLabel className={classes.formLabel}>City</InputLabel>
        <InputBase
          id="city"
          type="text"
          value={city}
          onChange={handleCity}
          placeholder="City..."
          onBlur={validator.current.showMessageFor('city')}
        />
        <FormHelperText className={classes.formHelperText}>
          {validator.current.message('city', city, 'required|alpha_space')}
        </FormHelperText>
      </FormGroup>
      <FormGroup className={classes.addFormGroup}>
        <InputLabel className={classes.formLabel}>State</InputLabel>
        <InputBase
          id="state"
          type="text"
          value={state}
          onChange={handleState}
          placeholder="State..."
          onBlur={validator.current.showMessageFor('state')}
        />
        <FormHelperText className={classes.formHelperText}>
          {validator.current.message('state', state, 'required|alpha_space')}
        </FormHelperText>
      </FormGroup>
      <FormGroup className={classes.addFormGroup}>
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

export default AddressInfo;
