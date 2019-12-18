import gql from "graphql-tag";

const typeDefs = gql`
  type appState {
    isCreateModalOpen: Boolean
  }
`;

export default typeDefs;
