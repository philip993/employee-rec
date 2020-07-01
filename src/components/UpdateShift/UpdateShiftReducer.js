import {
  UPDATE_SHIFT_SUCCESS,
  UPDATE_SHIFT_FAILURE,
  INPUT_EMPLOYEE_ID,
  INPUT_SHIFT_CODE,
  INPUT_START_DATE,
  INPUT_END_DATE,
  CHANGE_ERROR_STATUS,
} from './UpdateShiftActionTypes';

const initalState = {
  employeeId: '',
  shiftCode: '',
  startDate: null,
  endDate: null,
  errorsShift: null,
};

export const UpdateShiftReducer = (state = initalState, action) => {
  switch (action.type) {
    case UPDATE_SHIFT_SUCCESS:
      return {
        ...state,
        employeeId: '',
        shiftCode: '',
        startDate: '',
        endDate: '',
        errorsShift: false,
      };
    case UPDATE_SHIFT_FAILURE:
      return {
        ...state,
        employeeId: '',
        shiftCode: '',
        startDate: '',
        endDate: '',
        errorsShift: true,
      };
    case INPUT_EMPLOYEE_ID:
      return {
        ...state,
        employeeId: action.payload,
      };
    case INPUT_SHIFT_CODE:
      return {
        ...state,
        shiftCode: action.payload,
      };
    case INPUT_START_DATE:
      return {
        ...state,
        startDate: action.payload,
      };
    case INPUT_END_DATE:
      return {
        ...state,
        endDate: action.payload,
      };
    case CHANGE_ERROR_STATUS:
      return {
        ...state,
        errorsShift: null,
      };
    default:
      return state;
  }
};
