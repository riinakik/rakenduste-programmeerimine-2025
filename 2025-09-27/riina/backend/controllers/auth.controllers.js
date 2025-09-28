const jwt = require("jsonwebtoken");

const SECRET_KEY = "mysecretkey"; // Soovitavalt hiljem .env failist

exports.login = (req, res) => {
  const { username, password } = req.body;

  // Lihtne kontroll (reaalses elus tuleks võtta DB-st)
  if (username === "admin" && password === "1234") {
    const user = { username, role: "admin" };

    // Loo JWT
    const token = jwt.sign(user, SECRET_KEY, { expiresIn: "1h" });

    return res.json({ token });
  }

  res.status(401).json({ error: "Invalid credentials" });
};

exports.ping = (req, res) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.status(401).json({ error: "Missing token" });

  const token = authHeader.split(" ")[1]; // Bearer <token>

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: "Invalid token" });
    }

    //Tagasta info
    res.json({ message: "Token valid", user: decoded });
  });
};
