import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const GET_IS_CREATE_MODAL_OPEN = gql`
  query {
    isCreateModalOpen @client
  }
`;

export const useGetIsCreateModalOpen = () => {
  const { data, loading, error } = useQuery(GET_IS_CREATE_MODAL_OPEN);
  return { isCreateModalOpen: data.isCreateModalOpen, loading, error };
};
