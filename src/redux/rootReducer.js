import { combineReducers } from 'redux';

// Import Reducers
import { EmployeeReducer } from '../components/Employee/EmployeeReducer';
import { DetailsReducer } from '../components/Details/DetailsReducer';
import { AddEmployeeReducer } from '../components/AddEmployee/AddEmployeeReducer';

const rootReducer = combineReducers({
  EmployeeReducer,
  DetailsReducer,
  AddEmployeeReducer,
});

export default rootReducer;
