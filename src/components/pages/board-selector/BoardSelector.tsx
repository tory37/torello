import React, { useEffect } from "react";
import StyledBoardSelector from "./BoardSelector.style";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import { listBoards, getTask } from "graphql/queries";
import { ListBoardsQuery, ListBoardsQueryVariables } from "API";

import { onCreateBoard } from "graphql/subscriptions";

import { buildSubscription } from "aws-appsync";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BoardPreview from "./board-preview";
import BoardCreateCard from "./board-create-card";
import Board from "types/Board";
import { getColumnCount, getTaskCount } from "utils/Board";

const BoardSelector = () => {
  const { loading, data, subscribeToMore } = useQuery<
    ListBoardsQuery,
    ListBoardsQueryVariables
  >(gql(listBoards), { variables: { limit: 100 } });

  return (
    <StyledBoardSelector>
      <div className="header-row">
        <div className="title">Boards</div>
        <button>
          New <FontAwesomeIcon icon="plus" />
        </button>
      </div>

      <div className="boards">
        {loading && <span>Loading...</span>}
        {!loading && (
          <React.Fragment>
            {data &&
              data.listBoards &&
              data.listBoards.items &&
              data.listBoards.items.map(board => {
                return (
                  board && (
                    <BoardPreview
                      title={board.title}
                      key={board.id}
                      backgroundColor={board.backgroundColor}
                      columnCount={getColumnCount(board as Board)}
                      taskCount={getTaskCount(board as Board)}
                      isCreate={false}
                    />
                  )
                );
              })}

            <BoardCreateCard />
          </React.Fragment>
        )}
      </div>
    </StyledBoardSelector>
  );
};

export default BoardSelector;
