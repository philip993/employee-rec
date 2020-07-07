import { combineReducers } from 'redux';

// Import Reducers
import { EmployeeReducer } from '../components/Employee/EmployeeReducer';
import { DetailsReducer } from '../components/Details/DetailsReducer';
import { AddEmployeeReducer } from '../components/AddEmployee/AddEmployeeReducer';
import { ShiftReducer } from '../components/Shift/ShiftReducer';
import { UpdateShiftReducer } from '../components/UpdateShift/UpdateShiftReducer';
import { SearchReducer } from '../components/Search/SearchReducer';

const rootReducer = combineReducers({
  EmployeeReducer,
  DetailsReducer,
  AddEmployeeReducer,
  ShiftReducer,
  UpdateShiftReducer,
  SearchReducer,
});

export default rootReducer;
