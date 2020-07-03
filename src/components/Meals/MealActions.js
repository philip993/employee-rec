import {
  MEAL_SCHEDULE_SUCCESS,
  MEAL_SCEDULE_FAILURE,
  UPDATE_MEAL_SUCCESS,
  UPDATE_MEAL_FAILURE,
  ADD_MEAL_COUNT,
} from './MealsActionTypes';
//axios
import axios from 'axios';

export const requestMealSchedule = () => {
  return (dispatch, getState) => {
    return axios
      .get(`http://localhost:4000/meals`)
      .then((response) => {
        console.log(response);
        dispatch({
          type: MEAL_SCHEDULE_SUCCESS,
          payload: response.data.meals,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: MEAL_SCEDULE_FAILURE,
        });
      });
  };
};

// request
export const requestUpdateMeals = () => {
  return (dispatch, getState) => {
    let { employeeId } = getState().UpdateShiftReducer;
    let { mealCount } = getState().MealReducer;
    return axios
      .post(`http://localhost:4000/meals/add`, {
        shiftId: employeeId,
        mealCount,
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

// count
export const addMealCount = () => {
  return {
    type: ADD_MEAL_COUNT,
    payload: 1,
  };
};
