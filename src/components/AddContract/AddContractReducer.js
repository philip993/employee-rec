import {
  SUCCESS_ADD_CONTRACT,
  FAILURE_ADD_CONTRACT,
  INPUT_CONTRACT_START,
  INPUT_CONTRACT_ID,
  CONTRACT_90_DAYS,
  CHANGE_ERROR_STATUS,
  INPUT_SALARY,
  CONTRACT_DUPLICATE_TRUE,
  CONTRACT_DUPLICATE_FALSE,
} from './AddContractActionTypes';

const initialState = {
  contractId: '',
  contractStart: null,
  contractEnd: null,
  salary: 0,
  addContractErrors: null,
  contractStatus: null,
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
        contractStatus: false,
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
    case CONTRACT_DUPLICATE_TRUE:
      return {
        ...state,
        contractStatus: true,
      };
    case CONTRACT_DUPLICATE_FALSE:
      return {
        ...state,
        contractStatus: null,
      };
    default:
      return state;
  }
};
