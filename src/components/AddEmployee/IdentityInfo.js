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
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

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
      <FormGroup>
        <Button onClick={handleStepIncrement}>
          Next <NavigateNextIcon />
        </Button>
      </FormGroup>
    </div>
  );
};

export default IdentityInfo;
