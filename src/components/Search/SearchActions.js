import {
  SEARCH_EMPLOYEE_SUCCESS,
  SEARCH_EMPLOYEE_FAILURE,
  INPUT_SEARCH_EMPLOYEE,
  CLEAR_INPUT_SEARCH_EMPLOYEE,
} from './SearchActionTypes';

//axios
import axios from 'axios';

// request
export const requestSearchEmployee = (e) => {
  return (dispatch, getState) => {
    let { searchVal } = getState().SearchReducer;
    let id = searchVal;
    return axios
      .get(`http://localhost:4000/shifts/${id}`)
      .then((response) => {
        console.log(response);
        dispatch({
          type: SEARCH_EMPLOYEE_SUCCESS,
          payload: response.data.oneEmp,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: SEARCH_EMPLOYEE_FAILURE,
        });
      });
  };
};

// input
export const inputSearchEmployee = (e) => {
  return {
    type: INPUT_SEARCH_EMPLOYEE,
    payload: e,
  };
};

export const clearInputSearchEmployee = () => {
  return {
    type: CLEAR_INPUT_SEARCH_EMPLOYEE,
  };
};
