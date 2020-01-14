import { GetBoardQueryColumn } from "graphql/queries/getBoard";

export const columnSort = (columns: GetBoardQueryColumn[]) => {
  const newCols = columns.slice(0);

  return newCols.sort((col1, col2) => {
    return col1.position < col2.position
      ? -1
      : col1.position > col2.position
      ? 1
      : 0;
  });
};
