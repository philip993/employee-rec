import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Style
import Style from '../Style/Style';
// Redux actions
import {
  requestUpdateContract,
  updateContractStart,
  updateActiveContract,
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
    updatedActiveContract,
  } = useSelector((state) => ({
    ...state.UpdateContractReducer,
    ...state.ContractReducer,
  }));
  const dispatch = useDispatch();
  const classes = Style();

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

  const handleUpdateActiveContract = (e) => {
    dispatch(updateActiveContract(e.target.value));
  };

  return (
    <div>
      <Typography variant="h4">Update Contract</Typography>
      <form className={classes.updateForm}>
        <Typography variant="h6" className={classes.updateSub}>
          UPDATE CONTRACT
        </Typography>
        <FormGroup className={classes.addFormGroup}>
          <InputLabel className={classes.formLabel}>Contract ID</InputLabel>
          <InputBase id="contractId" value={selectedContract.id} />
        </FormGroup>
        <FormGroup className={classes.addFormGroup}>
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
        <FormGroup className={classes.addFormGroup}>
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
        <FormGroup className={classes.addFormGroup}>
          <InputLabel className={classes.formLabel}>Active Contract</InputLabel>
          <RadioGroup
            value={updatedActiveContract}
            onChange={handleUpdateActiveContract}
          >
            <FormControlLabel value="true" control={<Radio />} label="YES" />
            <FormControlLabel value="false" control={<Radio />} label="NO" />
          </RadioGroup>
        </FormGroup>
        <FormGroup className={classes.updateBtnGroup}>
          <Button onClick={handleSubmit} className={classes.formButton}>
            Update
          </Button>
        </FormGroup>
      </form>
    </div>
  );
};

export default UpdateContract;
