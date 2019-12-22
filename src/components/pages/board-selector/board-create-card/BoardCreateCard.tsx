import React from "react";
import {
  Card,
  CardActionArea,
  Typography,
  CardMedia,
  CardContent,
  Grid,
  Container
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { StoreContainer } from "store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const getStyles = () => {
  return makeStyles({
    card: {
      width: "250px",
      height: "150px"
    },
    actionArea: {
      height: "100%"
    }
  });
};

const BoardCreateCard = () => {
  const classes = getStyles()();

  // const { isOpen } = storeHooks.createModal.useIsOpen();
  // const openCloseModal = storeHooks.createModal.useOpenModal();

  const store = StoreContainer.useContainer();

  // const onAddClick = (options: any) => openCloseModal();
  const onAddClick = (options: any) => store.open();

  return (
    <Card className={classes.card}>
      <CardActionArea onClick={onAddClick} className={classes.actionArea}>
        <Grid
          container
          direction="column"
          justify="space-around"
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h6">New Board</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h3">
              <FontAwesomeIcon icon="plus-circle" />
            </Typography>
          </Grid>
          <Grid item>{store.isOpen ? "Open" : "Closed"}</Grid>
        </Grid>
      </CardActionArea>
    </Card>
  );
};

export default BoardCreateCard;
