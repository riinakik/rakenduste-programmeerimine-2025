import { Box, List, ListItem, Typography, Stack, Button } from "@mui/material";
import React, { useEffect, useState } from "react";

type Todo = {
  id: string;
  task: string;
  createdAt: number;
  updatedAt: number | null;
  deleted: boolean;
};

const AdminTodo = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchTodos = async () => {
    const response = await fetch("http://localhost:3000/admin/todo");
    const data = await response.json();
    setTodos(data);
  };

  const toggleDeleted = async (id: string) => {
    const response = await fetch(
      `http://localhost:3000/admin/todo/${id}/toggle-deleted`,
      {
        method: "PATCH",
      }
    );

    if (response.ok) {
      console.log("Toggled deleted:", id);
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
      <Typography variant="h3">Admin panel</Typography>
      <TodosList todos={todos} toggleDeleted={toggleDeleted} />
    </Box>
  );
};

type TodosListProps = {
  todos: Todo[];
  toggleDeleted: (id: string) => void;
};

const TodosList: React.FC<TodosListProps> = ({ todos, toggleDeleted }) => {
  return (
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

          <Stack direction="row" spacing={1}>
            <Button
              variant={todo.deleted ? "contained" : "outlined"}
              color={todo.deleted ? "success" : "warning"}
              size="small"
              onClick={() => toggleDeleted(todo.id)}
            >
              {todo.deleted ? "Restore" : "Soft-delete"}
            </Button>
          </Stack>
        </ListItem>
      ))}
    </List>
  );
};

export default AdminTodo;
