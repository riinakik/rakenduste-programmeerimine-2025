import {
  Box,
  List,
  ListItem,
  Typography,
  Switch,
  Card,
  CardContent,
} from "@mui/material";
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
      <Typography variant="h3" sx={{ mb: 4 }}>
        Admin panel
      </Typography>

      <List sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {todos.map((todo) => (
          <ListItem key={todo.id} disableGutters>
            <Card
              sx={{
                width: "100%",
                borderRadius: 2,
                px: 2,
                py: 1.5,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <CardContent
                sx={{
                  p: 0,
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography variant="body1" fontWeight={600}>
                  {todo.task}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Status: {todo.deleted ? "Deleted" : "Active"} • Created:{" "}
                  {new Date(todo.createdAt).toLocaleString()}
                </Typography>
              </CardContent>

              <Switch
                checked={!todo.deleted}
                onChange={() => toggleDeleted(todo.id)}
                color="success"
                inputProps={{ "aria-label": "Toggle active/deleted" }}
              />
            </Card>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default AdminTodo;
