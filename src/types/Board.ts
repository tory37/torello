import { GetBoardQuery } from "API";

export default interface Board
  extends Omit<Exclude<GetBoardQuery["getBoard"], null>, "__typename"> {}
