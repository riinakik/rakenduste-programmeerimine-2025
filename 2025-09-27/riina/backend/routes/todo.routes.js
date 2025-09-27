const express = require("express");
const router = express.Router();

const todoController = require("../controllers/todo.controllers");

const {
  todoRouteMiddleware,
  todoGetRouteMiddleware,
  validateTodoCreate,
  validateTodoUpdate,
  validateTodoDelete,
} = require("../middlewares/todo.middlewares");

router.use(todoRouteMiddleware);

router.get("/", todoGetRouteMiddleware, todoController.read);
router.post("/", validateTodoCreate, todoController.create);
router.put("/", validateTodoUpdate, todoController.update);
router.delete("/", validateTodoDelete, todoController.delete);

module.exports = router;
