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
  CardContent
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useForm from "react-hook-form";
import { useCreateColumnMutation } from "graphql/mutations/createColumn";

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

const ColumnCreate = ({ boardId }: IColumnCreateProps) => {
  const styles = getStyles()();

  const [isCreating, setIsCreating] = useState<boolean>(false);

  const { register, handleSubmit, errors } = useForm();

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
    <CardActions className={styles.column}>
      {!isCreating && (
        <CardActionArea onClick={() => setIsCreating(true)}>
          <Typography className={styles.content} variant="subtitle2">
            <FontAwesomeIcon icon="plus" /> New Column
          </Typography>
        </CardActionArea>
      )}

      {isCreating && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            variant="filled"
            label="Column Name"
            name="title"
            inputRef={register({
              required: "Required",
              maxLength: 20
            })}
          />
          {errors.title && errors.title.message}

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
    </CardActions>
  );
};

export default ColumnCreate;
