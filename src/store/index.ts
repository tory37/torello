import gql from "graphql-tag";

export const defaultState = {
  data: {
    isCreateModalOpen: false
  }
};

export const typeDefs = gql`
  extend type Query {
    isCreateModalOpen: Boolean!
  }
`;

export const resolvers = {
  Mutation: {
    setCreateModal: (_: any, { id }: any, { cache }: any) => {
      console.log("in mutation");
      cache.writeData({
        data: { isCreateModalOpen: true }
      });
      return null;
    }
  }
};
