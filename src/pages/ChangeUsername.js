import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearErrorMessage, updateUserCredentials } from "../action/loginPage";
import { useHistory } from "react-router-dom";
import "../containers/LoginPage/Loginpage.css";
import Logo from "../components/imgaes/ps.png";

let message = "";
const ChangeUsername = () => {
  let history = useHistory();
  let errorMessage = useSelector((state) => state.loginPage.errorMessage);
  const location = useLocation();
  const mailId = location.state.mailId;
  const type = location.state.type;
  const dispatch = useDispatch();
  const [newUserName, setNewUserName] = useState("");
  const [error, setError] = useState(false);
  const usernameUpdateStatus = useSelector(
    (state) => state.loginPage.usernameUpdateStatus
  );
  useEffect(() => {
    if (usernameUpdateStatus) {
      alert("Username Updated!");
      // errorStatus = true;
      setTimeout(() => {
        history.push({
          pathname: "/",
          state: { status: true },
        });
      }, 1000);
    }
  }, [usernameUpdateStatus]);

  useEffect(() => {
    if (errorMessage) {
      setError(true);
      message = errorMessage;
    }
  }, [errorMessage]);

  const handleChangeUserName = (e) => {
    e.preventDefault();
    if (newUserName === "") {
      setError(true);
      message = "Field cannot be empty!";
    } else if (newUserName.length < 5 || newUserName.length > 12) {
      setError(true);
      message = "The username should be 5-12 characters in length!";
    } else {
      dispatch(updateUserCredentials({ mailId, type, newUserName }));
    }
  };

  return (
    <div>
      <img src={Logo} style={{ height: "300px", width: "350px" }}></img>
      <div className="form-signin">
        <h1>Reset Username</h1>
        {error ? <p className="error-message">{`${message}`}</p> : ""}

        <input
          type="text"
          placeholder="Enter New Username"
          className="form-control"
          value={newUserName}
          onChange={(e) => {
            setError(false);
            dispatch(clearErrorMessage());
            setNewUserName(e.target.value);
          }}
        />
        <button type="submit" onClick={handleChangeUserName}>
          <span>Reset Username</span>
        </button>
      </div>
    </div>
  );
};

export default ChangeUsername;
