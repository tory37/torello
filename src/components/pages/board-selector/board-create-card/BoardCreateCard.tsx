import React from "react";
import {
  Card,
  CardActionArea,
  Typography,
  CardMedia,
  CardContent
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const getStyles = () => {
  return makeStyles({
    card: {
      width: "250px"
    },
    previewImage: {
      height: "50px"
    }
  });
};

const BoardCreateCard = () => {
  const classes = getStyles()();

  const openCreatePopup = () => {};

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia>
          <div className={classes.previewImage} />
        </CardMedia>
      </CardActionArea>
    </Card>
  );
};

export default BoardCreateCard;
