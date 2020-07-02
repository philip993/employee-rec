import {
  MEAL_SCHEDULE_SUCCESS,
  MEAL_SCEDULE_FAILURE,
} from './MealsActionTypes';

const initalState = {
  mealsSchedule: [],
  mealsError: null,
};

export const MealsReducer = (state = initalState, action) => {
  switch (action.type) {
    case MEAL_SCHEDULE_SUCCESS:
      return {
        ...state,
        mealsSchedule: action.payload,
        mealsError: false,
      };
    case MEAL_SCEDULE_FAILURE:
      return {
        ...state,
        mealsSchedule: null,
        mealsError: true,
      };
    default:
      return state;
  }
};
