import React from "react";
import {
  Card,
  CardActionArea,
  Typography,
  CardMedia,
  CardContent,
  Grid
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { storeHooks } from "store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "aws-amplify-react";

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

  const { isOpen } = storeHooks.createModal.useIsOpen();
  const openCloseModal = storeHooks.createModal.useOpenModal();

  const onAddClick = (options: any) => openCloseModal();

  return (
    <Card className={classes.card}>
      <CardActionArea onClick={onAddClick} className={classes.actionArea}>
        <Container>
          <Grid
            container
            direction="column"
            justify="space-around"
            alignItems="center"
          >
            <Grid item>
              <Typography variant="h6">Add</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h3">
                <FontAwesomeIcon icon="plus-circle" />
              </Typography>
            </Grid>
            <Grid item>{isOpen ? "Open" : "Closed"}</Grid>
          </Grid>
        </Container>
      </CardActionArea>
    </Card>
  );
};

export default BoardCreateCard;
