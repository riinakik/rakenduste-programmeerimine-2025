const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

const todoRoutes = require("./routes/todo.routes");
const authRoutes = require("./routes/auth.routes");

app.use(cors());
app.use(express.json());

app.use("/todo", todoRoutes);
app.use("/auth", authRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
