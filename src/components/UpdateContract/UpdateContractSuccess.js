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

const UpdateContractSuccess = () => {
  const dispatch = useDispatch();
  const classes = Style();
  const history = useHistory();

  const handleRedirect = () => {
    history.push('/contracts');
    dispatch(changeErrorsStatus());
  };

  return (
    <div>
      <Typography variant="h3" className={classes.pageSubheader}>
        SUCCESS
      </Typography>
      <div className={classes.divContainer}>
        <Alert severity="success" className={classes.divMessage}>
          Contract is updated!
        </Alert>
        <Button onClick={handleRedirect} className={classes.divButtons}>
          CONTRACTS
        </Button>
      </div>
    </div>
  );
};

export default UpdateContractSuccess;
