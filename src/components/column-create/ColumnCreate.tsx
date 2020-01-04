import React, { useState } from "react";
import {
  makeStyles,
  Typography,
  Card,
  CardActionArea,
  TextField,
  CardActions,
  Button,
  Container,
  CardContent,
  Grid
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useForm from "react-hook-form";
import { useCreateColumnMutation } from "graphql/mutations/createColumn";
import * as yup from "yup";

interface IColumnCreateProps {
  boardId: string;
}

const getStyles = () => {
  return makeStyles({
    column: {
      width: "250px",
      backgroundColor: "hsla(0,0%,100%,.24)",
      color: "white"
    },
    content: {
      margin: "5px"
    },
    container: {
      paddingTop: "4px"
    },
    actions: {
      paddingLeft: "0"
    },
    createButton: {
      color: "white",
      borderColor: "white"
    },
    cancelButton: {
      color: "white"
    }
  });
};

const ColumnCreateValidationSchema = yup.object().shape({
  title: yup
    .string()
    .max(20, "20 character max")
    .required()
});

const ColumnCreate = ({ boardId }: IColumnCreateProps) => {
  const styles = getStyles()();

  const [isCreating, setIsCreating] = useState<boolean>(false);

  const { register, handleSubmit, errors } = useForm({
    validationSchema: ColumnCreateValidationSchema
  });

  const [create, { loading, error }] = useCreateColumnMutation(() =>
    setIsCreating(false)
  );

  const onSubmit = (values: any) => {
    create({
      variables: {
        title: values.title,
        position: 0,
        boardId
      }
    });
  };

  return (
    <Card className={styles.column}>
      {!isCreating && (
        <CardActionArea onClick={() => setIsCreating(true)}>
          <Grid container spacing={1} justify="flex-start" alignItems="center">
            <Grid item>
              <AddIcon />
            </Grid>
            <Grid item>
              <Typography className={styles.content} variant="subtitle2">
                New Column
              </Typography>
            </Grid>
          </Grid>
        </CardActionArea>
      )}

      {isCreating && (
        <form className={styles.content} onSubmit={handleSubmit(onSubmit)}>
          <TextField
            variant="filled"
            label="Column Name"
            name="title"
            size="small"
            error={errors.title ? true : false}
            helperText={errors.title ? errors.title.message : ""}
            inputRef={register}
          />

          <CardActions className={styles.actions}>
            <Button
              size="small"
              type="button"
              onClick={() => setIsCreating(false)}
              disabled={loading}
              className={styles.cancelButton}
            >
              Cancel
            </Button>
            <Button
              size="small"
              color="primary"
              variant="outlined"
              type="submit"
              disabled={loading}
              className={styles.createButton}
            >
              Create
            </Button>
          </CardActions>
        </form>
      )}
    </Card>
  );
};

export default ColumnCreate;
