import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Style
import Style from '../Style/Style';
// React Router Dom
import { useHistory } from 'react-router-dom';
// Material Ui
import { Button, Typography } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import { changeErrorsStatus, shiftDuplicateFalse } from './UpdateShiftActions';

const UpdateShiftError = () => {
  const { shiftStatus } = useSelector((state) => state.UpdateShiftReducer);
  const dispatch = useDispatch();
  const classes = Style();
  const history = useHistory();

  const handleRedirect = () => {
    history.push('/updateshift');
    dispatch(shiftDuplicateFalse());
    dispatch(changeErrorsStatus());
  };
  return (
    <div>
      <Typography variant="h3" className={classes.pageSubtitle}>
        ERROR
      </Typography>
      <div className={classes.divContainer}>
        <Alert severity="error" className={classes.divMessage}>
          {shiftStatus
            ? 'EMPLOYEE IS ALREADY IN SHIFT SCHEDULE.'
            : 'SYSTEM ERROR. CANNOT ADD EMPLOYEE TO SHIFT SCHEDULE.'}
        </Alert>
        <Button onClick={handleRedirect} className={classes.buttonLeft}>
          TRY AGAIN
        </Button>
      </div>
    </div>
  );
};

export default UpdateShiftError;
