const { v4: uuidv4 } = require("uuid");

const cats = [
  {
    id: "7d613b93-fa3e-4ef3-a9d2-e09e5ca6e4e6",
    name: "Meow",
    createdAt: 1727098800585,
    updatedAt: null,
    deleted: false,
  },
  {
    id: "2dc9ce08-d345-4fed-8560-4c6b66fb0836",
    name: "Kitty",
    createdAt: 1727098952739,
    updatedAt: null,
    deleted: false,
  },
];

exports.create = (req, res) => {
  const { name } = req.body;

  const newCat = {
    id: uuidv4(),
    name,
    createdAt: Date.now(),
    updatedAt: null,
    deleted: false,
  };

  cats.push(newCat);

  console.log("Added new cat:", newCat);
  res.status(201).json(newCat);
};

exports.read = (req, res) => {
  const activeCats = cats.filter((cat) => !cat.deleted);
  res.json(activeCats);
};

exports.update = (req, res) => {
  const { id, name } = req.body;

  const cat = cats.find((c) => c.id === id);
  cat.name = name;
  cat.updatedAt = Date.now();

  console.log("Updated:", cat);
  res.json(cat);
};

exports.delete = (req, res) => {
  const id = req.query.id;

  const cat = cats.find((c) => c.id === id);

  cat.deleted = true;
  cat.updatedAt = Date.now();

  console.log("Soft deleted:", id);
  res.json({ message: "Cat soft deleted", id });
};
