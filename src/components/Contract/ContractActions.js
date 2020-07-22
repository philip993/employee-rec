import {
  SUCCESS_LOAD_CONTRACTS,
  FAILURE_LOAD_CONTRACTS,
} from './ContractActionTypes';
// Axios
import axios from 'axios';

// request
export const requestGetContracts = () => {
  return (dispatch, getState) => {
    return axios
      .get(`http://localhost:4000/contracts`)
      .then((response) => {
        console.log(response);
        dispatch({
          type: SUCCESS_LOAD_CONTRACTS,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: FAILURE_LOAD_CONTRACTS,
        });
      });
  };
};
