import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./routes/protectedRoute";
import App from "./App";
import ForgotPassword from "./pages/ForgotPassword";
import ChangePassword from "./pages/ChangePassword";
import ForgotUsername from "./pages/ForgotUsername";
import ChangeUsername from "./pages/ChangeUsername";
import SpendAnalysis from "./containers/SpendAnalysis/SpendAnalysis";
import store from "./app/store";
import "./index.css";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Router>
    <Switch>
      <Provider store={store}>
        <Route exact path="/" component={App} />
        {/* <Route exact path="/app" component={App} /> */}
        <ProtectedRoute exact path="/spendAnalysis" component={SpendAnalysis} />
        <Route exact path="/forgotPassword" component={ForgotPassword} />
        <Route exact path="/changePassword" component={ChangePassword} />
        <Route exact path="/forgotUsername" component={ForgotUsername} />
        <Route exact path="/changeUsername" component={ChangeUsername} />
      </Provider>
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
