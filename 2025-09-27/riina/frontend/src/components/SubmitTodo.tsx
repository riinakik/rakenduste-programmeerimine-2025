import { Box, TextField, Button, Stack } from "@mui/material";
import React, { useState } from "react";

type SubmitTodoProps = {
  fetchTodos: () => void;
};

const SubmitTodo: React.FC<SubmitTodoProps> = ({ fetchTodos }) => {
  const [task, setTask] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!task.trim()) return;

    await fetch("http://localhost:3000/todo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ task }),
    });

    setTask("");
    fetchTodos();
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Stack spacing={2} alignItems="center">
        <TextField
          label="Task description"
          variant="outlined"
          fullWidth
          value={task}
          onChange={(e) => setTask(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-root": {
              backgroundColor: "background.default",
            },
          }}
        />

        <Button
          type="submit"
          variant="contained"
          color="secondary"
          size="large"
          sx={{
            width: "100%",
            py: 1.2,
            fontWeight: "bold",
          }}
        >
          ADD
        </Button>
      </Stack>
    </Box>
  );
};

export default SubmitTodo;
