import React from 'react';
import { useDispatch } from 'react-redux';

// Style
import Style from '../Style/Style';
// React Router Dom
import { useHistory } from 'react-router-dom';
// Redux Actions
import { changeErrorsStatus } from './AddContractActions';
// Material Ui
import { Button, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

const AddContractSuccess = () => {
  const dispatch = useDispatch();
  const classes = Style();
  const history = useHistory();

  const handleRedirect = () => {
    history.push('/contracts');
    dispatch(changeErrorsStatus());
  };

  return (
    <div>
      <Typography variant="h4">SUCCESS</Typography>
      <Alert severity="success">Contract is added!</Alert>
      <Button onClick={handleRedirect}>CONTRACTS</Button>
    </div>
  );
};

export default AddContractSuccess;
