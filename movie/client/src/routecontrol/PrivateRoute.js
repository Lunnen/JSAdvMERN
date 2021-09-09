import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const getStateAuth = useSelector((state) => state.auth.authData);
  let isAuthenticated = getStateAuth !== null && getStateAuth.isAuthenticated;

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isAuthenticated) {
          return (
            <Redirect
              to={{
                pathname: "/auth",
                state: { from: props.location },
              }}
            />
          );
        }
        return <Component {...props} />;
      }}
    />
  );
};
