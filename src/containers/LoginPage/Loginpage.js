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
import PropTypes from "prop-types";
import { authenticateLogin } from "../../services/loginPageService";

let message;
const App = ({ setToken }) => {
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
  const usernameUpdateStatus = useSelector(
    (state) => state.loginPage.usernameUpdateStatus
  );
  let user = useSelector((state) => state.loginPage.userName);
  useEffect(() => {
    if (!errorStatus) {
      localStorage.setItem("userName", user);
      authenticate();
      console.log("*********token",errorStatus)
      history.push("/home");
    }
  }, [errorStatus]);

  useEffect(() => {
    if (errorMessage) {
      setError(true);
      message = errorMessage;
    }
  }, [errorMessage]);
  const authenticate = async () => {
    // const token = await loginUser({
    //   userName,
    //   password,
    // });
    const response = await authenticateLogin({ userName, password });
    const token = response.token;
    // setToken(token);
  };
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
  const handleSubmit = async (e) => {
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
  const handleForgotUsername = (e) => {
    dispatch(clearErrorMessage());
    history.push("/forgotUsername");
  };
  return (
    <div className="lp-text-center">
      <img className="lp-login-wallet-img" alt="wallet" src={Logo}></img>
      <div className="lp-form-signin">
        <h1>Sign in here!</h1>
        {error ? <p className="lp-error-message">{`${message}`}</p> : null}
        <br />
        <div className="lp-button1">
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
        <input
          id="userName"
          type="text"
          value={userName}
          className="lp-login-form-control"
          onChange={handleUsernameChange}
          placeholder="Enter Username"
        />
        <input
          id="password"
          type="password"
          value={password}
          className="lp-login-form-control"
          onChange={handlePasswordChange}
          placeholder="Enter Password"
        />
        <br />
        <button className="lp-login-button" onClick={handleSubmit}>
          <span>Sign In</span>
        </button>
        <button className="lp-login-button" onClick={handleForgotPassword}>
          <span>Forgot Password</span>
        </button>
        <button className="lp-login-button" onClick={handleForgotUsername}>
          <span>Forgot Username</span>
        </button>
        <br />
        {passwordUpdateStatus ? (
          <span className="lp-success-message">Password Updated!</span>
        ) : (
          ""
        )}
        {usernameUpdateStatus ? (
          <span className="lp-success-message">Username Updated!</span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default App;
// App.propTypes = {
//   setToken: PropTypes.func.isRequired,
// };
