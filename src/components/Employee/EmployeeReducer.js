import {
  SUCCESS_LOAD_EMPLOYEE_LIST,
  FAILURE_LOAD_EMPLOYEE_LIST,
} from './EmployeeActionTypes';

const initialState = {
  employees: [],
  errors: null,
};

export const EmployeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_LOAD_EMPLOYEE_LIST:
      return {
        ...state,
        employees: action.payload,
        errors: false,
      };
    case FAILURE_LOAD_EMPLOYEE_LIST:
      return {
        ...state,
        employees: null,
        errors: true,
      };
    default:
      return state;
  }
};
