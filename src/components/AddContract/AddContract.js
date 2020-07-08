import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Style
import Style from '../Style/Style';
// Redux Actions
import {
  requestAddContract,
  inputContractId,
  inputContractStart,
  contract90days,
} from './AddContractActions';
// Material Ui
import {
  Typography,
  FormGroup,
  InputBase,
  InputLabel,
  FormHelperText,
  Button,
} from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';

const AddContract = () => {
  const { contractId, contractStart, contractEnd } = useSelector(
    (state) => state.AddContractReducer
  );
  const dispatch = useDispatch();
  const classes = Style();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(requestAddContract());
  };

  const handleContractId = (e) => {
    dispatch(inputContractId(e.target.value));
  };

  const handleContractStart = (e) => {
    dispatch(inputContractStart(e));
    dispatch(contract90days(e));
  };

  return (
    <div>
      <Typography variant="h4">Add Contract</Typography>
      <form>
        <FormGroup>
          <InputLabel>Contract ID</InputLabel>
          <InputBase
            type="number"
            value={contractId}
            onChange={handleContractId}
            placeholder="Contract - Employee ID"
          />
          <FormHelperText></FormHelperText>
        </FormGroup>
        <FormGroup>
          <InputLabel>Contract Start Date</InputLabel>
          <KeyboardDatePicker
            id="startDate"
            value={contractStart}
            margin="normal"
            format="dd/MM/yyyy"
            onChange={handleContractStart}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
            // onBlur={validator.current.showMessageFor('start date')}
          />
          <FormHelperText></FormHelperText>
        </FormGroup>
        <FormGroup>
          <InputLabel>Contract End Date</InputLabel>
          <KeyboardDatePicker
            disabled
            id="startDate"
            value={contractEnd}
            margin="normal"
            format="dd/MM/yyyy"
            // onChange={handleContractEnd}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
            // onBlur={validator.current.showMessageFor('start date')}
          />
          <FormHelperText></FormHelperText>
        </FormGroup>
        <Button onClick={handleSubmit}>Add</Button>
      </form>
    </div>
  );
};

export default AddContract;
