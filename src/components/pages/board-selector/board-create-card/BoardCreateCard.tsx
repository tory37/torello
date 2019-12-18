import React from "react";
import {
  Card,
  CardActionArea,
  Typography,
  CardMedia,
  CardContent
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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

const BoardPreview = () => {
  const classes = getStyles(backgroundColor)();

  const openCreatePopup = () => {};

  return (
    <Card className={classes.card}>
      <CardActionArea onClick>
        <CardMedia>
          <div className={classes.previewImage} />
        </CardMedia>
      </CardActionArea>
    </Card>
  );
};

export default BoardPreview;
