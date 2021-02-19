import React, { useState, useEffect } from "react";
import "../containers/LoginPage/Loginpage.css";
import { useDispatch, useSelector } from "react-redux";
import { clearErrorMessage, validateMailPresence } from "../action/loginPage";
import { useHistory } from "react-router-dom";
import Logo from "../components/imgaes/ps.png";

let message = "";
const ForgotUsername = () => {
  const [mailId, setMailId] = useState("");
  const [type, setType] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  let errorMessage = useSelector((state) => state.loginPage.errorMessage);
  let mailStatus = useSelector((state) => state.loginPage.mailStatus);
  let history = useHistory();
  useEffect(() => {
    if (mailStatus) {
      history.push({
        pathname: "/changeUsername",
        state: { mailId: mailId, type: type },
      });
    }
  }, [mailStatus]);
  useEffect(() => {
    if (errorMessage) {
      setError(true);
      message = errorMessage;
    }
  }, [errorMessage]);

  const handleMailid = (e) => {
    setError(false);
    dispatch(clearErrorMessage());
    setMailId(e.target.value);
  };

  const handleTypeChange = (e) => {
    setError(false);
    dispatch(clearErrorMessage());
    setType(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (mailId === "" || type === "") {
      setError(true);
      message = "All fields are required!";
    } else {
      dispatch(validateMailPresence({ mailId, type }));
    }
  };
  return (
    <div>
      <img
        src={Logo}
        className="lp-login-wallet-img"
      ></img>
      <div className="lp-form-signin">
        <h1>Forgot Username</h1>
        {error ? <p className="lp-error-message">{`${message}`}</p> : null}
        <div className="lp-button1">
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
          name="mailId"
          type="email"
          className="lp-login-form-control"
          value={mailId}
          placeholder="Enter your Mail ID"
          onChange={handleMailid}
        />
        <button onClick={handleSearch} className="lp-login-button">
          <span>Search</span>
        </button>
      </div>
    </div>
  );
};

export default ForgotUsername;
