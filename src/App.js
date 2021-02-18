import React, { useState } from "react";
import "./App.css";
import LoginPage from "./containers/LoginPage/Loginpage";
import useToken from "./hooks/useToken";
 
const getUserName = () => {
  const username = localStorage.getItem("userName");
  return username;
};
 
function App() {
  const { token, setToken } = useToken(); // why braces
 
  const username = getUserName();
  if (!token) {
    return <LoginPage setToken={setToken} />;
  }
 
  const handleSignOut = () => {
    localStorage.clear();
    window.location.reload();
  };
 
  return (
    <div className="App">
      <h1>OPTIMA - {username}</h1>
      <button onClick={handleSignOut} className="login-button">Sign out</button>
    </div>
  );
}
 
export default App;