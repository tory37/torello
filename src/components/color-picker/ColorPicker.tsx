import React from "react";
import { makeStyles, Grid, Fab } from "@material-ui/core";
import { GetBackgroundColors } from "utils/Board";

interface Props {
  onSetState: (color: string) => void;
}

const getStyles = (color: string) => {
  return makeStyles({
    button: {
      backgroundColor: color
    }
  });
};

const ColorPicker = ({ onSetState }: Props) => {
  const colors = GetBackgroundColors();

  return (
    <Grid container spacing={2}>
      {colors.map(color => (
        <Grid item key={color}>
          <Fab
            size="small"
            className={getStyles(color)().button}
            onClick={() => onSetState(color)}
          >
            {" "}
          </Fab>
        </Grid>
      ))}
    </Grid>
  );
};

export default ColorPicker;
