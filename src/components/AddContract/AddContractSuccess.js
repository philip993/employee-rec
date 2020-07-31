import React from 'react';
import { useDispatch } from 'react-redux';

// Style
import Style from '../Style/Style';
// React Router Dom
import { useHistory } from 'react-router-dom';
// Redux Actions
import {
  changeErrorsStatus,
  contractDuplicateFalse,
} from './AddContractActions';
// Material Ui
import { Button, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

const AddContractSuccess = () => {
  const dispatch = useDispatch();
  const classes = Style();
  const history = useHistory();

  const handleRedirect = () => {
    history.push('/contracts');
    dispatch(contractDuplicateFalse());
    dispatch(changeErrorsStatus());
  };

  return (
    <div>
      <Typography variant="h3" className={classes.pageSubtitle}>
        SUCCESS
      </Typography>
      <div className={classes.divContainer}>
        <Alert severity="success" className={classes.divMessage}>
          Contract is added!
        </Alert>
        <Button onClick={handleRedirect} className={classes.buttonLeft}>
          CONTRACTS
        </Button>
      </div>
    </div>
  );
};

export default AddContractSuccess;
