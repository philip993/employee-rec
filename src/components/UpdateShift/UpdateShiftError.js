import React from 'react';
import { useDispatch } from 'react-redux';

// Style
import Style from '../Style/Style';
// React Router Dom
import { useHistory } from 'react-router-dom';
// Material Ui
import { Button, Typography } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import { changeErrorsStatus } from './UpdateShiftActions';

const UpdateShiftError = () => {
  const dispatch = useDispatch();
  const classes = Style();
  const history = useHistory();

  const handleRedirect = () => {
    history.push('/updateshift');
    dispatch(changeErrorsStatus());
  };
  return (
    <div>
      <Typography variant="h4">ERROR</Typography>
      <Alert severity="error">Cannot Add Employee to Shift Schedule!</Alert>
      <Button onClick={handleRedirect}>TRY AGAIN</Button>
    </div>
  );
};

export default UpdateShiftError;
