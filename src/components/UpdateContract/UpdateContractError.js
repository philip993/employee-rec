import React from 'react';
import { useDispatch } from 'react-redux';

// Style
import Style from '../Style/Style';
// React Router Dom
import { useHistory } from 'react-router-dom';
// Material Ui
import { Button, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { changeErrorsStatus } from './UpdateContractActions';

const UpdateContractError = () => {
  const dispatch = useDispatch();
  const classes = Style();
  const history = useHistory();

  const handleRedirect = () => {
    history.push('/updatecontract');
    dispatch(changeErrorsStatus());
  };

  return (
    <div>
      <Typography variant="h4">ERROR</Typography>
      <Alert severity="error">Cannot Update Contract!</Alert>
      <Button onClick={handleRedirect}>TRY AGAIN</Button>
    </div>
  );
};

export default UpdateContractError;
