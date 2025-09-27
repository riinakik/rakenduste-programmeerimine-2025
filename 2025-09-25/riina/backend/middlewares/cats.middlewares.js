const { body, query, validationResult } = require("express-validator");

const catsRouteMiddleware = (req, res, next) => {
  console.log("Time:", Date.now());
  next();
};

const catsGetRouteMiddleware = (req, res, next) => {
  console.log("GET middleware: filtering active cats");
  next();
};

const validateCatCreate = [
  body("name")
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 2 })
    .withMessage("Name must be at least 2 characters long"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

const validateCatUpdate = [
  body("id").notEmpty().withMessage("ID is required"),
  body("name")
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 2 })
    .withMessage("Name must be at least 2 characters long"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

const validateCatDelete = [
  query("id").notEmpty().withMessage("ID is required"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = {
  catsRouteMiddleware,
  catsGetRouteMiddleware,
  validateCatCreate,
  validateCatUpdate,
  validateCatDelete,
};
