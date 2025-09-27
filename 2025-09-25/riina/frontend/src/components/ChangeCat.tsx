import { Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

type ChangeCatsProps = {
  id: string;
  currentName: string;
  fetchCats: () => void;
};

const ChangeCat: React.FC<ChangeCatsProps> = ({
  id,
  currentName,
  fetchCats,
}) => {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(currentName);
  const [error, setError] = useState("");

  const handleSave = async () => {
    try {
      const response = await fetch("http://localhost:3000/cats", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, name }),
      });

      if (response.ok) {
        console.log("Cat updated");
        setError("");
        setEditing(false);
        fetchCats();
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
        color="primary"
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
        value={name}
        onChange={(e) => setName(e.target.value)}
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
          setName(currentName);
          setError("");
        }}
      >
        Cancel
      </Button>
    </Stack>
  );
};

export default ChangeCat;
