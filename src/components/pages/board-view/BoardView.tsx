import React, { useEffect } from "react";

import { Container, Grid, makeStyles } from "@material-ui/core";
import { useGetBoardQuery } from "graphql/queries/getBoard";
import { useParams } from "react-router-dom";
import Column from "components/column/Column";
import ColumnCreate from "components/column-create/ColumnCreate";

type TParams = { id: string };

const getStyles = (backgroundColor: string) => {
  return makeStyles({
    container: {
      backgroundColor: backgroundColor || "white",
      height: "100%",
      overflowY: "auto"
    },
    columns: {
      flexWrap: "nowrap",
      marginTop: "0"
    }
  });
};

const BoardView = () => {
  const { id } = useParams<TParams>();
  const { loading: isLoading, error, data, subscribeToMore } = useGetBoardQuery(
    id
  );

  let styles = getStyles(data?.board.backgroundColor || "white")();

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
    <Container className={styles.container}>
      {isLoading && <span>Loading...</span>}

      {!isLoading && data && data.board && data.board.columns && (
        <Grid className={styles.columns} container spacing={4}>
          {data.board.columns.map(column => (
            <Grid item key={column.id}>
              <Column
                id={column.id}
                boardId={data.board.id}
                title={column.title}
                position={column.position}
                tasks={column.tasks}
              />
            </Grid>
          ))}
          <Grid item>
            <ColumnCreate boardId={data.board.id} />
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default BoardView;
