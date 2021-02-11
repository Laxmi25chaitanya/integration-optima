import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updatePasswordCredentials } from "../action/loginPage";

let errorMessage;

const ChangePassword = (props) => {
  const location = useLocation();
  const userName = location.state.userName;
  const type = location.state.type;
  const dispatch = useDispatch();
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState(false);

  const handleChangePassword = (e) => {
    e.preventDefault();
    if (newPass !== confirmPass) {
      errorMessage = "Both The passwords should be match!";
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
