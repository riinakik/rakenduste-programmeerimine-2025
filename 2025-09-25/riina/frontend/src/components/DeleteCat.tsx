import { Button } from "@mui/material";

type DeleteCatProps = {
  id: string;
  fetchCats: () => void;
};

const DeleteCat = ({ id, fetchCats }: DeleteCatProps) => {
  const handleDelete = async () => {
    const response = await fetch(`http://localhost:3000/cats?id=${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      console.log("Deleted:", id);
      fetchCats();
    } else {
      console.warn("Failed to delete");
    }
  };

  return (
    <Button variant="contained" color="error" onClick={handleDelete}>
      Delete
    </Button>
  );
};

export default DeleteCat;
