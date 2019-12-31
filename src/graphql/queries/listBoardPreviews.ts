import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

interface BoardPreview {
  id: number;
  title: string;
  backgroundColor: string;
  columnCount: number;
  taskCount: number;
}

interface BoardPreviewData {
  boards: BoardPreview[];
}

const LIST_BOARD_PREVIEWS = gql`
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
  useQuery<BoardPreviewData>(LIST_BOARD_PREVIEWS);
