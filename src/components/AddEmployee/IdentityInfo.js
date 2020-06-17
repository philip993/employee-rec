import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Styles
import Styles from '../Style/Style';
// Redux Actions
import {
  stepIncrement,
  inputIdentityCard,
  inputSocialNumber,
} from './AddEmployeeActions';
// Material Ui
import {
  Typography,
  FormGroup,
  InputLabel,
  InputBase,
  Button,
} from '@material-ui/core';

const IdentityInfo = () => {
  const { socialNumber, identityCard, step } = useSelector(
    (state) => state.AddEmployeeReducer
  );
  const dispatch = useDispatch();
  const classes = Styles();

  const handleStepIncrement = () => {
    dispatch(stepIncrement());
  };

  const handleIdentityCard = (e) => {
    dispatch(inputIdentityCard(e.target.value));
  };

  const handleSocialNumber = (e) => {
    dispatch(inputSocialNumber(e.target.value));
  };

  return (
    <div>
      <Typography variant="h4">Identity Info</Typography>
      <Button onClick={handleStepIncrement}>Next</Button>
      <Button>{step}</Button>
      <FormGroup>
        <InputLabel>Identity Card</InputLabel>
        <InputBase
          type="text"
          value={identityCard}
          onChange={handleIdentityCard}
          placheholder="Identity Card..."
        />
      </FormGroup>
      <FormGroup>
        <InputLabel>Social Security Number</InputLabel>
        <InputBase
          type="text"
          value={socialNumber}
          onChange={handleSocialNumber}
          placeholder="Social Security Number..."
        />
      </FormGroup>
    </div>
  );
};

export default IdentityInfo;
