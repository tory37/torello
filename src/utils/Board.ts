import Board from "types/Board";

export const getColumnCount = (board: Board) => {
  return board.columns && board.columns.items ? board.columns.items.length : 0;
};

export const getTaskCount = (board: Board) => {
  return board.columns && board.columns.items
    ? board.columns.items
        .map(column =>
          column && column.tasks && column.tasks.items
            ? (column.tasks.items.length as number)
            : 0
        )
        .reduce(sumTaskCountReducer, 0)
    : 0;
};

const sumTaskCountReducer = (total: number, count: number) => {
  return (total += count);
};

export const GetBackgroundColors = () => {
  return ["yellow", "red", "blue", "orange", "purple", "green"];
};
