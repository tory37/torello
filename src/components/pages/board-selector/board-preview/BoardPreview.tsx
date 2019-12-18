import React from "react";
import {
  Card,
  CardActionArea,
  Typography,
  CardMedia,
  CardContent
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

type BoardPreviewProps = {
  title: string;
  columnCount: number;
  taskCount: number;
  backgroundColor: string;
  isCreate: boolean;
};

const getStyles = (color: string) => {
  return makeStyles({
    card: {
      width: "250px"
    },
    previewImage: {
      backgroundColor: color,
      height: "50px"
    }
  });
};

const BoardPreview = ({
  title,
  columnCount,
  taskCount,
  backgroundColor,
  isCreate
}: BoardPreviewProps) => {
  const classes = getStyles(backgroundColor)();

  return (
    <Card className={classes.card}>
      <CardActionArea component={Link} to="/boards">
        <CardMedia>
          <div className={classes.previewImage} />
        </CardMedia>
        <CardContent>
          {!isCreate && (
            <React.Fragment>
              <Typography gutterBottom variant="h6" component="h2">
                {title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Columns: {columnCount}, Cards: {taskCount}
              </Typography>
            </React.Fragment>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BoardPreview;
