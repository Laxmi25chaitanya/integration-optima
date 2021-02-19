import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem("token");
  //console.log(isAuthenticated);
  return isAuthenticated ? (
    //<Route {...rest} render={(props) => <Component {...rest} {...props} />} />
    <Route {...rest} render={() => <Component />} />
  ) : (
    <Redirect to={{ pathname: "/" }} />
  );
};

export default ProtectedRoute;
