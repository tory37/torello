import React from "react";
import {
  Container,
  Grid,
  Card,
  Typography,
  CardActionArea,
  CardHeader,
  CardContent,
  makeStyles
} from "@material-ui/core";

interface IProps {
  id: string;
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
    },
    task: {
      padding: "5px"
    }
  });
};

const Column = ({ id, title, tasks }: IProps) => {
  const styles = getStyles()();
  return (
    <Card className={styles.column}>
      <Grid container direction="column" spacing={1}>
        <Grid item>
          <Typography variant="subtitle2">{title}</Typography>
        </Grid>
        {tasks &&
          tasks.map(task => (
            <Grid item key={task.id}>
              <Card>
                <CardActionArea>
                  <Typography className={styles.task} variant="subtitle1">
                    {title}
                  </Typography>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Card>
  );
};

export default Column;
