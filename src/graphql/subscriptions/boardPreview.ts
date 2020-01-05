import gql from "graphql-tag";

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
  subscription {
    boardSub {
      id
      title
      backgroundColor
      columnCount
      taskCount
    }
  }
`;
