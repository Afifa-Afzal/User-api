const express = require("express");
const controller = require("./category.controller");
const { validateCategory } = require("./category.validation");
const protect = require("../../middlewares/authMiddleware");

const router = express.Router();

router.use(protect);

router.get("/", controller.getCategories);
router.get("/:id", controller.getCategory);
router.post("/", validateCategory, controller.createCategory);
router.put("/:id", validateCategory, controller.updateCategory);
router.delete("/:id", controller.deleteCategory);

module.exports = router;