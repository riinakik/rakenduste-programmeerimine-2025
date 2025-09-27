const express = require("express");
const router = express.Router();
const catsController = require("../controllers/cats.controller");
const {
  catsRouteMiddleware,
  catsGetRouteMiddleware,
  validateCatCreate,
  validateCatUpdate,
  validateCatDelete,
} = require("../middlewares/cats.middlewares");

router.use(catsRouteMiddleware);

router.get("/", catsGetRouteMiddleware, catsController.read);
router.post("/", validateCatCreate, catsController.create);
router.put("/", validateCatUpdate, catsController.update);
router.delete("/", validateCatDelete, catsController.delete);

module.exports = router;
