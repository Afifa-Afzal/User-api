let categories = [];
let nextId = 1;

const getAll = () => categories;

const getById = (id) => categories.find((c) => c.id === id);

const create = ({ name, description }) => {
  const category = {
    id: nextId++,
    name: name.trim(),
    description: description || "",
  };
  categories.push(category);
  return category;
};

const update = (id, { name, description }) => {
  const category = getById(id);
  if (!category) return null;
  category.name = name.trim();
  category.description = description || "";
  return category;
};

const remove = (id) => {
  const index = categories.findIndex((c) => c.id === id);
  if (index === -1) return false;
  categories.splice(index, 1);
  return true;
};

module.exports = { getAll, getById, create, update, remove };