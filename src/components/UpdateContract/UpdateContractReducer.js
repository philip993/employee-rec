import {
  SUCCESS_UPDATE_CONTRACT,
  FAILURE_UPDATE_CONTRACT,
} from './UpdateContractActionTypes';

const initialState = {
  updatedContractStart: null,
  updatedContractEnd: null,
  updatedActiveContract: null,
  updateContractErrors: null,
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
    default:
      return state;
  }
};
