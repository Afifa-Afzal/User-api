const express = require("express");
const categoryRoutes = require("./modules/categories/category.routes");
const courseRoutes = require("./modules/courses/course.routes");
const errorHandler = require("./middlewares/errorHandler");
const authRoutes = require("./modules/auth/auth.routes");

const app = express();

// Middleware: converts incoming JSON body into req.body
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.json({ message: "API is running" });
});


// If no route matched

app.use("/api/auth", authRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/courses", courseRoutes);
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Error handler must be LAST
app.use(errorHandler);

module.exports = app;