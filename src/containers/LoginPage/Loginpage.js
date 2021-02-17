import React, { useState, useEffect } from "react";
import "../../App.css";
import "./Loginpage.css";
import Logo from "../../components/imgaes/finance.png";
import Label from "../../components/Label.js";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  clearErrorMessage,
  validateUserCredentials,
} from "../../action/loginPage";

let message;
const App = () => {
  let err = "";
  let history = useHistory();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  let errorStatus = useSelector((state) => state.loginPage.error);
  let errorMessage = useSelector((state) => state.loginPage.errorMessage);
  let passwordUpdateStatus = useSelector(
    (state) => state.loginPage.passwordUpdateStatus
  );

  useEffect(() => {
    if (!errorStatus) {
      history.push("/app");
    }
  }, [errorStatus]);

  useEffect(() => {
    if (errorMessage) {
      setError(true);
      message = errorMessage;
    }
  }, [errorMessage]);

  const handleUsernameChange = (e) => {
    setError(false);
    dispatch(clearErrorMessage());
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setError(false);
    dispatch(clearErrorMessage());
    setPassword(e.target.value);
  };

  const handleTypeChange = (e) => {
    setError(false);
    dispatch(clearErrorMessage());
    setType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName === "" || password === "" || type === "") {
      setError(true);
      message = "All fields are required!";
    } else {
      dispatch(validateUserCredentials({ type, userName, password }));
    }
  };

  const handleForgotPassword = (e) => {
    dispatch(clearErrorMessage());
    history.push("/forgotPassword");
  };

  return (
    <div className="text-center">
      <img src={Logo}></img>
      <div className="form-signin">
        <h1>Sign in here!</h1>
        {error ? <p className="error-message">{`${message}`}</p> : null}
        <br />
        <div className="button1">
          <input
            value={type}
            name="type"
            type="radio"
            value="retail"
            onChange={handleTypeChange}
          />
          <span>Retail</span>
        </div>
        <input
          value={type}
          name="type"
          type="radio"
          value="commercial"
          onChange={handleTypeChange}
        />
        <span>Commercial</span>
        <Label
          id="userName"
          type="text"
          value={userName}
          className="form-control"
          onChange={handleUsernameChange}
          holder="Enter Username"
        />
        <Label
          id="password"
          type="password"
          value={password}
          className="form-control"
          onChange={handlePasswordChange}
          holder="Enter Password"
        />
        <br />
        <button onClick={handleSubmit}>
          <span>Sign In</span>
        </button>
        <button onClick={handleForgotPassword}>
          <span>Forgot Password</span>
        </button>
        <br />
        {passwordUpdateStatus ? (
          <span className="success-message">Password Updated!</span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default App;
