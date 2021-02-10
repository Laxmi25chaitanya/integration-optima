import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ChangePassword from "./ChangePassword";
import "../containers/LoginPage/Loginpage.css";

let errorMessage;

const ForgotPassword = () => {
  let errormessage;
  const [userName, setUserName] = useState("");
  const [type, setType] = useState("");
  const [error, setError] = useState(false);
  const [findStatus, setFindStatus] = useState(false);
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
    setFindStatus(false);
    setUserName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setError(false);
    setFindStatus(false);
    setType(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (userName === "" || type === "") {
      setError(true);
      errorMessage = "Both Username and Type are required!";
    } else {
      const item = data.userList.filter(
        (userlist) => userlist.type === type
      )[0];
      const userDetails = item.userDetails.filter(
        (user) => user.userName === userName
      )[0];
      if (userDetails) {
        setFindStatus(true);
        setError(true);
        errorMessage = "User Found!";
      } else {
        setError(true);
        errorMessage = "User Not Found!";
      }
    }
  };

  return (
    <BrowserRouter>
      <div className="form-signin">
        <h3>Forgot Password</h3>
        {error ? <p className="errorMessage">{`${errorMessage}`}</p> : ""}
        <input
          name="Username"
          type="text"
          className="form-control"
          value={userName}
          onChange={handleUsernameChange}
        />
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
        <button className="btn m-2 btn-sm btn-primary" onClick={handleSearch}>
          Search
        </button>
        {findStatus ? (
          <Route to="/newPassword" component={ChangePassword} />
        ) : (
          ""
        )}
      </div>
    </BrowserRouter>
  );
};

export default ForgotPassword;
