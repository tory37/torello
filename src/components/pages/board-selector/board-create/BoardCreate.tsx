import React, { useState } from "react";
import {
  Backdrop,
  makeStyles,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  TextField,
  Grid,
  LinearProgress
} from "@material-ui/core";
import useForm from "react-hook-form";
import * as yup from "yup";

import StoreContainer from "store";
import { GetBackgroundColors } from "utils/Board";
import ColorPicker from "components/color-picker";
import { useCreateBoardMutation } from "graphql/mutations/createBoard";

const getStyles = (color: string) => {
  return makeStyles({
    backdrop: {
      zIndex: 1000
    },
    card: {
      width: "250px"
    },
    previewImage: {
      backgroundColor: color,
      height: "50px"
    }
  });
};

interface IFormValues {
  title: string;
}

const BoardCreateValidationSchema = yup.object().shape({
  title: yup
    .string()
    .max(20, "20 character max")
    .required()
});

const BoardCreate = () => {
  const colors = GetBackgroundColors();
  const [backgroundColor, setBackgroundColor] = useState<string>(colors[0]);

  const classes = getStyles(backgroundColor)();

  const { isOpen, close } = StoreContainer.useContainer().createModal;

  const { register, handleSubmit, errors } = useForm({
    validationSchema: BoardCreateValidationSchema
  });

  const [create, { loading }] = useCreateBoardMutation(close);

  const onSubmit = (values: any) => {
    create({
      variables: {
        title: values.title,
        backgroundColor
      }
    });
  };

  return (
    <Backdrop open={isOpen} className={classes.backdrop}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card className={classes.card}>
          <CardMedia>
            <div className={classes.previewImage} />
          </CardMedia>
          <CardContent>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <TextField
                  variant="filled"
                  label="Board Name"
                  name="title"
                  size="small"
                  error={errors.title ? true : false}
                  helperText={errors.title ? errors.title.message : ""}
                  inputRef={register}
                />
              </Grid>
              <Grid item>
                <ColorPicker onSetState={setBackgroundColor} />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              type="button"
              onClick={close}
              disabled={loading}
            >
              Cancel
            </Button>
            <Button
              size="small"
              color="primary"
              variant="outlined"
              type="submit"
              disabled={loading}
            >
              Create Board
            </Button>
          </CardActions>
          {loading && <LinearProgress />}
        </Card>
      </form>
    </Backdrop>
  );
};

export default BoardCreate;
