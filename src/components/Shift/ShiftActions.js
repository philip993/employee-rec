import {
  SUCCESS_LOAD_SHIFTS,
  FAILURE_LOAD_SHIFTS,
  SUCCESS_SWITCH_SHIFTS,
  SORT_SHIFT_ACC,
  SORT_SHIFT_DEC,
} from './ShiftActionTypes';
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

// switch shift-scheduel
export const requestSwitchShiftSchedule = () => {
  return (dispatch, getState) => {
    return axios
      .put(`http://localhost:4000/shifts/update`)
      .then((response) => {
        console.log(response);
        dispatch({
          type: SUCCESS_SWITCH_SHIFTS,
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

// sort
export const sortShiftAcc = () => {
  return (dispatch, getState) => {
    let { shiftSchedule } = getState().ShiftReducer;
    dispatch({
      type: SORT_SHIFT_ACC,
      payload: shiftSchedule.sort((a, b) =>
        b.shiftCode < a.shiftCode ? 1 : b.shiftCode > a.shiftCode ? -1 : 0
      ),
    });
  };
};

export const sortShiftDec = () => {
  return (dispatch, getState) => {
    let { shiftSchedule } = getState().ShiftReducer;
    dispatch({
      type: SORT_SHIFT_DEC,
      payload: shiftSchedule.sort((a, b) =>
        b.shiftCode < a.shiftCode ? -1 : b.shiftCode > a.shiftCode ? 1 : 0
      ),
    });
  };
};
