import { merge } from "lodash";

import * as CreateModal from "./createModal";

export const defaultState = {
  ...CreateModal.state
};

export const typeDefs = [CreateModal.typeDefs];

export const resolvers = {
  Mutation: merge({}, CreateModal.resolvers.mutations)
};
