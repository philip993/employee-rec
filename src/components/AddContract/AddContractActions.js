import {
  SUCCESS_ADD_CONTRACT,
  FAILURE_ADD_CONTRACT,
  INPUT_CONTRACT_ID,
  INPUT_CONTRACT_START,
  CONTRACT_90_DAYS,
  CHANGE_ERROR_STATUS,
  INPUT_SALARY,
  CONTRACT_DUPLICATE_TRUE,
  CONTRACT_DUPLICATE_FALSE,
} from './AddContractActionTypes';
// Axios
import axios from 'axios';

// request
export const requestAddContract = () => {
  return (dispatch, getState) => {
    let {
      contractId,
      contractStart,
      contractEnd,
      salary,
    } = getState().AddContractReducer;
    let contracts = getState().ContractReducer.contractList;
    let index = contracts.findIndex(
      (ctr, index) => ctr.contractId === contractId
    );
    console.log(index);
    if (index === -1) {
      return axios
        .post(`http://localhost:4000/contracts/add`, {
          contractId,
          contractStart,
          contractEnd,
          salary,
        })
        .then((response) => {
          console.log(response);
          dispatch({
            type: SUCCESS_ADD_CONTRACT,
            payload: response.data.contract,
          });
        })
        .catch((err) => {
          console.log(err);
          dispatch({
            type: FAILURE_ADD_CONTRACT,
          });
        });
    } else {
      dispatch({
        type: CONTRACT_DUPLICATE_TRUE,
      });
    }
  };
};

// input
export const inputContractId = (e) => {
  return {
    type: INPUT_CONTRACT_ID,
    payload: e,
  };
};

export const inputContractStart = (e) => {
  return {
    type: INPUT_CONTRACT_START,
    payload: e.setDate(e.getDate()),
  };
};

export const contract90days = (e) => {
  return {
    type: CONTRACT_90_DAYS,
    payload: e.setDate(e.getDate() + 90),
  };
};

export const inputSalary = (e) => {
  return {
    type: INPUT_SALARY,
    payload: e,
  };
};

// errors
export const changeErrorsStatus = () => {
  return {
    type: CHANGE_ERROR_STATUS,
  };
};

// check duplicate
export const contractDuplicateTrue = () => {
  return {
    type: CONTRACT_DUPLICATE_TRUE,
  };
};

export const contractDuplicateFalse = () => {
  return {
    type: CONTRACT_DUPLICATE_FALSE,
  };
};
