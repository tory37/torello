import React from "react";
import {
  Typography,
  makeStyles,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

interface ITaskProps {
  title: string;
  description: string;
  id: string;
  isExpanded: boolean;
  onExpand: (event: React.ChangeEvent<{}>, isExpanded: boolean) => void;
}

const getStyles = () => {
  return makeStyles({
    task: {
      padding: "5px"
    }
  });
};

const Task = ({ title, description, id, isExpanded, onExpand }: ITaskProps) => {
  const styles = getStyles()();

  return (
    <ExpansionPanel expanded={isExpanded} onChange={onExpand}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${id}-content`}
        id={id}
      >
        <Typography variant="subtitle2">{title}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography variant="body2">
          {description || "(no description)"}
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default Task;
