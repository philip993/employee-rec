import {
  UPDATE_SHIFT_SUCCESS,
  UPDATE_SHIFT_FAILURE,
  INPUT_EMPLOYEE_ID,
  INPUT_SHIFT_CODE,
  INPUT_START_DATE,
  INPUT_END_DATE,
  CHANGE_ERROR_STATUS,
  ADD_MEAL_COUNT,
  INPUT_EMPLOYEE_STATUS,
  UPDATE_STATUS_SUCCESS,
  UPDATE_STATUS_FAILURE,
  SELECT_ONE_SHIFT,
  SWITCH_SHIFT_SUCCESS,
  SWITCH_SHIFT_FAILURE,
  SHIFT_DUPLICATE_TRUE,
  SHIFT_DUPLICATE_FALSE,
  DELETE_SHIFT_SUCCESS,
  DELETE_SHIFT_FAILURE,
} from './UpdateShiftActionTypes';
// axios
import axios from 'axios';

// request
export const requestUpdateShift = () => {
  return (dispatch, getState) => {
    let {
      employeeId,
      shiftCode,
      employeeStatus,
      startDate,
      endDate,
      mealCount,
    } = getState().UpdateShiftReducer;
    let shifts = getState().ShiftReducer.shiftSchedule;
    let index = shifts.findIndex((sft, index) => sft.employeeId === employeeId);
    console.log(index);
    if (index === -1) {
      return axios
        .post(`http://localhost:4000/shifts/add`, {
          employeeId,
          shiftCode,
          employeeStatus,
          startDate,
          endDate,
          mealCount,
        })
        .then((response) => {
          console.log(response);
          dispatch({
            type: UPDATE_SHIFT_SUCCESS,
            payload: response.data.shift,
          });
        })
        .catch((err) => {
          console.log(err);
          dispatch({
            type: UPDATE_SHIFT_FAILURE,
          });
        });
    } else {
      dispatch({
        type: SHIFT_DUPLICATE_TRUE,
      });
    }
  };
};

// request update
export const requestStatusActive = () => {
  return (dispatch, getState) => {
    let currentShift = getState().UpdateShiftReducer.selectedShift;
    return axios
      .put(`http://localhost:4000/shifts/upstatus`, {
        id: currentShift,
        employeeStatus: 'active',
      })
      .then((response) => {
        console.log(response);
        dispatch({
          type: UPDATE_STATUS_SUCCESS,
          payload: response.data.updatedShift,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: UPDATE_STATUS_FAILURE,
        });
      });
  };
};

// request update
export const requestStatusInactive = () => {
  return (dispatch, getState) => {
    let currentShift = getState().UpdateShiftReducer.selectedShift;
    return axios
      .put(`http://localhost:4000/shifts/upstatus`, {
        id: currentShift,
        employeeStatus: 'inactive',
      })
      .then((response) => {
        console.log(response);
        dispatch({
          type: UPDATE_STATUS_SUCCESS,
          payload: response.data.updatedShift,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: UPDATE_STATUS_FAILURE,
        });
      });
  };
};

// request delete
export const requestDeleteShift = () => {
  return (dispatch, getState) => {
    let contracts = getState().UpdateContractReducer.selectedContract;

    return axios
      .delete(`http://localhost:4000/shifts/delete/${contracts.contractId}`)
      .then((response) => {
        console.log(response);
        dispatch({
          type: DELETE_SHIFT_SUCCESS,
          payload: response.data.deletedShift,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: DELETE_SHIFT_FAILURE,
        });
      });
  };
};

// request swtich shift
export const requestChangeShift = () => {
  return (dispatch, getState) => {
    let currentShift = getState().UpdateShiftReducer.selectedShift;
    let { shiftCode } = getState().UpdateShiftReducer;
    console.log(currentShift);
    return axios
      .put(`http://localhost:4000/shifts/changeshift`, {
        id: currentShift.id,
        shiftCode,
      })
      .then((response) => {
        console.log(response);
        dispatch({
          type: SWITCH_SHIFT_SUCCESS,
          payload: response.data.updatedShift,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: SWITCH_SHIFT_FAILURE,
        });
      });
  };
};

// input
export const inputEmployeeId = (e) => {
  return {
    type: INPUT_EMPLOYEE_ID,
    payload: e,
  };
};

export const inputShiftCode = (e) => {
  return {
    type: INPUT_SHIFT_CODE,
    payload: e,
  };
};

export const inputEmployeeStatus = (e) => {
  return {
    type: INPUT_EMPLOYEE_STATUS,
    payload: e,
  };
};

export const inputStartDate = (e) => {
  return {
    type: INPUT_START_DATE,
    payload: e.setDate(e.getDate()),
  };
};

export const inputEndDate = (e) => {
  return {
    type: INPUT_END_DATE,
    payload: e.setDate(e.getDate() + 6),
  };
};

// select
export const selectShift = (shift) => {
  return (dispatch, getState) => {
    dispatch({
      type: SELECT_ONE_SHIFT,
      payload: shift,
    });
  };
};

// count
export const addMealCount = () => {
  return {
    type: ADD_MEAL_COUNT,
    payload: 1,
  };
};

// errors
export const changeErrorsStatus = () => {
  return {
    type: CHANGE_ERROR_STATUS,
  };
};

// check duplicate
export const shiftDuplicateTrue = () => {
  return {
    type: SHIFT_DUPLICATE_TRUE,
  };
};

export const shiftDuplicateFalse = () => {
  return {
    type: SHIFT_DUPLICATE_FALSE,
  };
};
