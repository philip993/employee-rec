import { combineReducers } from 'redux';

// Import Reducers
import { EmployeeReducer } from '../components/Employee/EmployeeReducer';
import { DetailsReducer } from '../components/Details/DetailsReducer';

const rootReducer = combineReducers({
  EmployeeReducer,
  DetailsReducer,
});

export default rootReducer;
