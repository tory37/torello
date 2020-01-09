import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

export interface GoogleLoginMutation {
  authGoogle: {
    token: string;
    name: string;
    id: string;
  };
}

interface GoogleLoginMutationVariables {
  token: string;
}

export const GOOGLE_LOGIN_MUTATION = gql`
  mutation authGoogle($token: String) {
    authGoogle(token: $token) {
      token
    }
  }
`;

export const useGoogleLoginMutation = (
  onCompleted: (data: GoogleLoginMutation) => void
) =>
  useMutation<GoogleLoginMutation, GoogleLoginMutationVariables>(
    GOOGLE_LOGIN_MUTATION,
    {
      onCompleted(data) {
        onCompleted(data);
      }
    }
  );
