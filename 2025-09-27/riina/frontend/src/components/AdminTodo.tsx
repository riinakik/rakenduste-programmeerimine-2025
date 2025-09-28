import { Box, List, ListItem, Typography, Stack, Switch } from "@mui/material";
import React, { useEffect, useState } from "react";

type Todo = {
  id: string;
  task: string;
  createdAt: number;
  updatedAt: number | null;
  deleted: boolean;
};

const API_BASE = "http://localhost:3000/todo";

const AdminTodo: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchTodos = async () => {
    const response = await fetch(`${API_BASE}/admin/todo`);
    const data = await response.json();
    setTodos(data);
  };

  const toggleDeleted = async (id: string) => {
    const response = await fetch(
      `${API_BASE}/admin/todo/${id}/toggle-deleted`,
      {
        method: "PATCH",
      }
    );
    if (response.ok) {
      fetchTodos();
    } else {
      console.warn("Failed to toggle");
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <Box>
      <Typography variant="h3" sx={{ mb: 2 }}>
        Admin panel
      </Typography>
      <List>
        {todos.map((todo) => (
          <ListItem
            key={todo.id}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Stack>
              <Typography variant="body1">{todo.task}</Typography>
              <Typography variant="caption" color="text.secondary">
                Status: {todo.deleted ? "Deleted" : "Active"} • Created:{" "}
                {new Date(todo.createdAt).toLocaleString()}
              </Typography>
            </Stack>

            <Switch
              checked={!todo.deleted}
              onChange={() => toggleDeleted(todo.id)}
              color="success"
              inputProps={{ "aria-label": "Toggle active/deleted" }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default AdminTodo;
