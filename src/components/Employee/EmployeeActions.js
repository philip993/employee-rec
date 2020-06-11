import {
  SUCCESS_LOAD_EMPLOYEE_LIST,
  FAILURE_LOAD_EMPLOYEE_LIST,
} from './EmployeeActionTypes';

import axios from 'axios';

// Request
export const requestEmployees = () => {
  return (dispatch, getState) => {
    return axios
      .get(`http://localhost:4000/employees`)
      .then((response) => {
        console.log(response);
        dispatch({
          type: SUCCESS_LOAD_EMPLOYEE_LIST,
          payload: response.data.employees,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: FAILURE_LOAD_EMPLOYEE_LIST,
        });
      });
  };
};
