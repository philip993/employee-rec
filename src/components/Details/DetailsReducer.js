import {
  SUCCESS_LOAD_DETAILS,
  FAILURE_LOAD_DETAILS,
} from './DetailsActionTypes';

const initalState = {
  details: [],
  errors: null,
  loading: null,
};

export const DetailsReducer = (state = initalState, action) => {
  switch (action.type) {
    case SUCCESS_LOAD_DETAILS:
      return {
        ...state,
        details: [action.payload],
        errors: false,
      };
    case FAILURE_LOAD_DETAILS:
      return {
        ...state,
        details: null,
        errors: true,
      };
    default:
      return state;
  }
};
