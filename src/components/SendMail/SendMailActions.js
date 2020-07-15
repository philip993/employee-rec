import {
  SEND_MAIL_SUCCESS,
  SEND_MAIL_FAILURE,
  EMAIL_BODY_INPUT,
} from './SendMailActionTypes';
// axios
import axios from 'axios';

// request
export const requesstSendMail = () => {
  return (dispatch, getState) => {
    let { emailBody } = getState().SendMailReducer;
    return axios
      .post(`http://localhost:4000/mail/sent`, {
        emailBody,
      })
      .then((response) => {
        console.log(response);
        dispatch({
          type: SEND_MAIL_SUCCESS,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: SEND_MAIL_FAILURE,
        });
      });
  };
};

// input
export const emailBodyInput = (e) => {
  return {
    type: EMAIL_BODY_INPUT,
    payload: e,
  };
};
