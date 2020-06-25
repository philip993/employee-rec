import {
  SUCCESS_LOAD_SHIFTS,
  FAILURE_LOAD_SHIFTS,
  SUCCESS_SWITCH_SHIFTS,
  FAILURE_SWITCH_SHIFTS,
} from './ShiftActionTypes';

const initalState = {
  shiftSchedule: [],
  errors: null,
};

export const ShiftReducer = (state = initalState, action) => {
  switch (action.type) {
    case SUCCESS_LOAD_SHIFTS:
      return {
        ...state,
        shiftSchedule: action.payload,
        errors: false,
      };
    case FAILURE_LOAD_SHIFTS:
      return {
        ...state,
        shiftSchedule: null,
        errors: true,
      };
    case SUCCESS_SWITCH_SHIFTS:
      return {
        ...state,
      };
    case FAILURE_SWITCH_SHIFTS:
      return {
        ...state,
      };
    default:
      return state;
  }
};
