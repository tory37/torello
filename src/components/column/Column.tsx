import React, { useState } from "react";
import { Grid, Card, Typography, makeStyles } from "@material-ui/core";
import TaskCreate from "components/task-create";
import Task from "components/task";

interface IColumnProps {
  id: string;
  boardId: string;
  title: string;
  position: number;
  tasks: {
    id: string;
    title: string;
    description: string;
    position: number;
  }[];
}

const getStyles = () => {
  return makeStyles({
    column: {
      width: "250px",
      maxHeight: "calc(100vh - 50px)",
      padding: "5px",
      backgroundColor: "#ebecf0",
      overflowY: "auto"
    }
  });
};

const Column = ({ id, boardId, title, tasks }: IColumnProps) => {
  const styles = getStyles()();

  const [expanded, setExpanded] = useState<string | false>(false);

  const handleTaskExpansion = (taskId: string) => (
    event: React.ChangeEvent<{}>,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? taskId : false);
  };

  return (
    <Card className={styles.column}>
      <Grid container direction="column" spacing={1}>
        <Grid item>
          <Typography variant="subtitle2">{title}</Typography>
        </Grid>
        {tasks &&
          tasks.map(task => (
            <Grid item key={task.id}>
              <Task
                title={task.title}
                description={task.description}
                id={task.id}
                isExpanded={expanded === task.id}
                onExpand={handleTaskExpansion(task.id)}
              />
            </Grid>
          ))}
        <Grid item>
          <TaskCreate columnId={id} />
        </Grid>
      </Grid>
    </Card>
  );
};

export default Column;
