import React, { useState, useEffect } from "react";
import "../containers/LoginPage/Loginpage.css";
import { useDispatch, useSelector } from "react-redux";
import { clearErrorMessage, validateUserPresence } from "../action/loginPage";
import { useHistory } from "react-router-dom";
import Logo from "../components/imgaes/ps.png";

let message;

const ForgotPassword = () => {
  let history = useHistory();
  let userStatus = useSelector((state) => state.loginPage.userStatus);
  let errorMessage = useSelector((state) => state.loginPage.errorMessage);
  const [userName, setUserName] = useState("");
  const [type, setType] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userStatus) {
      history.push({
        pathname: "/changePassword",
        state: { userName: userName, type: type },
      });
    }
  }, [userStatus]);

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

  const handleTypeChange = (e) => {
    setError(false);
    dispatch(clearErrorMessage());
    setType(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (userName === "" || type === "") {
      setError(true);
      message = "All fields are required!";
    } else {
      dispatch(validateUserPresence({ userName, type }));
    }
  };

  return (
    <div>
      <img src={Logo} style={{ height: "300px", width: "350px" }}></img>
      <div className="form-signin">
        <h1>Forgot Password</h1>
        {error ? <p className="error-message">{`${message}`}</p> : null}
        <div className="button1">
          <input
            name="type"
            value={type}
            type="radio"
            value="retail"
            onChange={handleTypeChange}
          />
          <span>Retail</span>
        </div>
        <input
          name="type"
          value={type}
          type="radio"
          value="commercial"
          onChange={handleTypeChange}
        />
        <span>Commercial</span>
        <br />
        <input
          name="Username"
          type="text"
          className="form-control"
          value={userName}
          placeholder="Enter Username"
          onChange={handleUsernameChange}
        />
        <br />
        <button onClick={handleSearch}>
          <span>Search</span>
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
