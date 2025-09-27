import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

type SubmitCatProps = {
  fetchCats: () => void;
};

const SubmitCat = ({ fetchCats }: SubmitCatProps) => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const submitCat = async () => {
    try {
      const response = await fetch("http://localhost:3000/cats", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });

      if (response.ok) {
        console.log("Success");
        setName("");
        setError("");
        setTimeout(fetchCats, 100);
      } else {
        const data = await response.json();
        if (data.errors && data.errors.length > 0) {
          setError(data.errors[0].msg);
        } else {
          setError("Something went wrong");
        }
      }
    } catch (error) {
      console.warn(error);
      setError("Network error");
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    submitCat();
  };

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <form onSubmit={handleSubmit}>
        <Stack spacing={1}>
          <TextField
            label="Cat name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            error={!!error}
            helperText={error}
          />
          <Button variant="contained" color="success" type="submit">
            Add
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default SubmitCat;
