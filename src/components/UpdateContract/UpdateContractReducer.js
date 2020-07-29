import {
  SUCCESS_UPDATE_CONTRACT,
  FAILURE_UPDATE_CONTRACT,
  SELECT_ONE_CONTRACT,
  UPDATE_CONTRACT_START,
  UPDATE_CONTRACT_END,
  UPDATE_SALARY,
} from './UpdateContractActionTypes';
import { CHANGE_ERROR_STATUS } from '../UpdateShift/UpdateShiftActionTypes';

const initialState = {
  updatedContractStart: null,
  updatedContractEnd: null,
  updatedSalary: 0,
  updatedActiveContract: null,
  updateContractErrors: null,
  selectedContract: [],
};

export const UpdateContractReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_UPDATE_CONTRACT:
      return {
        ...state,
        updatedContractStart: '',
        updatedContractEnd: '',
        updatedActiveContract: '',
        updateContractErrors: false,
      };
    case FAILURE_UPDATE_CONTRACT:
      return {
        ...state,
        updatedContractStart: '',
        updatedContractEnd: '',
        updatedActiveContract: '',
        updateContractErrors: true,
      };
    case SELECT_ONE_CONTRACT:
      return {
        ...state,
        selectedContract: action.payload,
      };
    case UPDATE_CONTRACT_START:
      return {
        ...state,
        updatedContractStart: action.payload,
      };
    case UPDATE_CONTRACT_END:
      return {
        ...state,
        updatedContractEnd: action.payload,
      };
    case UPDATE_SALARY:
      return {
        ...state,
        updatedSalary: action.payload,
      };
    case CHANGE_ERROR_STATUS:
      return {
        ...state,
        updateContractErrors: null,
      };
    default:
      return state;
  }
};
