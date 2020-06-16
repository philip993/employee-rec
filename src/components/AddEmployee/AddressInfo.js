import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Styles
import Styles from '../Style/Style';
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
    <div>
      <Typography variant="h4">Address Information</Typography>
      <Button onClick={handleStepIncrement}>Next</Button>
      <Button>{step}</Button>
      <FormGroup>
        <InputLabel>Address</InputLabel>
        <InputBase
          type="text"
          value={address}
          onChange={handleAddress}
          placeholder="Address..."
        />
      </FormGroup>
      <FormGroup>
        <InputLabel>City</InputLabel>
        <InputBase
          type="text"
          value={city}
          onChange={handleCity}
          placeholder="City..."
        />
      </FormGroup>
      <FormGroup>
        <InputLabel>State</InputLabel>
        <InputBase
          type="text"
          value={state}
          onChange={handleState}
          placeholder="State..."
        />
      </FormGroup>
    </div>
  );
};

export default AddressInfo;
