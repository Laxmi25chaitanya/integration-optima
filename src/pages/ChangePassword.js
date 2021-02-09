import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "../App.css";

let errorMessage;

const ChangePassword = () => {
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState(false);
  const handleChangePassword = (e) => {
    e.preventDefault();
    if (newPass !== confirmPass) {
      errorMessage = "The passwords do not match!";
      setError(true);
    } else if (newPass === "" && confirmPass === "") {
      setError(true);
      errorMessage = "The fields cannot be empty!";
    } else {
      setError(false);
      console.log("Password Changed!");
      <Redirect to="/login"></Redirect>;
    }
  };
  return (
    <div>
      <div className="form-signin">
        {error ? <p className="errorMessage">{`${errorMessage}`}</p> : ""}
        <label>New Password</label>
        <input
          type="password"
          value={newPass}
          onChange={(e) => {
            setError(false);
            setNewPass(e.target.value);
          }}
        />
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
      <button
        className="btn btn-primary m-2 btn-sm"
        type="submit"
        onClick={handleChangePassword}
      >
        Change Password
      </button>
    </div>
  );
};

export default ChangePassword;
