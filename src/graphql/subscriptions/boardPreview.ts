import gql from "graphql-tag";
import { useSubscription } from "@apollo/react-hooks";

interface BoardPreview {
  id: string;
  title: string;
  backgroundColor: string;
  columnCount: number;
  taskCount: number;
}

interface BoardPreviewData {
  boards: BoardPreview;
}

export const BOARD_PREVIEWS_SUBSCRIPTION = gql`
  subscription boardSub {
    boardSub {
      id
      title
      backgroundColor
      columnCount
      taskCount
    }
  }
`;

// const useBoardPreviewsSub = useSubscription<BoardPreview, BoardPreviewSubVariables>(
//   BOARD_PREVIEWS_SUBSCRIPTION,
//   {

//   },

// )
