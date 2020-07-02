import {
  UPDATE_MEAL_SUCCESS,
  UPDATE_MEAL_FAILURE,
  INPUT_SHIFT_ID,
  SHIFT_ARRAY,
} from './UpdateMealActionTypes';
// axios
import axios from 'axios';

// request
export const requestUpdateMeals = () => {
  return (dispatch, getState) => {
    let { shiftId, shiftArray } = getState().UpdateMealReducer;
    return axios
      .post(`http://localhost:4000/meals/add`, {
        shiftId,
      })
      .then((response) => {
        console.log(response);
        dispatch({
          type: UPDATE_MEAL_SUCCESS,
          payload: response.data.meal,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: UPDATE_MEAL_FAILURE,
        });
      });
  };
};

// input
export const inputShiftId = (e) => {
  return {
    type: INPUT_SHIFT_ID,
    payload: e,
  };
};

export const shiftArray = (e) => {
  return (dispatch, getState) => {
    dispatch({
      type: SHIFT_ARRAY,
      payload: e,
    });
  };
};
