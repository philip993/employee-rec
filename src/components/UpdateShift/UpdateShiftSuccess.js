import React from 'react';
import { useDispatch } from 'react-redux';

// Style
import Style from '../Style/Style';
// React Router Dom
import { useHistory } from 'react-router-dom';
// Material Ui
import { Button, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { changeErrorsStatus } from './UpdateShiftActions';

const UpdateShiftSuccess = () => {
  const dispatch = useDispatch();
  const classes = Style();
  const history = useHistory();

  const handleRedirect = () => {
    history.push('/shifts');
    dispatch(changeErrorsStatus());
  };

  const handleRedirectTwo = () => {
    history.push('/updateshift');
    dispatch(changeErrorsStatus());
  };
  return (
    <div>
      <Typography variant="h4">SUCCESS</Typography>
      <Alert severity="success">Employee is Added to Shift Schedule!</Alert>
      <Button onClick={handleRedirect}>SHIFT SCHEDULE</Button>
      <Button onClick={handleRedirectTwo}>ADD MORE</Button>
    </div>
  );
};

export default UpdateShiftSuccess;
