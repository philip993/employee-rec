import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Styles
import Styles from '../Style/Style';
import './AddEmployee.scss';
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
    <div className={classes.addForm}>
      <Typography variant="h6" className={classes.formTitle}>
        Identity Info
      </Typography>
      <FormGroup className={classes.addFormGroup}>
        <InputLabel className={classes.formLabel}>Identity Card</InputLabel>
        <InputBase
          id="identityCard"
          type="text"
          value={identityCard}
          onChange={handleIdentityCard}
          placeholder="Identity Card..."
        />
      </FormGroup>
      <FormGroup className={classes.addFormGroup}>
        <InputLabel className={classes.formLabel}>
          Social Security Number
        </InputLabel>
        <InputBase
          id="socialNumber"
          type="text"
          value={socialNumber}
          onChange={handleSocialNumber}
          placeholder="Social Security Number..."
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

export default IdentityInfo;
