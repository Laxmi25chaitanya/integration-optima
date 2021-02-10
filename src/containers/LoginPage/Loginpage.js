import React, { useState } from "react";
import "../../App.css";
import Label from "../../components/Label.js";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { validateUserCredentials } from "../../action/loginPage";

const App = () => {
  let history = useHistory();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const handleUsernameChange = (e) => {
    setError(false);
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setError(false);
    setPassword(e.target.value);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName === "" || password === "" || type === "") {
      setError(true);
    }
    // else{
    //   history.push("/app")
    // }
    dispatch(validateUserCredentials({ type, userName, password }));
    // console.log(type,userName, password);
  };

  return (
    <div className="text-center">
      <div className="form-signin">
        <h1 className="h3 mb-3">Sign in!</h1>
        {error ? <p>all the fields are required!</p> : null}
        <input
          value={type}
          name="type"
          type="radio"
          value="retail"
          onChange={handleTypeChange}
        />
        Retail
        <input
          value={type}
          name="type"
          type="radio"
          value="commercial"
          onChange={handleTypeChange}
        />
        Commercial
        <Label
          lName="Username"
          id="userName"
          type="text"
          value={userName}
          className="form-control"
          onChange={handleUsernameChange}
        />
        <Label
          lName="Password"
          id="password"
          type="password"
          value={password}
          className="form-control"
          onChange={handlePasswordChange}
        />
        <br />
        <button className="btn btn-primary" onClick={handleSubmit}>
          Sign In
        </button>
      </div>
    </div>
  );
};

export default App;
