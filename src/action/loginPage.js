import * as actionTypes from "../constant/index";
import loginPageService from "../services/loginPageService";

export const validateUserCredentials = (bodyData) => {
  return (dispatch) => {
    loginPageService
      .validateUserCredentials(bodyData)
      .then((res) => {
        console.log("response from service", res);
        if (res.status == 200) {
          dispatch({
            type: actionTypes.VALIDATION_SUCCESSFUL,
            payload: res.username,
          });
        } else if (res.status == 400) {
          console.log("validation-failure");
          dispatch({
            type: actionTypes.VALIDATION_FAILURE,
            payload: "Username and Password do not Match!",
          });
        } else if (res.status == 404) {
          console.log("User not found!");
          dispatch({
            type: actionTypes.VALIDATION_USERNOTFOUND,
            payload: "User not found!",
          });
        }
      })
      .catch((err) => {
        console.log("response", err);
      });
  };
};

export const validateUserPresence = (bodyData) => {
  return (dispatch) => {
    loginPageService
      .validateUserPresence(bodyData)
      .then((res) => {
        console.log("response from service", res);
        if (res.status == 200) {
          dispatch({
            type: actionTypes.VALIDATION_USERFOUND,
            payload: res.username,
          });
        } else if (res.status == 404) {
          console.log("User not found!");
          dispatch({
            type: actionTypes.VALIDATION_USERNOTFOUND,
            payload: "User not found!",
          });
        }
      })
      .catch((err) => {
        console.log("response", err);
      });
  };
};

export const updatePasswordCredentials = (bodyData) => {
  return (dispatch) => {
    loginPageService
      .updatePasswordCredentials(bodyData)
      .then((res) => {
        console.log("response from service", res.status);
        if (res.status == 200) {
          dispatch({
            type: actionTypes.PASSWORD_UPDATION_SUCCESSFUL,
          });
        } else {
          dispatch({
            type: actionTypes.PASSWORD_UPDATION_FAILURE,
          });
        }
      })
      .catch((err) => {
        console.log("response", err);
      });
  };
};

export const clearErrorMessage = () => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.CLEAR_ERROR_MESSAGE,
      payload: null,
    });
  };
};
