import * as actionTypes from "../constant/index";
import loginPageService from "../services/loginPageService";

export const validateUserCredentials = (bodyData) => {
  // console.log("values from Front end 1st is action ", bodyData)
  return (dispatch) => {
    loginPageService.validateUserCredentials(bodyData).then((res) => {
      console.log("Response from service", res);
      //   if (res.status == 200) {
      //     dispatch({
      //       type: actionTypes.VALIDATION_SUCCESSFUL,
      //       //payload: //to be decided
      //     });
      //   } else {
      //     dispatch({
      //       type: actionTypes.VALIDATION_FAILURE,
      //       payload: false,
      //     });
      //   }
    });
  };
};
