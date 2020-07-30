import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Style
import Style from '../Style/Style';
// React Router Dom
import { useHistory } from 'react-router-dom';
// Redux Actions
import {
  changeErrorsStatus,
  contractDuplicateFalse,
} from './AddContractActions';
// Material Ui
import { Button, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

const AddContractError = () => {
  const { contractStatus } = useSelector((state) => state.AddContractReducer);
  const dispatch = useDispatch();
  const classes = Style();
  const history = useHistory();

  const handleRedirect = () => {
    history.push('/addcontract');
    dispatch(contractDuplicateFalse());
    dispatch(changeErrorsStatus());
  };

  return (
    <div>
      <Typography variant="h3" className={classes.pageSubtitle}>
        ERROR
      </Typography>
      <div className={classes.divContainer}>
        <Alert severity="error" className={classes.divMessage}>
          {contractStatus === true
            ? 'CANNOT ADD ANOTHER CONTRACT TO EMPLOYEE!'
            : 'SYSTEM ERROR. CANNOT ADD CONTRACT AT THE MOMENT.'}
        </Alert>
        <Button onClick={handleRedirect} className={classes.buttonLeft}>
          TRY AGAIN
        </Button>
      </div>
    </div>
  );
};

export default AddContractError;
