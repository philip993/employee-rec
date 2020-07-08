import {
  SUCCESS_LOAD_CONTRACTS,
  FAILURE_LOAD_CONTRACTS,
} from './ContractActionTypes';

const initialState = {
  contractList: [],
  contractError: null,
};

export const ContractReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_LOAD_CONTRACTS:
      return {
        ...state,
        contractList: action.payload,
        contractError: false,
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
