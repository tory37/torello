import { useQuery, useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

const getAppState = gql`
  query {
    state @client {
      appState {
        isCreateModalOpen
      }
    }
  }
`;

export const useIsCreateModalOpen = () => {
  const { loading, error, data } = useQuery(getAppState);

  return {
    loading,
    error,
    isCreateModalOpen: data.state.appState.isCreateModalOpen
  };
};

export const useSetIsCreateModalOpen = () => {
  const [mutate] = useMutation(gql`
    mutation updateAppState {
      isCreateModeEnabled
    }
  `);

  const setIsCreateModalOpen = (isOpen: Boolean) => {
    const newAppState = {
      isCreateModalOpen: isOpen,
      __typename: "AppState"
    };

    mutate({ variables: newAppState });
  };

  return setIsCreateModalOpen;
};
