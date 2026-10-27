const Course = require("./course.model");
const Category = require("../categories/category.model");

const notFound = () => {
  const err = new Error("Course not found");
  err.status = 404;
  return err;
};

const invalidCategory = () => {
  const err = new Error("Category does not exist");
  err.status = 400;
  return err;
};

const getCourses = (req, res) => {
  res.status(200).json(Course.getAll());
};

const getCourse = (req, res, next) => {
  const course = Course.getById(Number(req.params.id));
  if (!course) return next(notFound());
  res.status(200).json(course);
};

const createCourse = (req, res, next) => {
  if (!Category.getById(req.body.categoryId)) return next(invalidCategory());
  const course = Course.create(req.body);
  res.status(201).json(course);
};

const updateCourse = (req, res, next) => {
  if (!Category.getById(req.body.categoryId)) return next(invalidCategory());
  const course = Course.update(Number(req.params.id), req.body);
  if (!course) return next(notFound());
  res.status(200).json(course);
};

const deleteCourse = (req, res, next) => {
  const deleted = Course.remove(Number(req.params.id));
  if (!deleted) return next(notFound());
  res.status(200).json({ message: "Course deleted" });
};

module.exports = {
  getCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
};