import React from "react";
import { useDispatch } from "react-redux";
import { toggleTask, deleteTask } from "../redux/taskSlice";
import { ListItem, ListItemText, IconButton, Checkbox } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" onClick={() => dispatch(deleteTask(task.id))}>
          <DeleteIcon />
        </IconButton>
      }
    >
      <Checkbox
        checked={task.completed}
        onChange={() => dispatch(toggleTask(task.id))}
      />
      <ListItemText
        primary={task.text}
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
      />
    </ListItem>
  );
};

export default TaskItem;
