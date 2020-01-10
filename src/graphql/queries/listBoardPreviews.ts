import gql from "graphql-tag";
import { useQuery, useLazyQuery } from "@apollo/react-hooks";

export interface BoardPreviews {
  boards: {
    id: string;
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

export const useLazyListBoardPreviewsQuery = () =>
  useLazyQuery<BoardPreviews>(LIST_BOARD_PREVIEWS_QUERY);
