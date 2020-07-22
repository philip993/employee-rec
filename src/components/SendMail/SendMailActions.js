import {
  SEND_MAIL_SUCCESS,
  SEND_MAIL_FAILURE,
  EMAIL_BODY_INPUT,
  EMAIL_SUBJECT_INPUT,
  EMAIL_RECIPIENT_INPUT,
  CHANGE_ERROR_STATUS,
  EMAIL_ATTACHMENT_NAME,
  IS_LOADING_TRUE,
  SELECT_ONE_CONTRACT_MAIL,
} from './SendMailActionTypes';
// axios
import axios from 'axios';

// request
export const requesstSendMail = (e) => {
  return (dispatch, getState) => {
    let {
      emailBody,
      emailSubject,
      emailRecipient,
      emailAttachment,
    } = getState().SendMailReducer;
    return axios
      .post(`http://localhost:4000/mail/sent`, {
        emailBody,
        emailSubject,
        emailRecipient,
        emailAttachment,
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

export const emailSubjectInput = (e) => {
  return {
    type: EMAIL_SUBJECT_INPUT,
    payload: e,
  };
};

export const emailRecipentInput = (e) => {
  return {
    type: EMAIL_RECIPIENT_INPUT,
    payload: e,
  };
};

export const emailAttachmentName = (e) => {
  return {
    type: EMAIL_ATTACHMENT_NAME,
    payload: e,
  };
};

// errors
export const changeErrorsStatus = () => {
  return {
    type: CHANGE_ERROR_STATUS,
  };
};

// loader
export const toggleLoaderTrue = () => {
  return (dispatch) => {
    dispatch({
      type: IS_LOADING_TRUE,
      payload: true,
    });
  };
};

// select
export const selectContractMail = (contract) => {
  return (dispatch, getState) => {
    dispatch({
      type: SELECT_ONE_CONTRACT_MAIL,
      payload: contract,
    });
  };
};
