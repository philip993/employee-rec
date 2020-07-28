import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Style
import Style from '../Style/Style';
// React Router Dom
import { useHistory } from 'react-router-dom';
// Redux actions
import {
  requestUpdateContract,
  updateContractStart,
  updateContractEnd,
  selectContract,
} from './UpdateContractActions';
// Material Ui
import {
  Typography,
  FormGroup,
  InputLabel,
  Button,
  InputBase,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { requestGetContracts } from '../Contract/ContractActions';

const UpdateContract = () => {
  const {
    contractList,
    selectedContract,
    updatedContractStart,
    updatedContractEnd,
    updateContractErrors,
  } = useSelector((state) => ({
    ...state.UpdateContractReducer,
    ...state.ContractReducer,
  }));
  const dispatch = useDispatch();
  const classes = Style();
  const history = useHistory();

  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    dispatch(requestGetContracts());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(requestUpdateContract());
  };

  const handleUpdateContractStart = (e) => {
    setClicked(true);
    dispatch(updateContractStart(e));
    dispatch(updateContractEnd(e));
  };

  return (
    <div>
      <Typography variant="h4" className={classes.pageSubtitle}>
        Update Contract
      </Typography>
      {updateContractErrors === null
        ? ''
        : updateContractErrors === false
        ? history.push('/updcontractsuccess')
        : history.push('/updcontractfail')}
      <form className={classes.formLayout}>
        <Typography variant="h6" className={classes.formTitle}>
          UPDATE CONTRACT
        </Typography>
        <FormGroup className={classes.formGroup}>
          <InputLabel className={classes.formLabel}>Contract ID</InputLabel>
          <InputBase id="contractId" value={selectedContract.id} />
        </FormGroup>
        <FormGroup className={classes.formGroup}>
          <InputLabel className={classes.formLabel}>
            Contract Start Date
          </InputLabel>
          <KeyboardDatePicker
            id="contractStart"
            value={
              !clicked ? selectedContract.contractStart : updatedContractStart
            }
            margin="normal"
            format="dd/MM/yyyy"
            onChange={handleUpdateContractStart}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </FormGroup>
        <FormGroup className={classes.formGroup}>
          <InputLabel className={classes.formLabel}>
            Contract End Date
          </InputLabel>
          <KeyboardDatePicker
            disabled
            id="contractEnd"
            value={updatedContractEnd}
            margin="normal"
            format="dd/MM/yyyy"
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </FormGroup>
        <FormGroup className={classes.formGroup}>
          <InputLabel className={classes.formLabel}>Active Contract</InputLabel>
          <RadioGroup>
            <FormControlLabel defaultChecked control={<Radio />} label="YES" />
          </RadioGroup>
        </FormGroup>
        <FormGroup className={classes.formBtnGroup}>
          <Button onClick={handleSubmit} className={classes.formButton}>
            Update
          </Button>
        </FormGroup>
      </form>
    </div>
  );
};

export default UpdateContract;
