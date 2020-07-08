import {
  SUCCESS_ADD_CONTRACT,
  FAILURE_ADD_CONTRACT,
  INPUT_CONTRACT_ID,
  INPUT_CONTRACT_START,
  CONTRACT_90_DAYS,
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
    } = getState().AddContractReducer;
    return axios
      .post(`http://localhost:4000/contracts/add`, {
        contractId,
        contractStart,
        contractEnd,
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
