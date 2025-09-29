import {
  Box,
  List,
  ListItem,
  Typography,
  Stack,
  Card,
  CardContent,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SubmitTodo from "./SubmitTodo.tsx";
import DeleteTodo from "./DeleteTodo.tsx";
import ChangeTodo from "./ChangeTodo.tsx";

type Todo = {
  id: string;
  task: string;
  createdAt: number;
  updatedAt: number | null;
  deleted: boolean;
};

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchTodos = async () => {
    const response = await fetch("http://localhost:3000/todo");
    const data = await response.json();
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <Box>
      <Typography variant="h3" sx={{ mb: 4 }}>
        My tasks
      </Typography>

      <Box sx={{ mb: 6 }}>
        <SubmitTodo fetchTodos={fetchTodos} />
      </Box>

      <TodosList todos={todos} fetchTodos={fetchTodos} />
    </Box>
  );
};

type TodosListProps = {
  todos: Todo[];
  fetchTodos: () => void;
};

const TodosList: React.FC<TodosListProps> = ({ todos, fetchTodos }) => {
  return (
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
            {/* Vasak pool – tekst */}
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
                Created: {new Date(todo.createdAt).toLocaleString()}
              </Typography>
            </CardContent>

            {/* Parem pool – nupud */}
            <Stack direction="row" spacing={2}>
              <DeleteTodo id={todo.id} fetchTodos={fetchTodos} />
              <ChangeTodo
                id={todo.id}
                currentTask={todo.task}
                fetchTodos={fetchTodos}
              />
            </Stack>
          </Card>
        </ListItem>
      ))}
    </List>
  );
};

export default Todos;
