import {
  SUCCESS_LOAD_CONTRACT_PAGE,
  FAILURE_LOAD_CONTRACT_PAGE,
} from './ContractPageActionTypes';

const initalState = {
  contractDetails: [],
  contractPageError: null,
};

export const ContractPageReducer = (state = initalState, action) => {
  switch (action.type) {
    case SUCCESS_LOAD_CONTRACT_PAGE:
      return {
        ...state,
        contractDetails: [action.payload],
        contractPageError: false,
      };
    case FAILURE_LOAD_CONTRACT_PAGE:
      return {
        ...state,
        contractDetails: null,
        contractPageError: true,
      };
    default:
      return state;
  }
};
