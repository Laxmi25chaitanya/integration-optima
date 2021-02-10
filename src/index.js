import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route } from 'react-router-dom';
import "./index.css";
import App from './App';
import LoginPage from "./containers/LoginPage/Loginpage";
import store from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
       <Route exact path='/' component={LoginPage} />
       <Route exact path='/app' component={App} /> 
      </HashRouter>
    </Provider> 
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
