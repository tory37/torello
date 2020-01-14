import React, { useCallback, useState } from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
import {
  useGetBoardQuery,
  GetBoardQueryColumn,
  GetBoardQueryResult
} from "graphql/queries/getBoard";
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
  const [columns, setColumns] = useState<GetBoardQueryColumn[]>([]);
  const { loading: isLoading, data } = useGetBoardQuery(
    id,
    (data: GetBoardQueryResult) => {
      if (data && data.board)
        setColumns(
          data.board.columns.sort((col1, col2) => {
            return col1.position < col2.position
              ? -1
              : col1.position > col2.position
              ? 1
              : 0;
          })
        );
    }
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

  const moveColumn = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      console.log(`Indices: drag -> ${dragIndex}, hover -> ${hoverIndex}`);
      const newColumns = columns.slice(0);

      if (columns) {
        const dragColumnIndex = newColumns.findIndex(
          col => (col.position = dragIndex)
        );
        const hoverColumnIndex = newColumns.findIndex(
          col => (col.position = hoverIndex)
        );

        if (dragColumnIndex > -1 && hoverColumnIndex > -1) {
          newColumns[dragColumnIndex].position = hoverIndex;
          newColumns[hoverColumnIndex].position = dragIndex;
        }

        setColumns(newColumns);
      }
    },
    [columns]
  );

  return (
    <Container className={styles.container}>
      {isLoading && <span>Loading...</span>}

      {!isLoading && data && data.board && columns && (
        <Grid className={styles.columns} container spacing={4}>
          {columns.map(column => (
            <Grid item key={column.id}>
              <Column
                id={column.id}
                boardId={data.board.id}
                title={column.title}
                position={column.position}
                tasks={column.tasks}
                moveColumn={moveColumn}
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
