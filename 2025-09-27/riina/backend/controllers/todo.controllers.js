const { v4: uuidv4 } = require("uuid");

const todos = [
  {
    id: "7d613b93-fa3e-4ef3-a9d2-e09e5ca6e4e6",
    task: "Learn",
    createdAt: 1727098800585,
    updatedAt: null,
    deleted: false,
  },
  {
    id: "2dc9ce08-d345-4fed-8560-4c6b66fb0836",
    task: "Make coffee",
    createdAt: 1727098952739,
    updatedAt: null,
    deleted: false,
  },
];

exports.__todos = todos;

exports.create = (req, res) => {
  const { task } = req.body;

  const newTodo = {
    id: uuidv4(),
    task,
    createdAt: Date.now(),
    updatedAt: null,
    deleted: false,
  };

  todos.push(newTodo);

  console.log("Added new todo:", newTodo);
  res.status(201).json(newTodo);
};

exports.read = (req, res) => {
  const activeTodos = todos.filter((todo) => !todo.deleted);
  res.json(activeTodos);
};

exports.update = (req, res) => {
  const { id, task } = req.body;

  const todo = todos.find((t) => t.id === id);
  todo.task = task;
  todo.updatedAt = Date.now();

  console.log("Updated:", todo);
  res.json(todo);
};

exports.delete = (req, res) => {
  const id = req.query.id;

  const todo = todos.find((t) => t.id === id);

  todo.deleted = true;
  todo.updatedAt = Date.now();

  console.log("Soft deleted:", id);
  res.json({ message: "Todo soft deleted", id });
};

// --- ADMIN: tagasta KÕIK todo'd (ka deleted) ---
exports.adminList = (req, res) => {
  res.json(todos);
};

// --- ADMIN: toggelda deleted lippu (true <-> false) ---
exports.adminToggleDeleted = (req, res) => {
  const { id } = req.params;
  const todo = todos.find((t) => t.id === id);

  todo.deleted = !todo.deleted;
  todo.updatedAt = Date.now();

  console.log("Admin toggled deleted:", { id: todo.id, deleted: todo.deleted });
  res.json(todo);
};
