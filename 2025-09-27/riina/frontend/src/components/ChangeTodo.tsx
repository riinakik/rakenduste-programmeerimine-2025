import { Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

type ChangeTodoProps = {
  id: string;
  currentTask: string;
  fetchTodos: () => void;
};

const ChangeTodo: React.FC<ChangeTodoProps> = ({
  id,
  currentTask,
  fetchTodos,
}) => {
  const [editing, setEditing] = useState(false);
  const [task, setTask] = useState(currentTask);
  const [error, setError] = useState("");

  const handleSave = async () => {
    try {
      const response = await fetch("http://localhost:3000/todo", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, task }),
      });

      if (response.ok) {
        console.log("Todo updated");
        setError("");
        setEditing(false);
        fetchTodos();
      } else {
        const data = await response.json();
        if (data.errors && data.errors.length > 0) {
          setError(data.errors[0].msg);
        } else {
          setError("Something went wrong");
        }
      }
    } catch (err) {
      console.warn(err);
      setError("Network error");
    }
  };

  if (!editing) {
    return (
      <Button
        variant="contained"
        color="secondary"
        size="small"
        onClick={() => setEditing(true)}
      >
        Change
      </Button>
    );
  }

  return (
    <Stack direction="row" spacing={1}>
      <TextField
        size="small"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        error={!!error}
        helperText={error}
      />
      <Button
        variant="contained"
        color="success"
        size="small"
        onClick={handleSave}
      >
        Save
      </Button>
      <Button
        variant="outlined"
        color="error"
        size="small"
        onClick={() => {
          setEditing(false);
          setTask(currentTask);
          setError("");
        }}
      >
        Cancel
      </Button>
    </Stack>
  );
};

export default ChangeTodo;
