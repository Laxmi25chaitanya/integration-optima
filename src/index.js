import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import LoginPage from "./containers/LoginPage/Loginpage";
import ForgotPassword from "./pages/ForgotPassword";
import ChangePassword from "./pages/ChangePassword";
import SpendAnalysis from './containers/SpendAnalysis/SpendAnalysis';
import WalletPage from "./containers/WalletPage/Walletpage.js";
import store from "./app/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Router>
    <Switch>
    <Provider store={store}>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/app" component={App} />
        <Route exact path="/WalletPage" component={WalletPage} />
        <Route exact path="/spendAnalysis" component={SpendAnalysis} />
        <Route exact path="/forgotPassword" component={ForgotPassword} />
        <Route exact path="/changePassword" component={ChangePassword} />
    </Provider>
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
