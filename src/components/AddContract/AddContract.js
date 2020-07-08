import React, { useEffect } from 'react';
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
import { requestEmployees } from '../Employee/EmployeeActions';
// Material Ui
import {
  Typography,
  FormGroup,
  InputBase,
  InputLabel,
  FormHelperText,
  Button,
  Select,
  MenuItem,
} from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';

const AddContract = () => {
  const { contractId, contractStart, contractEnd, employees } = useSelector(
    (state) => ({
      ...state.AddContractReducer,
      ...state.EmployeeReducer,
    })
  );
  const dispatch = useDispatch();
  const classes = Style();

  useEffect(() => {
    dispatch(requestEmployees());
  }, []);

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
          <Select value={contractId} onChange={handleContractId}>
            {employees.map((empl) => (
              <MenuItem value={empl.id}>
                {empl.id}. {empl.firstName} {empl.secondName}
              </MenuItem>
            ))}
          </Select>
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
