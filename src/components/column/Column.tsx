import React, { useState, useRef, useEffect } from "react";
import { Grid, Card, Typography, makeStyles } from "@material-ui/core";
import TaskCreate from "components/task-create";
import Task from "components/task";
import { useDrop, DropTargetMonitor, useDrag, XYCoord } from "react-dnd";
import ItemTypes from "dnd/ItemTypes";

interface IColumnProps {
  id: string;
  boardId: string;
  title: string;
  index: number;
  tasks: {
    id: string;
    title: string;
    description: string;
    position: number;
  }[];
  moveColumn: (dragIndex: number, hoverIndex: number) => void;
}

interface DragItem {
  index: number;
  id: string;
  type: string;
}

const getStyles = (isDragging: boolean) => {
  return makeStyles({
    column: {
      width: "250px",
      maxHeight: "calc(100vh - 50px)",
      padding: "5px",
      backgroundColor: "#ebecf0",
      overflowY: "auto",
      opacity: isDragging ? 0 : 1
    }
  });
};

const Column = ({
  id,
  boardId,
  title,
  index,
  tasks,
  moveColumn
}: IColumnProps) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleTaskExpansion = (taskId: string) => (
    event: React.ChangeEvent<{}>,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? taskId : false);
  };

  const ref = useRef<HTMLDivElement>(null);
  const [, drop] = useDrop({
    accept: ItemTypes.COLUMN,
    hover(item: DragItem, monitor: DropTargetMonitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current!.getBoundingClientRect();

      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // Determine mouse position
      const clientOffset = monitor.getClientOffset();

      // Get pixels to the top
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      // Time to actually perform the action
      moveColumn(dragIndex, hoverIndex);

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    }
  });

  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.COLUMN, id, index },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging()
    })
  });

  let styles = getStyles(isDragging)();

  drag(drop(ref));

  return (
    <Card className={styles.column} ref={ref}>
      <Grid container direction="column" spacing={1}>
        <Grid item>
          <Typography variant="subtitle2">{title}</Typography>
        </Grid>
        {tasks &&
          tasks.map(task => (
            <Grid item key={task.id}>
              <Task
                title={task.title}
                description={task.description}
                id={task.id}
                isExpanded={expanded === task.id}
                onExpand={handleTaskExpansion(task.id)}
              />
            </Grid>
          ))}
        <Grid item>
          <TaskCreate columnId={id} />
        </Grid>
      </Grid>
    </Card>
  );
};

export default Column;
