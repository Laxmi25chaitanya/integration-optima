import * as actionTypes from "../constant/index";
import loginPageService from "../services/loginPageService";

export const validateUserCredentials = (bodyData) => {
  return (dispatch) => {
    loginPageService
      .validateUserCredentials(bodyData)
      .then((res) => {
        // console.log("response from service", res);
        if (res.status == 200) {
          dispatch({
            type: actionTypes.VALIDATION_SUCCESSFUL,
            payload: res.username,
          });
        } else {
          dispatch({
            type: actionTypes.VALIDATION_FAILURE,
            payload: false,
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
        } else {
          dispatch({
            type: actionTypes.VALIDATION_USERNOTFOUND,
            payload: false,
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
        // console.log("response from service", res);
        if (res.status == 200) {
          dispatch({
            type: actionTypes.PASSWORD_UPDATION_SUCCESSFUL,
            payload: true,
          });
        } else {
          dispatch({
            type: actionTypes.PASSWORD_UPDATION_FAILURE,
            payload: false,
          });
        }
      })
      .catch((err) => {
        console.log("response", err);
      });
  };
};
