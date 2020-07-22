import {
  SUCCESS_ADD_CONTRACT,
  FAILURE_ADD_CONTRACT,
  INPUT_CONTRACT_START,
  INPUT_CONTRACT_ID,
  CONTRACT_90_DAYS,
  CHANGE_ERROR_STATUS,
} from './AddContractActionTypes';

const initialState = {
  contractId: '',
  contractStart: null,
  contractEnd: null,
  addContractErrors: null,
};

export const AddContractReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_ADD_CONTRACT:
      return {
        ...state,
        contractId: '',
        contractStart: '',
        contractEnd: '',
        addContractErrors: false,
      };
    case FAILURE_ADD_CONTRACT:
      return {
        ...state,
        contractId: '',
        contractStart: '',
        contractEnd: '',
        addContractErrors: true,
      };
    case INPUT_CONTRACT_ID:
      return {
        ...state,
        contractId: action.payload,
      };
    case INPUT_CONTRACT_START:
      return {
        ...state,
        contractStart: action.payload,
      };
    case CONTRACT_90_DAYS:
      return {
        ...state,
        contractEnd: action.payload,
      };
    case CHANGE_ERROR_STATUS:
      return {
        ...state,
        addContractErrors: null,
      };
    default:
      return state;
  }
};
