const validateCategory = (req, res, next) => {
  const { name, description } = req.body;

  if (!name || typeof name !== "string" || name.trim() === "") {
    return res.status(400).json({ message: "Category name is required" });
  }

  if (description !== undefined && typeof description !== "string") {
    return res.status(400).json({ message: "Description must be a string" });
  }

  next();
};

module.exports = { validateCategory };