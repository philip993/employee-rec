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
      <Typography variant="h3" className={classes.pageSubtitle}>
        ERROR
      </Typography>
      <div className={classes.divContainer}>
        <Alert severity="error" className={classes.divMessage}>
          Cannot Update Contract!
        </Alert>
        <Button onClick={handleRedirect} className={classes.buttonLeft}>
          TRY AGAIN
        </Button>
      </div>
    </div>
  );
};

export default UpdateContractError;
