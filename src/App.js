import React from 'react';
import './App.css';
import { useSelector } from "react-redux";


function App() {
  const username = useSelector(state => state.loginPage.userName);
  return (
    <div className="App">
      <h1>OPTIMA - {username}</h1>
    </div>
  );
}

export default App;
