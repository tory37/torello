import gql from "graphql-tag";

export const SET_CREATE_MODAL_OPEN = gql`
  mutation {
    setCreateModal(val: true) @client
  }
`;

export const SET_CREATE_MODAL_CLOSED = gql`
  mutation {
    setCreateModal(val: false) @client
  }
`;
