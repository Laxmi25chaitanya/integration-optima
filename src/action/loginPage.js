import * as actionTypes from "../constant/index";
import loginPageService from "../services/loginPageService";

export const validateUserCredentials = (bodyData) => {
  return dispatch => {
    loginPageService.validateUserCredentials(bodyData)
    .then((res) => {
        // console.log("response from service", res);    
        if (res.status == 200) {
                  dispatch({
                    type: actionTypes.VALIDATION_SUCCESSFUL,
                    payload: res.username
                  });
                } else {
                  dispatch({
                    type: actionTypes.VALIDATION_FAILURE,
                    payload: false,
                  });
                }
    })
    .catch(err => {
        console.log('response', err)
    })
  };
};
