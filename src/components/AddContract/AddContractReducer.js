import {
  SUCCESS_ADD_CONTRACT,
  FAILURE_ADD_CONTRACT,
  INPUT_CONTRACT_START,
  INPUT_CONTRACT_ID,
  CONTRACT_90_DAYS,
  CHANGE_ERROR_STATUS,
  INPUT_SALARY,
} from './AddContractActionTypes';

const initialState = {
  contractId: '',
  contractStart: null,
  contractEnd: null,
  salary: 0,
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
        salary: '',
        addContractErrors: false,
      };
    case FAILURE_ADD_CONTRACT:
      return {
        ...state,
        contractId: '',
        contractStart: '',
        contractEnd: '',
        salary: '',
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
    case INPUT_SALARY:
      return {
        ...state,
        salary: action.payload,
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
