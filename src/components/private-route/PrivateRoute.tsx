import React, { useEffect, useState } from "react";
import { useGoogleLoginMutation } from "graphql/mutations/googleLogin";
import { Route, Redirect, RouteProps } from "react-router-dom";

interface IPrivateRouteProps extends RouteProps {
  component: any;
  isLoggedIn: boolean;
}

const PrivateRoute = ({
  component: Component,
  isLoggedIn,
  ...rest
}: IPrivateRouteProps) => {
  return (
    <Route
      {...rest}
      render={routeProps =>
        isLoggedIn ? (
          <Component {...routeProps} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: routeProps.location }
            }}
          />
        )
      }
    />
  );
};
