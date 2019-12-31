import gql from "graphql-tag";

interface BoardPreview {
  id: number;
  title: string;
  backgroundColor: string;
  columnCount: number;
  taskCount: number;
}

interface BoardPreviewData {
  board: BoardPreview;
}

export const BOARD_PREVIEWS_SUBSCRIPTION = gql`
  subscription {
    board {
      id
      title
      backgroundColor
      columnCount
      taskCount
    }
  }
`;
