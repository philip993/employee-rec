import {
  SEND_MAIL_SUCCESS,
  SEND_MAIL_FAILURE,
  EMAIL_BODY_INPUT,
} from './SendMailActionTypes';

const initalState = {
  mail: [],
  sendMailError: null,
  emailBody: '',
};

export const SendMailReducer = (state = initalState, action) => {
  switch (action.type) {
    case SEND_MAIL_SUCCESS:
      return {
        ...state,
        mail: action.payload,
        sendMailError: false,
      };
    case SEND_MAIL_FAILURE:
      return {
        ...state,
        mail: null,
        sendMailError: true,
      };
    case EMAIL_BODY_INPUT:
      return {
        ...state,
        emailBody: action.payload,
      };
    default:
      return state;
  }
};
