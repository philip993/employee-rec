import {
  SUCCESS_UPDATE_CONTRACT,
  FAILURE_UPDATE_CONTRACT,
} from './UpdateContractActionTypes';
// Axios
import axios from 'axios';

// request
export const requestUpdateContract = () => {
  return (dispatch, getState) => {
    let {
      updateContractStart,
      updateContractEnd,
      updateActiveContract,
    } = getState().UpdateContractReducer;
    let { id } = getState().ContractReducer;

    return axios
      .put(`http://localhost:4000/contracts/update/${id}`, {
        updateContractStart,
        updateContractEnd,
        updateActiveContract,
      })
      .then((response) => {
        console.log(response);
        dispatch({
          type: SUCCESS_UPDATE_CONTRACT,
          payload: response.data.updatedContract,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: FAILURE_UPDATE_CONTRACT,
        });
      });
  };
};
