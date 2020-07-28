import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Style
import Style from '../Style/Style';
import './AddContractStyle.scss';
// React Router Dom
import { useHistory } from 'react-router-dom';
// Simple React Validator
import SimpleReactValidator from 'simple-react-validator';
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
  InputLabel,
  FormHelperText,
  Button,
  Select,
  MenuItem,
} from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';

const AddContract = () => {
  const {
    contractId,
    contractStart,
    contractEnd,
    employees,
    addContractErrors,
  } = useSelector((state) => ({
    ...state.AddContractReducer,
    ...state.EmployeeReducer,
  }));
  const dispatch = useDispatch();
  const classes = Style();
  const history = useHistory();
  const validator = useRef(
    new SimpleReactValidator({
      autoForceUpdate: this,
    })
  );

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
    <div className={classes.pageContainer}>
      <Typography variant="h4" className={classes.pageSubheader}>
        Add Contract
      </Typography>
      {addContractErrors === null
        ? ''
        : addContractErrors === false
        ? history.push('/addcontractsuccess')
        : history.push('/addcontractfail')}
      <form className={classes.formLayout} id="addForm">
        <Typography variant="h6" className={classes.formTitle}>
          ADD CONTRACT
        </Typography>
        <FormGroup className={classes.formGroup}>
          <InputLabel className={classes.formLabel}>Contract ID</InputLabel>
          <Select
            id="contractId"
            value={contractId}
            onChange={handleContractId}
            onBlur={validator.current.showMessageFor('contract id')}
          >
            {employees.map((empl) => (
              <MenuItem value={empl.id}>
                {empl.id}. {empl.firstName} {empl.secondName}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText className={classes.formHelperText}>
            {validator.current.message('contract id', contractId, 'required')}
          </FormHelperText>
        </FormGroup>
        <FormGroup className={classes.formGroup}>
          <InputLabel className={classes.formLabel}>
            Contract Start Date
          </InputLabel>
          <KeyboardDatePicker
            id="contractStart"
            value={contractStart}
            margin="normal"
            format="dd/MM/yyyy"
            onChange={handleContractStart}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
            onBlur={validator.current.showMessageFor('contract start')}
          />
          <FormHelperText className={classes.formHelperText}>
            {' '}
            {validator.current.message(
              'contract start',
              contractStart,
              'required'
            )}
          </FormHelperText>
        </FormGroup>
        <FormGroup className={classes.formGroup}>
          <InputLabel className={classes.formLabel}>
            Contract End Date
          </InputLabel>
          <KeyboardDatePicker
            disabled
            id="contractEnd"
            value={contractEnd}
            margin="normal"
            format="dd/MM/yyyy"
            // onChange={handleContractEnd}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
            onBlur={validator.current.showMessageFor('contract end')}
          />
          <FormHelperText className={classes.formHelperText}>
            {' '}
            {validator.current.message('contract end', contractEnd, 'required')}
          </FormHelperText>
        </FormGroup>
        <FormGroup className={classes.formBtnGroup}>
          <Button
            onClick={handleSubmit}
            disabled={!validator.current.allValid()}
            className={classes.formButton}
          >
            Add
          </Button>
        </FormGroup>
      </form>
    </div>
  );
};

export default AddContract;
