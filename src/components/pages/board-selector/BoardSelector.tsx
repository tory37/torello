import React from "react";
import StyledBoardSelector from "./BoardSelector.style";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import { listBoards } from "graphql/queries";
import { ListBoardsQuery, ListBoardsQueryVariables } from "API";

import { onCreateBoard } from "graphql/subscriptions";

import { buildSubscription } from "aws-appsync";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BoardPreview from "./board-preview";
import BoardCreateCard from "./board-create-card";
import Board from "types/Board";
import { getColumnCount, getTaskCount } from "utils/Board";
import { hooks } from "store/createModal";
import { Container, Grid } from "@material-ui/core";

const BoardSelector = () => {
  const { loading, data: boards } = useQuery<
    ListBoardsQuery,
    ListBoardsQueryVariables
  >(gql(listBoards), { variables: { limit: 100 } });

  const { isOpen: isCreateModalOpen } = hooks.useIsOpen();
  const openCloseModal = hooks.useOpenModal();

  const onAddClick = (options: any) => openCloseModal();

  return (
    <Container>
      <StyledBoardSelector>
        <div className="header-row">
          <div className="title">Boards</div>
          <button onClick={onAddClick}>
            New <FontAwesomeIcon icon="plus" />
          </button>
        </div>

        <div className="boards">
          {loading && <span>Loading...</span>}
          {!loading && (
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
              spacing={4}
            >
              {boards &&
                boards.listBoards &&
                boards.listBoards.items &&
                boards.listBoards.items.map(board => {
                  return (
                    board && (
                      <Grid item>
                        <BoardPreview
                          title={board.title}
                          key={board.id}
                          backgroundColor={board.backgroundColor}
                          columnCount={getColumnCount(board as Board)}
                          taskCount={getTaskCount(board as Board)}
                          isCreate={false}
                        />
                      </Grid>
                    )
                  );
                })}

              <BoardCreateCard />
            </Grid>
          )}
        </div>
      </StyledBoardSelector>
    </Container>
  );
};

export default BoardSelector;
