import { SUCCESS_LOAD_SHIFTS, FAILURE_LOAD_SHIFTS } from './ShiftActionTypes';
// Axios
import axios from 'axios';

// request
export const requestGetShifts = () => {
  return (dispatch, getState) => {
    return axios
      .get(`http://localhost:4000/shifts`)
      .then((response) => {
        console.log(response);
        dispatch({
          type: SUCCESS_LOAD_SHIFTS,
          payload: response.data.shifts,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: FAILURE_LOAD_SHIFTS,
        });
      });
  };
};
