import {
  MEAL_SCHEDULE_SUCCESS,
  MEAL_SCEDULE_FAILURE,
  UPDATE_MEAL_SUCCESS,
  UPDATE_MEAL_FAILURE,
  ADD_MEAL_COUNT,
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
    case UPDATE_MEAL_SUCCESS:
      return {
        ...state,
        shiftId: '',
      };
    case UPDATE_MEAL_FAILURE:
      return {
        ...state,
        shiftId: '',
      };
    case ADD_MEAL_COUNT:
      return {
        ...state,
        mealCount: action.payload,
      };
    default:
      return state;
  }
};
