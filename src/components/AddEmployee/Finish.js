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
    <div>
      <Typography variant="h4">Complete Request</Typography>
      <Typography variant="p">
        Click on the button bellow to complete the request of adding new
        employee to Database.
      </Typography>
      <FormGroup>
        <Button onClick={handleCompleteForm}>
          Save <CheckCircleOutlineIcon />
        </Button>
      </FormGroup>
    </div>
  );
};

export default Finish;
