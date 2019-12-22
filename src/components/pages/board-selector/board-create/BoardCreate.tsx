import React from "react";
import { Backdrop, makeStyles, Card, Button } from "@material-ui/core";

import StoreContainer from "store";

const getStyles = () => {
  return makeStyles({
    backdrop: {
      zIndex: 1000
    },
    card: {
      width: "250px"
    }
  });
};

const BoardCreate = () => {
  const classes = getStyles()();

  const { isOpen, close } = StoreContainer.useContainer().createModal;

  return (
    <Backdrop open={isOpen} className={classes.backdrop}>
      <Card className={classes.card}>THIS IS IT</Card>
      <Button variant="contained" color="primary" onClick={close}>
        Close
      </Button>
    </Backdrop>
  );
};

export default BoardCreate;
