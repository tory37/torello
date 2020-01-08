import React from "react";
import { GoogleLogin } from "react-google-login";
import { useGoogleLoginMutation } from "graphql/mutations/googleLogin";
import { useHistory } from "react-router";

const Login = () => {
  const onApiSuccess = () => {
    history.push("/boards");
  };

  const [login] = useGoogleLoginMutation(onApiSuccess);
  const history = useHistory();

  const onGoogleSuccess = (response: any) => {
    console.log(response);
    if (response && response.accessToken) {
      console.log(response);
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
