import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoutes = ({ isAuthenticated, component: Component, ...props }) => {
  return (
    <Route
      {...props}
      component={props =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/home" />
      }
    />
  );
};

export default PrivateRoutes;
