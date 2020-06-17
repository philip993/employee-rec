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
    <div>
      <Typography variant="h4">Address Information</Typography>
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
      <FormGroup>
        <Button onClick={handleStepIncrement}>
          Next <NavigateNextIcon />
        </Button>
      </FormGroup>
    </div>
  );
};

export default AddressInfo;
