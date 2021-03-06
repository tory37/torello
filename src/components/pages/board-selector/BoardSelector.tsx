import React, { useEffect } from "react";
import StyledBoardSelector from "./BoardSelector.style";

import BoardPreview from "./board-preview";
import BoardCreateCard from "./board-create-card";
import { Container, Grid } from "@material-ui/core";
import BoardCreate from "./board-create/BoardCreate";
import { useListBoardPreviewsQuery } from "graphql/queries/listBoardPreviews";
import { BOARD_PREVIEWS_SUBSCRIPTION } from "graphql/subscriptions/boardPreview";
import { authTokenKey } from "utils/auth";

const BoardSelector = () => {
  const {
    loading: isLoading,
    data,
    subscribeToMore
  } = useListBoardPreviewsQuery();

  useEffect(() => {
    const token = localStorage.getItem(authTokenKey);
    const unsubscribe = subscribeToMore({
      document: BOARD_PREVIEWS_SUBSCRIPTION,
      variables: {
        authToken: token ? `Bearer ${token}` : ``
      },
      updateQuery: (prev, { subscriptionData }: any) => {
        if (!subscriptionData.data) {
          return prev;
        }

        const newState = Object.assign({}, prev, {
          boards: [...prev.boards, subscriptionData.data.boardSub]
        });

        return newState;
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <Container>
      <StyledBoardSelector>
        <div className="header-row">
          <div className="title">Boards</div>
        </div>

        <div className="boards">
          {isLoading && <span>Loading...</span>}
          {!isLoading && (
            <React.Fragment>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                spacing={4}
              >
                {data &&
                  data.boards &&
                  data.boards.map(board => {
                    return (
                      board && (
                        <Grid item key={board.id}>
                          <BoardPreview
                            id={board.id}
                            title={board.title}
                            backgroundColor={board.backgroundColor}
                            columnCount={board.columnCount}
                            taskCount={board.taskCount}
                          />
                        </Grid>
                      )
                    );
                  })}
                <Grid item>
                  <BoardCreateCard />
                </Grid>
              </Grid>
            </React.Fragment>
          )}
        </div>
      </StyledBoardSelector>
      <BoardCreate />
    </Container>
  );
};

export default BoardSelector;
