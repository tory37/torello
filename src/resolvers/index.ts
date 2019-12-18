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

export default (getState: any, writeState: any) => {
  return {
    Mutation: {
      updateAppState(_: any, appState: any) {
        //get current / initial state from cache
        const state = getState(getAppState);

        const newState = {
          ...state,
          appState: Object.assign({}, state.appState, appState)
        };

        writeState(newState);
        return newState;
      }
    }
  };
};
