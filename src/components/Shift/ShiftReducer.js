import { SUCCESS_LOAD_SHIFTS, FAILURE_LOAD_SHIFTS } from './ShiftActionTypes';

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
    default:
      return state;
  }
};
