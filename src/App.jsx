import React from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { Container, Typography } from "@mui/material";

const App = () => {
  return (
    <Container maxWidth="sm" style={{ marginTop: "2rem" }}>
      <Typography variant="h4" gutterBottom align="center">
        Task Manager
      </Typography>
      <TaskForm />
      <TaskList />
    </Container>
  );
};

export default App;
