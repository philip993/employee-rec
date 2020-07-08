import { combineReducers } from 'redux';

// Import Reducers
import { EmployeeReducer } from '../components/Employee/EmployeeReducer';
import { DetailsReducer } from '../components/Details/DetailsReducer';
import { AddEmployeeReducer } from '../components/AddEmployee/AddEmployeeReducer';
import { ShiftReducer } from '../components/Shift/ShiftReducer';
import { UpdateShiftReducer } from '../components/UpdateShift/UpdateShiftReducer';
import { SearchReducer } from '../components/Search/SearchReducer';
import { ContractReducer } from '../components/Contract/ContractReducer';
import { AddContractReducer } from '../components/AddContract/AddContractReducer';

const rootReducer = combineReducers({
  EmployeeReducer,
  DetailsReducer,
  AddEmployeeReducer,
  ShiftReducer,
  UpdateShiftReducer,
  SearchReducer,
  ContractReducer,
  AddContractReducer,
});

export default rootReducer;
