import React, { useEffect } from "react";
import StoreContainer from "store";
import jwtDecode from "jwt-decode";
import { getAuthTokenKey } from "utils/auth";

interface IAuthenticatorProps {
  children: React.ReactNode;
}

const Authenticator = ({ children }: IAuthenticatorProps) => {
  const auth = StoreContainer.useContainer().auth;

  useEffect(() => {
    const token = localStorage.getItem(getAuthTokenKey());

    if (token && token.length > 0) {
      const decoded: any = jwtDecode(token);

      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
        localStorage.setItem(getAuthTokenKey(), "");
      } else {
        auth.setAuthToken(token);
      }
      auth.finishLoadingAuth();
    } else {
      auth.finishLoadingAuth();
    }
  }, []);

  return (
    <React.Fragment>
      {auth.isLoadingAuth && <div>Loading...</div>}
      {!auth.isLoadingAuth && children}
    </React.Fragment>
  );
};

export default Authenticator;
