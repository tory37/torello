import React, { useEffect } from "react";
import StyledBoardSelector from "./BoardSelector.style";
import OnMount from "components/on-mount";

import BoardPreview from "./board-preview";
import BoardCreateCard from "./board-create-card";
import { Container, Grid } from "@material-ui/core";
import BoardCreate from "./board-create/BoardCreate";
import { useListBoardPreviewsQuery } from "graphql/queries/listBoardPreviews";

const BoardSelector = () => {
  const { loading, data, subscribeToMore } = useListBoardPreviewsQuery();

  return (
    <Container>
      <StyledBoardSelector>
        <div className="header-row">
          <div className="title">Boards</div>
        </div>

        <div className="boards">
          {loading && <span>Loading...</span>}
          {!loading && (
            <React.Fragment>
              {/* <OnMount
                onEffect={() => {
                  console.log("Subscribing to more");
                  const sub = buildSubscription({
                    query: gql(onCreateBoard),
                    variables: {
                      owner:
                    }
                  },
                    gql(listBoards)
                  );
                  console.log(sub);
                  return subscribeToMore(sub);
                }}
              /> */}
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
