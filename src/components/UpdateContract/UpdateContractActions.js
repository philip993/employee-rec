import {
  SUCCESS_UPDATE_CONTRACT,
  FAILURE_UPDATE_CONTRACT,
  SELECT_ONE_CONTRACT,
  UPDATE_CONTRACT_START,
  UPDATE_CONTRACT_END,
  END_CONTRACT_SUCCESS,
  END_CONTRACT_FAILURE,
  CHANGE_ERROR_STATUS,
} from './UpdateContractActionTypes';
// Axios
import axios from 'axios';

// request
export const requestUpdateContract = () => {
  return (dispatch, getState) => {
    let {
      updatedContractStart,
      updatedContractEnd,
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
        activeContract: true,
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

// request end contract
export const requestEndContract = () => {
  return (dispatch, getState) => {
    let { currentDate } = getState().ContractReducer;
    let currentUser = getState().UpdateContractReducer.selectedContract;
    console.log(currentUser);

    return axios
      .put(`http://localhost:4000/contracts/update`, {
        id: currentUser.id,
        contractStart: currentUser.contractStart,
        contractEnd: currentDate,
        activeContract: false,
      })
      .then((response) => {
        console.log(response);
        dispatch({
          type: END_CONTRACT_SUCCESS,
          payload: response.data.updatedContract,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: END_CONTRACT_FAILURE,
        });
      });
  };
};

// errors
export const changeErrorsStatus = () => {
  return {
    type: CHANGE_ERROR_STATUS,
  };
};
