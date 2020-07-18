import {
  SEND_MAIL_SUCCESS,
  SEND_MAIL_FAILURE,
  EMAIL_BODY_INPUT,
  EMAIL_SUBJECT_INPUT,
  EMAIL_RECIPIENT_INPUT,
  CHANGE_ERROR_STATUS,
  EMAIL_ATTACHMENT_NAME,
  IS_LOADING_TRUE,
} from './SendMailActionTypes';

const initalState = {
  mail: [],
  sendMailError: null,
  emailBody: '',
  emailSubject: '',
  emailRecipient: '',
  emailAttachment: '',
  isLoading: null,
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
        isLoading: false,
      };
    case SEND_MAIL_FAILURE:
      return {
        ...state,
        mail: null,
        sendMailError: true,
        emailBody: '',
        emailSubject: '',
        emailRecipient: '',
        isLoading: false,
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
    case EMAIL_ATTACHMENT_NAME:
      return {
        ...state,
        emailAttachment: action.payload,
      };
    case CHANGE_ERROR_STATUS:
      return {
        ...state,
        sendMailError: null,
      };
    case IS_LOADING_TRUE:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};
