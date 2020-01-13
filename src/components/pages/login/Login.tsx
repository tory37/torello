import React, { useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import {
  useGoogleLoginMutation,
  GoogleLoginMutation
} from "graphql/mutations/googleLogin";
import { useHistory } from "react-router";
import StoreContainer from "store";
import { authTokenKey } from "utils/auth";

const Login = () => {
  const {
    authToken,
    setAuthToken,
    finishLoadingAuth,
    startLoadingAuth
  } = StoreContainer.useContainer().auth;

  const history = useHistory();

  useEffect(() => {
    if (authToken) {
      history.push("/boards");
    }
  }, [authToken]);

  const onApiSuccess = (data: GoogleLoginMutation) => {
    localStorage.setItem(authTokenKey, data.authGoogle.token);
    setAuthToken(data.authGoogle.token);
    finishLoadingAuth();
    history.push("/boards");
  };

  const [login, { loading }] = useGoogleLoginMutation(onApiSuccess);

  const onGoogleSuccess = (response: any) => {
    if (response && response.accessToken) {
      startLoadingAuth();
      login({
        variables: {
          token: response.accessToken
        }
      });
    }
  };

  const onGoogleFailure = (error: any) => {
    console.log(error);
  };

  return (
    <GoogleLogin
      clientId="310637500956-8au5pivia3gvnt4oodl3egcggbqti7h6.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={onGoogleSuccess}
      onFailure={onGoogleFailure}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default Login;
