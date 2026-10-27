const validateCourse = (req, res, next) => {
  const { title, description, price, categoryId } = req.body;

  if (!title || typeof title !== "string" || title.trim() === "") {
    return res.status(400).json({ message: "Course title is required" });
  }

  if (price === undefined || typeof price !== "number" || price < 0) {
    return res
      .status(400)
      .json({ message: "Price is required and must be a number (0 or more)" });
  }

  if (categoryId === undefined || typeof categoryId !== "number") {
    return res
      .status(400)
      .json({ message: "categoryId is required and must be a number" });
  }

  if (description !== undefined && typeof description !== "string") {
    return res.status(400).json({ message: "Description must be a string" });
  }

  next();
};

module.exports = { validateCourse };