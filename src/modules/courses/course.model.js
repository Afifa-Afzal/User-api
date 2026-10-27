let courses = [];
let nextId = 1;

const getAll = () => courses;

const getById = (id) => courses.find((c) => c.id === id);

const create = ({ title, description, price, categoryId }) => {
  const course = {
    id: nextId++,
    title: title.trim(),
    description: description || "",
    price,
    categoryId,
  };
  courses.push(course);
  return course;
};

const update = (id, { title, description, price, categoryId }) => {
  const course = getById(id);
  if (!course) return null;
  course.title = title.trim();
  course.description = description || "";
  course.price = price;
  course.categoryId = categoryId;
  return course;
};

const remove = (id) => {
  const index = courses.findIndex((c) => c.id === id);
  if (index === -1) return false;
  courses.splice(index, 1);
  return true;
};

module.exports = { getAll, getById, create, update, remove };