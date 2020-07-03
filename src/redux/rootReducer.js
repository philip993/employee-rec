import { combineReducers } from 'redux';

// Import Reducers
import { EmployeeReducer } from '../components/Employee/EmployeeReducer';
import { DetailsReducer } from '../components/Details/DetailsReducer';
import { AddEmployeeReducer } from '../components/AddEmployee/AddEmployeeReducer';
import { ShiftReducer } from '../components/Shift/ShiftReducer';
import { UpdateShiftReducer } from '../components/UpdateShift/UpdateShiftReducer';
import { SearchReducer } from '../components/Search/SearchReducer';
import { MealsReducer } from '../components/Meals/MealsReducer';

const rootReducer = combineReducers({
  EmployeeReducer,
  DetailsReducer,
  AddEmployeeReducer,
  ShiftReducer,
  UpdateShiftReducer,
  SearchReducer,
  MealsReducer,
});

export default rootReducer;
