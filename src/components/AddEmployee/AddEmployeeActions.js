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
  INPUT_TELEPHONE_NUMBER,
  INPUT_EMAIL_ADDRESS,
  STEP_INCREMENT,
  STEP_DECREMENT,
  INPUT_IDENTITY_CARD,
  INPUT_SOCIAL_NUMBER,
  INPUT_GENDER,
  INPUT_AGE,
  CHANGE_ERROR_STATUS,
} from './AddEmployeeActionTypes';
import axios from 'axios';

// request
export const requestAddEmployee = (e) => {
  return (dispatch, getState) => {
    let {
      firstName,
      secondName,
      gender,
      age,
      position,
      employmentDate,
      workDepartment,
      address,
      city,
      state,
      identityCard,
      socialNumber,
      telephoneNumber,
      emailAddress,
    } = getState().AddEmployeeReducer;
    return axios
      .post(`http://localhost:4000/employees/add`, {
        firstName,
        secondName,
        gender,
        age,
        position,
        employmentDate,
        workDepartment,
        address,
        city,
        state,
        socialNumber,
        identityCard,
        telephoneNumber,
        emailAddress,
      })
      .then((response) => {
        console.log(response);
        dispatch({
          type: ADD_EMPLOYEE_SUCCESS,
          payload: response.data.employee,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: ADD_EMPLOYEE_FAILURE,
        });
      });
  };
};

// Inputs
export const inputFirstName = (e) => {
  return {
    type: INPUT_FIRST_NAME,
    payload: e,
  };
};

export const inputSecondName = (e) => {
  return {
    type: INPUT_SECOND_NAME,
    payload: e,
  };
};

export const inputGender = (e) => {
  return {
    type: INPUT_GENDER,
    payload: e,
  };
};

export const inputAge = (e) => {
  return {
    type: INPUT_AGE,
    payload: e,
  };
};

export const inputPosition = (e) => {
  return {
    type: INPUT_POSITION,
    payload: e,
  };
};

export const inputEmploymentDate = (e) => {
  return (dispatch) => {
    dispatch({
      type: INPUT_EMPLOYMENT_DATE,
      payload: new Date(e).toLocaleDateString(),
    });
  };
};

export const inputWorkDepartment = (e) => {
  return {
    type: INPUT_WORK_DEPARMENT,
    payload: e,
  };
};

export const inputAddress = (e) => {
  return {
    type: INPUT_ADDRESS,
    payload: e,
  };
};

export const inputCity = (e) => {
  return {
    type: INPUT_CITY,
    payload: e,
  };
};

export const inputState = (e) => {
  return {
    type: INPUT_STATE,
    payload: e,
  };
};

export const inputIdentityCard = (e) => {
  return {
    type: INPUT_IDENTITY_CARD,
    payload: e,
  };
};

export const inputSocialNumber = (e) => {
  return {
    type: INPUT_SOCIAL_NUMBER,
    payload: e,
  };
};

export const inputTelephoneNumber = (e) => {
  return {
    type: INPUT_TELEPHONE_NUMBER,
    payload: e,
  };
};

export const inputEmailAddress = (e) => {
  return {
    type: INPUT_EMAIL_ADDRESS,
    payload: e,
  };
};

// Step
export const stepIncrement = () => {
  return {
    type: STEP_INCREMENT,
  };
};

export const stepDecrement = () => {
  return {
    type: STEP_DECREMENT,
  };
};

// errors
export const changeErrorsStatus = () => {
  return {
    type: CHANGE_ERROR_STATUS,
  };
};
