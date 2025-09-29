const jwt = require("jsonwebtoken");

// üks ja sama secret signimiseks ja verifitseerimiseks
const SECRET = process.env.JWT_SECRET || "mysecretkey";

// POST /auth/login  → BODY: { username, password } → tagasi JWT
exports.login = (req, res) => {
  const { username, password } = req.body || {};

  // lihtne demo-kontroll
  if (username !== "admin" || password !== "1234") {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  // README stiilis sign
  const token = jwt.sign({ username, role: "admin" }, SECRET, {
    expiresIn: "1h",
  });
  res.json({ token });
};

// GET /auth/ping  → Authorization: Bearer <token>
exports.ping = (req, res) => {
  const authHeader = req.headers.authorization || "";
  const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : null;
  if (!token) return res.status(401).json({ error: "Missing token" });

  // README stiilis verify (callback)
  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ error: "Invalid token" });
    res.json({ message: "Token valid", user: decoded });
  });
};
