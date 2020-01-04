import React, { useState, useEffect } from "react";
import {
  Card,
  makeStyles,
  CardActionArea,
  Typography,
  TextField,
  CardActions,
  Button,
  Grid
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import useForm from "react-hook-form";
import { useCreateTaskMutation } from "graphql/mutations/createTask";
import * as yup from "yup";

interface ITaskCreateProps {
  columnId: string;
}

const getStyles = () => {
  return makeStyles({
    task: {
      backgroundColor: "hsla(0,0%,100%)"
    },
    content: {
      margin: "5px"
    },
    actions: {
      paddingLeft: "0"
    }
  });
};

const TaskCreateValidationSchema = yup.object().shape({
  title: yup
    .string()
    .max(20, "20 character max")
    .required(),
  description: yup.string()
});

const TaskCreate = ({ columnId }: ITaskCreateProps) => {
  const [isCreating, setIsCreating] = useState<boolean>(false);

  const styles = getStyles()();

  const { register, handleSubmit, errors } = useForm({
    validationSchema: TaskCreateValidationSchema
  });

  const [create, { loading, error }] = useCreateTaskMutation(() =>
    setIsCreating(false)
  );

  const onSubmit = (values: any) => {
    create({
      variables: {
        title: values.title,
        description: values.description,
        position: 0,
        columnId
      }
    });
  };

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <Card className={styles.task}>
      {!isCreating && (
        <CardActionArea onClick={() => setIsCreating(true)}>
          <Grid container spacing={1} justify="flex-start" alignItems="center">
            <Grid item>
              <AddIcon />
            </Grid>
            <Grid item>
              <Typography className={styles.content} variant="subtitle2">
                New Task
              </Typography>
            </Grid>
          </Grid>
        </CardActionArea>
      )}

      {isCreating && (
        <form className={styles.content} onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={1} direction="column">
            <Grid item>
              <TextField
                variant="filled"
                label="Task Name*"
                name="title"
                size="small"
                error={errors.title ? true : false}
                helperText={errors.title ? errors.title.message : ""}
                inputRef={register}
              />
            </Grid>
            <Grid item>
              <TextField
                variant="filled"
                label="Description"
                name="description"
                size="small"
                multiline={true}
                inputRef={register}
              />
            </Grid>
          </Grid>

          <CardActions className={styles.actions}>
            <Button
              size="small"
              type="button"
              onClick={() => setIsCreating(false)}
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
              Create
            </Button>
          </CardActions>
        </form>
      )}
    </Card>
  );
};

export default TaskCreate;
