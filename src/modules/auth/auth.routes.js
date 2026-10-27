const express = require("express");
const controller = require("./auth.controller");
const { validateRegister, validateLogin } = require("./auth.validation");

const router = express.Router();

router.post("/register", validateRegister, controller.register);
router.post("/login", validateLogin, controller.login);

module.exports = router;