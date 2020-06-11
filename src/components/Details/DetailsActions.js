import {
  SUCCESS_LOAD_DETAILS,
  FAILURE_LOAD_DETAILS,
} from './DetailsActionTypes';

import axios from 'axios';

export const requestDetails = (e) => {
  return (dispatch, getState) => {
    let id = e;
    return axios
      .get(`http://localhost:4000/employees/${id}`)
      .then((response) => {
        console.log(response);
        dispatch({
          type: SUCCESS_LOAD_DETAILS,
          payload: response.data.employee,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: FAILURE_LOAD_DETAILS,
        });
      });
  };
};
