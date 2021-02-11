import React, { useState } from "react";
import "../containers/LoginPage/Loginpage.css";
import { useDispatch, useSelector } from "react-redux";
import { validateUserPresence } from "../action/loginPage";
import { useHistory } from "react-router-dom";
import Logo from "../components/imgaes/ps.png";
let errorMessage;

const ForgotPassword = () => {
  let history = useHistory();
  const userStatus = useSelector((state) => state.loginPage.userStatus);
  const [userName, setUserName] = useState("");
  const [type, setType] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const handleUsernameChange = (e) => {
    setError(false);
    setUserName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setError(false);
    setType(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (userName === "" || type === "") {
      setError(true);
      errorMessage = "Both Username and Type are required!";
    } else {
      dispatch(validateUserPresence({ userName, type }));
      if (userStatus) {
        history.push({
          pathname: "/changePassword",
          state: { userName: userName, type: type },
        });
      } else {
        errorMessage = "User Not Found!";
      }
    }
  };

  return (
    <>
      <img src={Logo}style={{height:"300px",width:"350px"}}></img>
    <div className="form-signin">
      <h1>Forgot Password</h1>
      {error ? <p className="errorMessage">{`${errorMessage}`}</p> : ""}
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
      Commercial
      <br />
      <input
        name="Username"
        type="text"
        className="form-control"
        value={userName}
        placeholder="username"
        onChange={handleUsernameChange}
      />
      <br />
      <button className="btn m-2 btn-sm btn-primary" onClick={handleSearch}>
        Search
      </button>
    </div>
    </>
  );
};

export default ForgotPassword;
