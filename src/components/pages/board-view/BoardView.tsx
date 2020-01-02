import React from "react";

import { Container, Grid } from "@material-ui/core";
import { useGetBoardQuery } from "graphql/queries/getBoard";
import { useParams } from "react-router-dom";
import Column from "components/column/Column";

type TParams = { id: string };

const BoardView = () => {
  const { id } = useParams<TParams>();
  const { loading: isLoading, error, data, subscribeToMore } = useGetBoardQuery(
    id
  );

  // useEffect(() => {
  //   const unsubscribe = subscribeToMore({
  //     document: BOARD_PREVIEWS_SUBSCRIPTION,
  //     variables: {},
  //     updateQuery: (prev, { subscriptionData }: any) => {
  //       if (!subscriptionData.data) {
  //         return prev;
  //       }

  //       console.log([...prev.boards, subscriptionData.data.board]);

  //       const newState = Object.assign({}, prev, {
  //         boards: [...prev.boards, subscriptionData.data.board]
  //       });

  //       console.log(newState);

  //       return newState;
  //     }
  //   });

  //   return () => unsubscribe();
  // }, [subscribeToMore]);

  return (
    <Container>
      {isLoading && <span>Loading...</span>}

      {!isLoading && data && data.board && data.board.columns && (
        <Grid container spacing={4}>
          {data.board.columns.map(column => (
            <Grid item key={column.id}>
              <Column
                id={column.id}
                title={column.title}
                position={column.position}
                tasks={column.tasks}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default BoardView;
