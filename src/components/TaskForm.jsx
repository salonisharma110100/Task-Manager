import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";
import { TextField, Button, Box } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

const TaskForm = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    dispatch(addTask({ id: uuidv4(), text: task, completed: false }));
    setTask("");
  };

  return (
    <Box component="form" onSubmit={handleSubmit} display="flex" gap={2} mb={3}>
      <TextField
        label="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        fullWidth
      />
      <Button variant="contained" color="primary" type="submit">
        Add
      </Button>
    </Box>
  );
};

export default TaskForm;
