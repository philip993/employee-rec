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
      <Typography variant="h3" className={classes.pageSubheader}>
        ERROR
      </Typography>
      <div className={classes.divContainer}>
        <Alert severity="error" className={classes.divMessage}>
          Cannot Add Employee to Shift Schedule!
        </Alert>
        <Button onClick={handleRedirect} className={classes.divButtons}>
          TRY AGAIN
        </Button>
      </div>
    </div>
  );
};

export default UpdateShiftError;
