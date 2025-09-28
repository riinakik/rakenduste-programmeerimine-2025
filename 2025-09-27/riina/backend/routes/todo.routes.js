const express = require("express");
const router = express.Router();

const todoController = require("../controllers/todo.controllers");

const {
  todoRouteMiddleware,
  todoGetRouteMiddleware,
  validateTodoCreate,
  validateTodoUpdate,
  validateTodoDelete,
  findTodoById,
} = require("../middlewares/todo.middlewares");

// --- Üldine logimismiddleware ---
router.use(todoRouteMiddleware);

// --- Avalikud rajad ---
router.get("/", todoGetRouteMiddleware, todoController.read);
router.post("/", validateTodoCreate, todoController.create);
router.put("/", validateTodoUpdate, todoController.update);
router.delete("/", validateTodoDelete, todoController.delete);

// --- ADMIN rajad ---
// Tagasta kõik todo’d (ka kustutatud)
router.get("/admin/todo", todoController.adminList);

// Toggeldab deleted väärtuse (true - false)
router.patch(
  "/admin/todo/:id/toggle-deleted",
  findTodoById,
  todoController.adminToggleDeleted
);

module.exports = router;
