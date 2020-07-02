import {
  MEAL_SCHEDULE_SUCCESS,
  MEAL_SCEDULE_FAILURE,
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
