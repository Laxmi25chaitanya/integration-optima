import * as actionTypes from "../constant/index";

const initialState = {
  userName: null,
  error: true,
  userStatus: false,
  passwordUpdateStatus: false,
};

const loginPageReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.VALIDATION_SUCCESSFUL: {
      return { userName: payload, error: false, userStatus: false };
    }
    case actionTypes.VALIDATION_FAILURE: {
      return { userName: null, error: payload, userStatus: false };
    }
    case actionTypes.VALIDATION_USERFOUND: {
      return { userName: payload, error: false, userStatus: true };
    }
    case actionTypes.VALIDATION_USERNOTFOUND: {
      return { userName: null, error: payload, userStatus: false };
    }
    case actionTypes.PASSWORD_UPDATION_SUCCESSFUL: {
      return { ...state, error: true, passwordUpdateStatus: true };
    }
    case actionTypes.PASSWORD_UPDATION_FAILURE: {
      return { ...state, error: true, passwordUpdateStatus: false };
    }
    default: {
      return { ...state };
    }
  }
};

export default loginPageReducer;
