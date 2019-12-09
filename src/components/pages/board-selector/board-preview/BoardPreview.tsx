import React from "react";
import StyledBoardPreview from "./BoardPreview.style";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";

type BoardPreviewProps = {
  title: string;
  backgroundColor: string;
};

const getStyles = (color: string) => {
  return makeStyles({
    card: {
      width: "300px",
      backgroundColor: color
    }
  });
};

const BoardPreview = ({ title, backgroundColor }: BoardPreviewProps) => {
  const classes = getStyles(backgroundColor)();

  return (
    <Card className={classes.card}>
      <span>{title}</span>
    </Card>
  );
};

export default BoardPreview;
