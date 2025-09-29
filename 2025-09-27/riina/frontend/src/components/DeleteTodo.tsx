import { Button } from "@mui/material";

type DeleteTodoProps = {
  id: string;
  fetchTodos: () => void;
};

const DeleteTodo = ({ id, fetchTodos }: DeleteTodoProps) => {
  const handleDelete = async () => {
    const response = await fetch(`http://localhost:3000/todo?id=${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      console.log("Deleted:", id);
      fetchTodos();
    } else {
      console.warn("Failed to delete");
    }
  };

  return (
    <Button
      variant="contained"
      color="error"
      size="small"
      onClick={handleDelete}
    >
      Delete
    </Button>
  );
};

export default DeleteTodo;
