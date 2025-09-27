import { Box, List, ListItem, Typography, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import SubmitCat from "./SubmitCat.tsx";
import DeleteCat from "./DeleteCat.tsx";

type Cat = {
  id: string;
  name: string;
  createdAt: number;
  updatedAt: number | null;
  deleted: boolean;
};

const Cats = () => {
  const [cats, setCats] = useState<Cat[]>([]);

  const fetchCats = async () => {
    const response = await fetch("http://localhost:3000/cats");
    const data = await response.json();

    setCats(data);
  };

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <Box>
      <Typography variant="h1">Cats</Typography>
      <SubmitCat fetchCats={fetchCats} />
      <CatsList cats={cats} fetchCats={fetchCats} />
    </Box>
  );
};

type CatsListProps = {
  cats: Cat[];
  fetchCats: () => void;
};

const CatsList: React.FC<CatsListProps> = ({ cats, fetchCats }) => {
  return (
    <List>
      {cats.map((cat) => (
        <ListItem
          key={cat.id}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography>{JSON.stringify(cat)}</Typography>

          <Stack direction="row" spacing={1}>
            <DeleteCat id={cat.id} fetchCats={fetchCats} />
          </Stack>
        </ListItem>
      ))}
    </List>
  );
};

export default Cats;
