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
      <Typography variant="h3" className={classes.pageSubtitle}>
        SUCCESS
      </Typography>
      <div className={classes.divContainer}>
        <Alert severity="success" className={classes.divMessage}>
          Employee is Added to Shift Schedule!
        </Alert>
        <Button onClick={handleRedirect} className={classes.buttonLeft}>
          SHIFT SCHEDULE
        </Button>
        <Button onClick={handleRedirectTwo} className={classes.buttonRight}>
          ADD MORE
        </Button>
      </div>
    </div>
  );
};

export default UpdateShiftSuccess;
