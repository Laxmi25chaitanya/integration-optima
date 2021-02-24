import React, { useState } from "react";
import "./App.css";
import LoginPage from "./containers/LoginPage/Loginpage";
import useToken from "./hooks/useToken";
import Layout from "./containers/HomePage/App"

const getUserName = () => {
  const username = localStorage.getItem("userName");
  return username;
};


function App() {
  const { token, setToken } = useToken();

  const username = getUserName();
  // if (!token) {
  //   return <LoginPage setToken={setToken} />;
  // }
  const handleSignOut = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <LoginPage />
  );
}

export default App;
