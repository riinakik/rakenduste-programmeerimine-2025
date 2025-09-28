import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

type SubmitTodoProps = {
  fetchTodos: () => void;
};

const SubmitTodo = ({ fetchTodos }: SubmitTodoProps) => {
  const [task, setTask] = useState("");
  const [error, setError] = useState("");

  const submitTodo = async () => {
    try {
      const response = await fetch("http://localhost:3000/todo", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ task }),
      });

      if (response.ok) {
        setTask("");
        setError("");
        setTimeout(fetchTodos, 100);
      } else {
        const data = await response.json();
        if (data.errors && data.errors.length > 0) {
          setError(data.errors[0].msg);
        } else {
          setError("Something went wrong");
        }
      }
    } catch (error) {
      console.warn(error);
      setError("Network error");
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    submitTodo();
  };

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <form onSubmit={handleSubmit}>
        <Stack spacing={1}>
          <TextField
            label="Task description"
            value={task}
            onChange={(event) => setTask(event.target.value)}
            error={!!error}
            helperText={error}
          />
          <Button variant="contained" color="success" type="submit">
            Add
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default SubmitTodo;
