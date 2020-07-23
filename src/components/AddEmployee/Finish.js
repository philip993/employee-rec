import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Styles
import Styles from '../Style/Style';
// Redux Actions
import { requestAddEmployee } from './AddEmployeeActions';
// Material Ui
import { Typography, Button, FormGroup } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const Finish = () => {
  const {} = useSelector((state) => state.AddEmployeeReducer);
  const dispatch = useDispatch();
  const classes = Styles();

  const handleCompleteForm = () => {
    dispatch(requestAddEmployee());
  };

  return (
    <div className={classes.addForm} id="addForm">
      <Typography variant="h4" className={classes.formTitle}>
        Complete Request
      </Typography>
      <Typography variant="h6" className={classes.formFinishSub}>
        Click on the button bellow to complete the request of adding new
        employee to Database.
      </Typography>
      <FormGroup className={classes.addFormGroup}>
        <Button
          onClick={handleCompleteForm}
          className={classes.formFinshButton}
        >
          Save <CheckCircleOutlineIcon />
        </Button>
      </FormGroup>
    </div>
  );
};

export default Finish;
