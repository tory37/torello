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
  subscription boardSub($authToken: String!) {
    boardSub(authToken: $authToken) {
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
