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

const AddContractError = () => {
  const dispatch = useDispatch();
  const classes = Style();
  const history = useHistory();

  const handleRedirect = () => {
    history.push('/addcontract');
    dispatch(changeErrorsStatus());
  };

  return (
    <div>
      <Typography variant="h3" className={classes.pageSubtitle}>
        ERROR
      </Typography>
      <div className={classes.divContainer}>
        <Alert severity="error" className={classes.divMessage}>
          Cannot Add Contract!
        </Alert>
        <Button onClick={handleRedirect} className={classes.buttonLeft}>
          TRY AGAIN
        </Button>
      </div>
    </div>
  );
};

export default AddContractError;
