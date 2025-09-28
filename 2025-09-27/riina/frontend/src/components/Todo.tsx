import { Box, List, ListItem, Typography, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import SubmitTodo from "./SubmitTodo.tsx";

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
      <Typography variant="h1">My tasks</Typography>
      <SubmitTodo fetchTodos={fetchTodos} />
      <TodosList todos={todos} />
    </Box>
  );
};

type TodosListProps = {
  todos: Todo[];
};

const TodosList: React.FC<TodosListProps> = ({ todos }) => {
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
              Created: {new Date(todo.createdAt).toLocaleString()}
            </Typography>
          </Stack>
        </ListItem>
      ))}
    </List>
  );
};

export default Todos;
