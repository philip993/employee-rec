import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Styles
import Styles from '../Style/Style';
// React Router Dom
import { useHistory } from 'react-router-dom';
// Material Ui
import { Typography, Button, Link } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { changeErrorsStatus } from './AddEmployeeActions';

const AddEmployeeError = () => {
  const { errors } = useSelector((state) => state.AddEmployeeReducer);
  const dispatch = useDispatch();
  const classes = Styles();
  const history = useHistory();

  const handleRedirectAgain = () => {
    dispatch(changeErrorsStatus());
    history.push('/add');
  };

  const handleRedirectHome = () => {
    dispatch(changeErrorsStatus());
    history.push('/');
  };
  return (
    <div>
      <Typography variant="h3" className={classes.pageSubheader}>
        ERROR
      </Typography>
      <div className={classes.divContainer}>
        <Alert severity="error" className={classes.divMessage}>
          Request Add Employee Failed
        </Alert>
        <Button onClick={handleRedirectAgain} className={classes.divButtons}>
          TRY AGAIN
        </Button>
        <Button onClick={handleRedirectHome} className={classes.divButtons}>
          HOMEPAGE
        </Button>
      </div>
    </div>
  );
};

export default AddEmployeeError;
