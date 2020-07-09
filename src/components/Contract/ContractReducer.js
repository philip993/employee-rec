import {
  SUCCESS_LOAD_CONTRACTS,
  FAILURE_LOAD_CONTRACTS,
} from './ContractActionTypes';

const initialState = {
  contractList: [],
  contractError: null,
  currentDate: null,
};

export const ContractReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_LOAD_CONTRACTS:
      return {
        ...state,
        contractList: action.payload.contracts,
        contractError: false,
        currentDate: action.payload.currentDate,
      };
    case FAILURE_LOAD_CONTRACTS:
      return {
        ...state,
        contractList: null,
        contractError: true,
      };
    default:
      return state;
  }
};
