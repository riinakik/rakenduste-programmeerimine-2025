const express = require("express");
const app = express();
const port = 3000;

/* app.get("/", (req, res) => {
  res.send("Hello Riina ja world!");
}); */

// CRUD ühe resource'i jaoks
let items = [];
let nextId = 1;

// CREATE – POST
app.use(express.json());
app.post("/api/items", (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: "Name mandatory" });

  const newItem = { id: nextId++, name };
  items.push(newItem);
  res.status(201).json(newItem);
});

// READ – GET
app.get("/api/items", (req, res) => {
  res.json(items);
});

// READ ONE – GET /api/items/:id
app.get("/api/items/:id", (req, res) => {
  const id = Number(req.params.id);
  const found = items.find((i) => i.id === id);
  if (!found) return res.status(404).json({ message: "Not found" });
  res.json(found);
});

// UPDATE – PUT /api/items/:id
app.put("/api/items/:id", (req, res) => {
  const id = Number(req.params.id);
  const idx = items.findIndex((i) => i.id === id);
  if (idx === -1) return res.status(404).json({ message: "Not found" });

  const { name } = req.body;
  if (!name) return res.status(400).json({ message: "Name mandatory" });

  items[idx] = { id, name };
  res.json(items[idx]);
});

// DELETE
app.delete("/api/items/:id", (req, res) => {
  const id = Number(req.params.id);
  const before = items.length;
  items = items.filter((i) => i.id !== id);
  if (items.length === before)
    return res.status(404).json({ message: "Not found" });
  res.status(204).send();
});

// --- Route parameters näited ---

// 1) /users/:userId/books/:bookId
// Näiteks: http://localhost:3000/users/34/books/8989
app.get("/users/:userId/books/:bookId", (req, res) => {
  res.json(req.params);
});

// 2) /flights/:from-:to
// Näiteks: http://localhost:3000/flights/TLL-ARN
app.get("/flights/:from-:to", (req, res) => {
  res.json(req.params);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
