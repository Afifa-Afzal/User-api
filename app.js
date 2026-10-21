const express = require("express");
const userRoutes = require("./modules/users/user.routes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

// Middleware: converts incoming JSON body into req.body
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.json({ message: "API is running" });
});

// All user URLs start with /api/users
app.use("/api/users", userRoutes);

// If no route matched
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Error handler must be LAST
app.use(errorHandler);

module.exports = app;