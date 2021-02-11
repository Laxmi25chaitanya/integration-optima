import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updatePasswordCredentials } from "../action/loginPage";
import { useHistory } from "react-router-dom";

let errorMessage;

const ChangePassword = (props) => {
  let history = useHistory();
  const location = useLocation();
  const userName = location.state.userName;
  const type = location.state.type;
  const dispatch = useDispatch();
  //  let errorStatus = useSelector((state) => state.location.error);
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState(false);
  const passwordUpdateStatus = useSelector(
    (state) => state.loginPage.passwordUpdateStatus
  );

  useEffect(() => {
    if (passwordUpdateStatus) {
      alert("Password Updated!");
      // errorStatus = true;
      setTimeout(() => {
        history.push({
          pathname: "/",
          state: { status: true },
        });
      }, 1000);
    }
  }, [passwordUpdateStatus]);

  const handleChangePassword = (e) => {
    e.preventDefault();
    if (newPass.length < 4 && newPass.length > 12) {
      setError(true);
      console.log("The password should be 4-12 characters in length!");
    } else if (newPass !== confirmPass) {
      errorMessage = "The passwords do not match!";
      setError(true);
    } else if (newPass === "" && confirmPass === "") {
      setError(true);
      errorMessage = "The fields cannot be empty!";
    } else {
      dispatch(updatePasswordCredentials({ userName, type, newPass }));
    }
  };
  return (
    <div>
      <div>
        <h1>Change Password</h1>
        {error ? <p>{`${errorMessage}`}</p> : ""}

        <label>New Password</label>
        <input
          type="password"
          value={newPass}
          onChange={(e) => {
            setError(false);
            setNewPass(e.target.value);
          }}
        />
        <br />
        <label>Confirm Password</label>
        <input
          type="password"
          value={confirmPass}
          onChange={(e) => {
            setError(false);
            setConfirmPass(e.target.value);
          }}
        />
      </div>
      <button type="submit" onClick={handleChangePassword}>
        <span>Change Password</span>
      </button>
    </div>
  );
};

export default ChangePassword;
