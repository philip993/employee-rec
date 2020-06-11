import { combineReducers } from 'redux';

// Import Reducers
import { EmployeeReducer } from '../components/Employee/EmployeeReducer';

const rootReducer = combineReducers({
  EmployeeReducer,
});

export default rootReducer;
