const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/config");

const protect = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    const err = new Error("Access denied. No token provided");
    err.status = 401;
    return next(err);
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    const err = new Error("Invalid or expired token");
    err.status = 401;
    next(err);
  }
};

module.exports = protect;