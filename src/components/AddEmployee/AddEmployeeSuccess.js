import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Styles
import Styles from '../Style/Style';
// React Router Dom
import { useHistory } from 'react-router-dom';
// Redux Actions
import { changeErrorsStatus } from './AddEmployeeActions';
// Material Ui
import { Typography, Button } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

const AddEmployeeSuccess = () => {
  const { errors } = useSelector((state) => state.AddEmployeeReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleRedirectHome = () => {
    dispatch(changeErrorsStatus());
    history.push('/');
  };

  const handleRedirectList = () => {
    dispatch(changeErrorsStatus());
    history.push('/employees');
  };
  return (
    <div>
      <Typography variant="h3">SUCCESS</Typography>
      <Alert severity="success">Request Add Employee Success</Alert>
      <Button onClick={handleRedirectHome}>HOME</Button>
      <Button onClick={handleRedirectList}>EMPLOYEES LIST</Button>
    </div>
  );
};

export default AddEmployeeSuccess;
