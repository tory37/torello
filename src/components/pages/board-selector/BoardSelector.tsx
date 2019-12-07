import * as React from "react";
import { Query } from "react-apollo";
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
  return (
    <StyledBoardSelector>
      <div className="header-row">
        <div className="title">Boards</div>
        <Button>
          New <FontAwesomeIcon icon="plus" />
        </Button>
      </div>
      <Query<ListBoardsQuery, ListBoardsQueryVariables>
        query={gql(listBoards)}
        variables={{ limit: 100 }}
      >
        {({ data, loading, subscribeToMore }) => {
          if (loading || !data || !data.listBoards || !data.listBoards.items) {
            return null;
          }

          return (
            <div className="boards">
              <OnMount
                onEffect={() => {
                  return subscribeToMore(
                    buildSubscription(gql(onCreateBoard), gql(listBoards))
                  );
                }}
              />
              {data.listBoards.items.map(board => (
                <span>{board!.title}</span>
              ))}
            </div>
          );
        }}
      </Query>
    </StyledBoardSelector>
  );
};

export default BoardSelector;
