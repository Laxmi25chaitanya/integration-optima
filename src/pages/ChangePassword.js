import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updatePasswordCredentials } from "../action/loginPage";
import { useHistory } from "react-router-dom";
import Logo from "../components/imgaes/ps.png";

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
      <img src={Logo}style={{height:"300px",width:"350px"}}></img>
      <div  className="form-signin">
        <h1>Change Password</h1>
        {error ? <p>{`${errorMessage}`}</p> : ""}

        <input
          type="password"
          placeholder="new password"
          className="form-control"
          value={newPass}
          onChange={(e) => {
            setError(false);
            setNewPass(e.target.value);
          }}
        />
        <br />
        <input
          type="password"
          value={confirmPass}
          placeholder="confirm password"
          className="form-control"
          onChange={(e) => {
            setError(false);
            setConfirmPass(e.target.value);
          }}
        />
      <button type="submit" onClick={handleChangePassword}>
        <span>Change Password</span>
      </button>
    </div>
    </div>
  );
};

export default ChangePassword;
