import * as actionTypes from "../constant/index";

const initialState = {
  userName: null,
  error: true,
  userStatus: false,
  passwordUpdateStatus: false,
  errorMessage: null,
};

const loginPageReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.VALIDATION_SUCCESSFUL: {
      return { ...state, userName: payload, error: false };
    }
    case actionTypes.VALIDATION_FAILURE: {
      return {
        userName: null,
        error: true,
        userStatus: true,
        errorMessage: payload,
      };
    }
    case actionTypes.VALIDATION_USERFOUND: {
      return { userName: payload, error: false, userStatus: true };
    }
    case actionTypes.VALIDATION_USERNOTFOUND: {
      return {
        userName: null,
        error: true,
        userStatus: false,
        errorMessage: payload,
      };
    }
    case actionTypes.PASSWORD_UPDATION_SUCCESSFUL: {
      return { ...state, error: true, passwordUpdateStatus: true };
    }
    case actionTypes.PASSWORD_UPDATION_FAILURE: {
      return { ...state, error: true, passwordUpdateStatus: false };
    }
    case actionTypes.CLEAR_ERROR_MESSAGE: {
      return { ...state, errorMessage: payload };
    }

    default: {
      return { ...state };
    }
  }
};

export default loginPageReducer;
