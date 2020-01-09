import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import StoreContainer from "store";

interface IPrivateRouteProps extends RouteProps {
  component: any;
}

const PrivateRoute = ({
  component: Component,
  ...rest
}: IPrivateRouteProps) => {
  const { isLoadingAuth, authToken } = StoreContainer.useContainer().auth;

  return (
    <React.Fragment>
      {isLoadingAuth && <div>Loading...</div>}
      {!isLoadingAuth && (
        <Route
          {...rest}
          render={routeProps =>
            authToken ? (
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
      )}
    </React.Fragment>
  );
};

export default PrivateRoute;
