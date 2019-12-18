import { GetColumnQuery } from "API";

export default interface Board
  extends Omit<Exclude<GetColumnQuery["getColumn"], null>, "__typename"> {}
