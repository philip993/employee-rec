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

const SendMailSuccess = () => {
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
        SUCCESS
      </Typography>
      <div className={classes.divContainer}>
        <Alert severity="success" className={classes.divMessage}>
          Mail Sent
        </Alert>
        <Button onClick={handleRedirect} className={classes.buttonLeft}>
          NEW MAIL
        </Button>
      </div>
    </div>
  );
};

export default SendMailSuccess;
