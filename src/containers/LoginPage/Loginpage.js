import React, { useState, useEffect } from "react";
import "../../App.css";
import "./Loginpage.css";
import Logo from "../../components/imgaes/finance.png";
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
  let errorStatus = useSelector(state => state.loginPage.error)
  console.log(errorStatus,"error status");
  
  useEffect(()=>{
    if(!errorStatus){
      history.push("/app")
  }
  
  },[errorStatus])
 

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
    // }
    else{
      dispatch(validateUserCredentials({ type, userName, password }));
    }
    // console.log(type,userName, password);
  };

  return (
    <div className="text-center">
      <img src={Logo}></img>
      <div className="form-signin">
        <h1>Sign in here!</h1>
        {error ? <p>all the fields are required!</p> : null}
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
          holder="username"
        />
        <Label
          id="password"
          type="password"
          value={password}
          className="form-control"
          onChange={handlePasswordChange}
          holder="password"
        />
        <br />
        <button className="btn btn-primary" onClick={handleSubmit}>
          <span>Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default App;
