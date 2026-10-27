const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Auth = require("./auth.model");
const { JWT_SECRET, JWT_EXPIRES_IN } = require("../../config/config");

const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (Auth.findByEmail(email)) {
      const err = new Error("Email already registered");
      err.status = 400;
      return next(err);
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = Auth.create({ name, email, password: hashedPassword });

    res.status(201).json({
      message: "User registered successfully",
      user: { id: user.id, name: user.name, email: user.email },
    });
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const invalid = () => {
      const err = new Error("Invalid email or password");
      err.status = 401;
      return err;
    };

    const user = Auth.findByEmail(email);
    if (!user) return next(invalid());

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return next(invalid());

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });

    res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    next(err);
  }
};

module.exports = { register, login };