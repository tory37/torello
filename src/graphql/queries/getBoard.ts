import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

export interface GetBoardQueryVariables {
  id: string;
}

export interface GetBoardQueryColumn {
  id: string;
  title: string;
  position: number;
  tasks: GetBoardQueryTask[];
}

export interface GetBoardQueryTask {
  id: string;
  title: string;
  description: string;
  position: number;
}

export interface GetBoardQueryResult {
  board: {
    id: string;
    title: string;
    backgroundColor: string;
    columns: GetBoardQueryColumn[];
  };
}

const GET_BOARD_QUERY = gql`
  query getBoard($id: ID!) {
    board(id: $id) {
      id
      title
      backgroundColor
      columns {
        id
        title
        position
        tasks {
          id
          title
          description
          position
        }
      }
    }
  }
`;

export const useGetBoardQuery = (
  id: string,
  onCompleted: (data: GetBoardQueryResult) => void
) =>
  useQuery<GetBoardQueryResult, GetBoardQueryVariables>(GET_BOARD_QUERY, {
    variables: {
      id
    },
    onCompleted(data) {
      onCompleted(data);
    }
  });
