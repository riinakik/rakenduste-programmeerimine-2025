const { body, query, validationResult } = require("express-validator");

const todoRouteMiddleware = (req, res, next) => {
  console.log("Time:", Date.now());
  next();
};

const todoGetRouteMiddleware = (req, res, next) => {
  console.log("GET middleware: filtering active todos");
  next();
};

const validateTodoCreate = [
  body("task")
    .notEmpty()
    .withMessage("Task is required")
    .isLength({ min: 2 })
    .withMessage("Task must be at least 2 characters long"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

const validateTodoUpdate = [
  body("id").notEmpty().withMessage("ID is required"),
  body("task")
    .notEmpty()
    .withMessage("Task is required")
    .isLength({ min: 2 })
    .withMessage("Task must be at least 2 characters long"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

const validateTodoDelete = [
  query("id").notEmpty().withMessage("ID is required"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

const { __todos } = require("../controllers/todo.controllers");

// --- ADMIN: leia todo ID järgi ja lisa req.todo ---
const findTodoById = (req, res, next) => {
  const { id } = req.params;
  const todo = __todos.find((t) => t.id === id);

  if (!todo) {
    return res.status(404).json({ error: "Todo not found" });
  }

  req.todo = todo;
  next();
};

module.exports = {
  todoRouteMiddleware,
  todoGetRouteMiddleware,
  validateTodoCreate,
  validateTodoUpdate,
  validateTodoDelete,
  findTodoById,
};
