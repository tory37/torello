import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";

export const state = {
  createModal: {
    __typename: "CreateModalState",
    isOpen: false
  }
};

export const typeDefs = gql`
  extend type Query {
    createModal: any
  }
`;

const queries = {
  GET_IS_OPEN: gql`
    query {
      createModal @client {
        isOpen
      }
    }
  `
};

export const mutations = {
  CREATE_MODAL_OPEN: gql`
    mutation {
      createModalSet(val: true) @client
    }
  `,
  CREATE_MODAL_CLOSE: gql`
    mutation {
      createModalSet(val: false) @client
    }
  `
};

export const resolvers = {
  mutations: {
    createModalSet: (root: any, { val }: any, { cache }: any) => {
      console.log("in mutation");
      cache.writeData({
        data: {
          createModal: {
            __typename: "CreateModalState",
            isOpen: val
          }
        }
      });
      return null;
    }
  }
};

export const hooks = {
  useIsOpen: () => {
    const { data, loading, error } = useQuery(queries.GET_IS_OPEN);
    return {
      isOpen: data && data.createModal ? data.createModal.isOpen : false,
      loading,
      error
    };
  },
  useOpenModal: () => {
    const [open] = useMutation(mutations.CREATE_MODAL_OPEN);
    return open;
  },
  useCloseModal: () => {
    const [close] = useMutation(mutations.CREATE_MODAL_CLOSE);
    return close;
  }
};
