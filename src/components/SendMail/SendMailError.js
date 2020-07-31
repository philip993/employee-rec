import React from 'react';
import { useDispatch } from 'react-redux';

// Style
import Style from '../Style/Style';
// React Router Dom
import { useHistory } from 'react-router-dom';
// Redux Actions
import { changeErrorsStatus } from './SendMailActions';
// Material Ui
import { Button, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

const SendMailError = () => {
  const dispatch = useDispatch();
  const classes = Style();
  const history = useHistory();

  const handleRedirect = () => {
    history.push('/sendmail');
    dispatch(changeErrorsStatus());
  };

  return (
    <div>
      <Typography variant="h4" className={classes.pageSubtitle}>
        ERROR
      </Typography>
      <Alert severity="error">Cannot Send Mail!</Alert>
      <Button onClick={handleRedirect} className={classes.buttonLeft}>
        TRY AGAIN
      </Button>
    </div>
  );
};

export default SendMailError;
