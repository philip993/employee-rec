import { SHIFT_ARRAY } from './UpdateMealActionTypes';
import {
  UPDATE_MEAL_SUCCESS,
  UPDATE_MEAL_FAILURE,
  INPUT_SHIFT_ID,
} from './UpdateMealActionTypes';

const initalState = {
  shiftId: '',
  updateMealErrors: null,
  shiftArr: [],
};

export const UpdateMealReducer = (state = initalState, action) => {
  switch (action.type) {
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
    case INPUT_SHIFT_ID:
      return {
        ...state,
        shiftId: action.payload,
      };
    case SHIFT_ARRAY:
      return {
        ...state,
        shiftArr: [...state.shiftArr, action.payload],
      };
    default:
      return state;
  }
};
