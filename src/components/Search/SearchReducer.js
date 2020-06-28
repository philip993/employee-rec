import {
  SEARCH_EMPLOYEE_FAILURE,
  SEARCH_EMPLOYEE_SUCCESS,
  INPUT_SEARCH_EMPLOYEE,
} from './SearchActionTypes';

const initalState = {
  searchQuery: [],
  searchVal: '',
};

export const SearchReducer = (state = initalState, action) => {
  switch (action.type) {
    case SEARCH_EMPLOYEE_SUCCESS:
      return {
        ...state,
        searchQuery: action.payload,
      };
    case SEARCH_EMPLOYEE_FAILURE:
      return {
        ...state,
        searchQuery: null,
      };
    case INPUT_SEARCH_EMPLOYEE:
      return {
        ...state,
        searchVal: action.payload,
      };
    default:
      return state;
  }
};
