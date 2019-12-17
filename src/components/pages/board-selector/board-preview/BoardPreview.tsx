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
  backgroundColor: string;
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

const BoardPreview = ({ title, backgroundColor }: BoardPreviewProps) => {
  const classes = getStyles(backgroundColor)();

  return (
    <Card className={classes.card}>
      <CardActionArea component={Link} to="/boards">
        <CardMedia className={classes.previewImage}></CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Columns: 4, Cards: 20
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BoardPreview;
