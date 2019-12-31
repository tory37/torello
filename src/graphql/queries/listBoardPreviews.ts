import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

export interface BoardPreviews {
  boards: {
    id: number;
    title: string;
    backgroundColor: string;
    columnCount: number;
    taskCount: number;
  }[];
}

export const LIST_BOARD_PREVIEWS_QUERY = gql`
  query listBoardPreviews {
    boards {
      id
      title
      backgroundColor
      columnCount
      taskCount
    }
  }
`;

export const useListBoardPreviewsQuery = () =>
  useQuery<BoardPreviews>(LIST_BOARD_PREVIEWS_QUERY);
