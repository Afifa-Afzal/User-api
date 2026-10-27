const users = [];
let nextId = 1;

const findByEmail = (email) =>
  users.find((u) => u.email === email.toLowerCase());

const create = ({ name, email, password }) => {
  const user = { id: nextId++, name, email: email.toLowerCase(), password };
  users.push(user);
  return user;
};

module.exports = { findByEmail, create };