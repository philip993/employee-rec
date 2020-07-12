import {
  SUCCESS_UPDATE_CONTRACT,
  FAILURE_UPDATE_CONTRACT,
  SELECT_ONE_CONTRACT,
  UPDATE_CONTRACT_START,
  UPDATE_ACTIVE_CONTRACT,
  UPDATE_CONTRACT_END,
} from './UpdateContractActionTypes';
// Axios
import axios from 'axios';

// request
export const requestUpdateContract = () => {
  return (dispatch, getState) => {
    let {
      updatedContractStart,
      updatedContractEnd,
      updatedActiveContract,
    } = getState().UpdateContractReducer;
    let tt = getState().UpdateContractReducer.selectedContract;
    let id = tt.id;
    console.log(tt);
    console.log(tt.id);
    return axios
      .put(`http://localhost:4000/contracts/update`, {
        id,
        contractStart: updatedContractStart,
        contractEnd: updatedContractEnd,
        activeContract: updatedActiveContract,
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

// select
export const selectContract = (contract) => {
  return (dispatch, getState) => {
    dispatch({
      type: SELECT_ONE_CONTRACT,
      payload: contract,
    });
  };
};

// input
export const updateContractStart = (e) => {
  return {
    type: UPDATE_CONTRACT_START,
    payload: e.setDate(e.getDate()),
  };
};

export const updateContractEnd = (e) => {
  return {
    type: UPDATE_CONTRACT_END,
    payload: e.setDate(e.getDate() + 90),
  };
};

export const updateActiveContract = (e) => {
  return {
    type: UPDATE_ACTIVE_CONTRACT,
    payload: e,
  };
};
