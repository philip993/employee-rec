import {
  SUCCESS_LOAD_CONTRACT_PAGE,
  FAILURE_LOAD_CONTRACT_PAGE,
} from './ContractPageActionTypes';
// axios
import axios from 'axios';

export const requestContractPage = (e) => {
  return (dispatch, getState) => {
    console.log(e);
    let id = e;
    return axios
      .get(`http://localhost:4000/contracts/${id}`)
      .then((response) => {
        console.log(response);
        dispatch({
          type: SUCCESS_LOAD_CONTRACT_PAGE,
          payload: response.data.oneContract,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: FAILURE_LOAD_CONTRACT_PAGE,
        });
      });
  };
};
