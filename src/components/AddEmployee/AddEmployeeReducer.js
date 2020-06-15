import {
  ADD_EMPLOYEE_SUCCESS,
  ADD_EMPLOYEE_FAILURE,
  INPUT_FIRST_NAME,
  INPUT_SECOND_NAME,
  INPUT_POSITION,
  INPUT_EMPLOYMENT_DATE,
  INPUT_WORK_DEPARMENT,
  INPUT_ADDRESS,
  INPUT_CITY,
  INPUT_STATE,
  INPUT_SOCIAL_NUMBER,
  INPUT_IDENTITY_CARD,
  INPUT_TELEPHONE_NUMBER,
  INPUT_EMAIL_ADDRESS,
  STEP_INCREMENT,
  STEP_DECREMENT,
} from './AddEmployeeActionTypes';

const initialState = {
  employee: [],
  errors: null,
  firstName: '',
  secondName: '',
  position: '',
  employementDate: '',
  workDepartment: '',
  address: '',
  city: '',
  state: '',
  socialNumber: '',
  identityCard: '',
  telephoneNumber: '',
  emailAddress: '',
  step: 1,
};

export const AddEmployeeReducer = (state = initialState, action) => {
  switch (action.type) {
    // request
    case ADD_EMPLOYEE_SUCCESS:
      return {
        ...state,
        employee: action.payload,
        errors: false,
      };
    case ADD_EMPLOYEE_FAILURE:
      return {
        ...state,
        employee: null,
        errors: true,
      };
    // inputs
    case INPUT_FIRST_NAME:
      return {
        ...state,
        firstName: action.payload,
      };
    case INPUT_SECOND_NAME:
      return {
        ...state,
        secondName: action.payload,
      };
    case INPUT_POSITION:
      return {
        ...state,
        position: action.payload,
      };
    case INPUT_EMPLOYMENT_DATE:
      return {
        ...state,
        employementDate: action.payload,
      };
    case INPUT_WORK_DEPARMENT:
      return {
        ...state,
        workDepartment: action.payload,
      };
    case INPUT_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };
    case INPUT_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case INPUT_STATE:
      return {
        ...state,
        state: action.payload,
      };
    case INPUT_SOCIAL_NUMBER:
      return {
        ...state,
        socialNumber: action.payload,
      };
    case INPUT_IDENTITY_CARD:
      return {
        ...state,
        identityCard: action.payload,
      };
    case INPUT_TELEPHONE_NUMBER:
      return {
        ...state,
        telephoneNumber: action.payload,
      };
    case INPUT_EMAIL_ADDRESS:
      return {
        ...state,
        emailAddress: action.payload,
      };
    // step
    case STEP_INCREMENT:
      return {
        ...state,
        step: state.step + 1,
      };
    case STEP_DECREMENT:
      return {
        ...state,
        step: state.step - 1,
      };
    default:
      return state;
  }
};
