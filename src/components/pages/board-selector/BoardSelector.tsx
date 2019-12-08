import * as React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import { listBoards } from "graphql/queries";
import { ListBoardsQuery, ListBoardsQueryVariables } from "API";

import OnMount from "components/on-mount";
import { onCreateBoard } from "graphql/subscriptions";

import StyledBoardSelector from "./BoardSelector.style";
import { buildSubscription } from "aws-appsync";
import { Button } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BoardSelector = () => {
  const { loading, data, subscribeToMore } = useQuery<
    ListBoardsQuery,
    ListBoardsQueryVariables
  >(gql(listBoards), { variables: { limit: 100 } });

  return (
    <StyledBoardSelector>
      <div className="header-row">
        <div className="title">Boards</div>
        <Button>
          New <FontAwesomeIcon icon="plus" />
        </Button>
      </div>

      <div className="boards">
        <OnMount
          onEffect={() => {
            return subscribeToMore(
              buildSubscription(gql(onCreateBoard), gql(listBoards))
            );
          }}
        />
        {loading && <span>Loading...</span>}
        {!loading &&
          data &&
          data.listBoards &&
          data.listBoards.items &&
          data.listBoards.items.map(board => <span>{board!.title}</span>)}
      </div>
    </StyledBoardSelector>
  );
};

export default BoardSelector;
