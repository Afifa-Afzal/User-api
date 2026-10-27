const Category = require("./category.model");

const notFound = () => {
  const err = new Error("Category not found");
  err.status = 404;
  return err;
};

const getCategories = (req, res) => {
  res.status(200).json(Category.getAll());
};

const getCategory = (req, res, next) => {
  const category = Category.getById(Number(req.params.id));
  if (!category) return next(notFound());
  res.status(200).json(category);
};

const createCategory = (req, res) => {
  const category = Category.create(req.body);
  res.status(201).json(category);
};

const updateCategory = (req, res, next) => {
  const category = Category.update(Number(req.params.id), req.body);
  if (!category) return next(notFound());
  res.status(200).json(category);
};

const deleteCategory = (req, res, next) => {
  const deleted = Category.remove(Number(req.params.id));
  if (!deleted) return next(notFound());
  res.status(200).json({ message: "Category deleted" });
};

module.exports = {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};