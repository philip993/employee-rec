import {
  SEND_MAIL_SUCCESS,
  SEND_MAIL_FAILURE,
  EMAIL_BODY_INPUT,
  EMAIL_SUBJECT_INPUT,
  EMAIL_RECIPIENT_INPUT,
} from './SendMailActionTypes';

const initalState = {
  mail: [],
  sendMailError: null,
  emailBody: '',
  emailSubject: '',
  emailRecipient: '',
};

export const SendMailReducer = (state = initalState, action) => {
  switch (action.type) {
    case SEND_MAIL_SUCCESS:
      return {
        ...state,
        mail: action.payload,
        sendMailError: false,
        emailBody: '',
        emailSubject: '',
        emailRecipient: '',
      };
    case SEND_MAIL_FAILURE:
      return {
        ...state,
        mail: null,
        sendMailError: true,
        emailBody: '',
        emailSubject: '',
        emailRecipient: '',
      };
    case EMAIL_BODY_INPUT:
      return {
        ...state,
        emailBody: action.payload,
      };
    case EMAIL_SUBJECT_INPUT:
      return {
        ...state,
        emailSubject: action.payload,
      };
    case EMAIL_RECIPIENT_INPUT:
      return {
        ...state,
        emailRecipient: action.payload,
      };
    default:
      return state;
  }
};
