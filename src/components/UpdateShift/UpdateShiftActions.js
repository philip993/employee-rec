import {
  UPDATE_SHIFT_SUCCESS,
  UPDATE_SHIFT_FAILURE,
  INPUT_EMPLOYEE_ID,
  INPUT_SHIFT_CODE,
  INPUT_START_DATE,
  INPUT_END_DATE,
  CHANGE_ERROR_STATUS,
  ADD_MEAL_COUNT,
} from './UpdateShiftActionTypes';
// axios
import axios from 'axios';

// request
export const requestUpdateShift = () => {
  return (dispatch, getState) => {
    let {
      employeeId,
      shiftCode,
      startDate,
      endDate,
      mealCount,
    } = getState().UpdateShiftReducer;

    let emplArr = getState().EmployeeReducer.employees;
    let test = emplArr.find(({ id }) => id === employeeId);

    return axios
      .post(`http://localhost:4000/shifts/add`, {
        employeeId: test.id,
        shiftCode,
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
