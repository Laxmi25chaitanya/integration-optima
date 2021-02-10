import React, { useState, useEffect } from "react";
import "./Loginpage.css";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import Label from "../../components/Label";
import ForgotPassword from "../../pages/ForgotPassword";

let errorMessage;
const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("");
  const [error, setError] = useState(false);
  const [data, setData] = useState();

  const getData = () => {
    fetch("http://localhost:9000/userDetailsAPI", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const handleUsernameChange = (e) => {
    setError(false);
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setError(false);

    setPassword(e.target.value);
  };
  const handleTypeChange = (e) => {
    setError(false);
    setType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName === "" || password === "" || type === "") {
      setError(true);
      errorMessage = "All fields required!";
    } else {
      const item = data.userList.filter(
        (userlist) => userlist.type === type
      )[0];
      const userDetails = item.userDetails.filter(
        (user) => user.userName === userName
      )[0];
      if (userDetails) {
        if (userDetails.userName === userName && userDetails.pwd === password) {
          console.log("Login Successful!");
        } else {
          setError(true);
          errorMessage = "Incorrect username or password!";
        }
      } else {
        setError(true);
        errorMessage = "User not found!";
      }
    }
  };
  return (
    <div className="text-center">
      <BrowserRouter>
        <Route
          path="/"
          exact
          render={() => {
            return (
              <div className="form-signin" data-test="app-component">
                <h1 className="h3 mb-3">Sign in!</h1>
                <span data-test="error-component">
                  {error ? (
                    <p className="errorMessage">{`${errorMessage}`}</p>
                  ) : (
                    ""
                  )}
                </span>
                <div data-test="type-component">
                  <input
                    name="type"
                    value={type}
                    type="radio"
                    value="retail"
                    onChange={handleTypeChange}
                  />
                  Retail
                  <input
                    name="type"
                    value={type}
                    type="radio"
                    value="commercial"
                    onChange={handleTypeChange}
                  />
                  Commercial
                </div>
                <Label
                  lName="Username"
                  type="text"
                  className="form-control"
                  value={userName}
                  onChange={handleUsernameChange}
                />
                <Label
                  lName="Password"
                  type="password"
                  value={password}
                  className="form-control"
                  onChange={handlePasswordChange}
                />
                <br />
                <button
                  data-test="signin-button"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Sign In
                </button>
                <NavLink to="/ForgotPassword" exact>
                  Forgot Password
                </NavLink>
              </div>
            );
          }}
        ></Route>
        <Route path="/ForgotPassword" exact component={ForgotPassword} />
      </BrowserRouter>
    </div>
  );
};

export default LoginPage;
