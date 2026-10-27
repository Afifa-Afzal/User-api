const express = require("express");
const controller = require("./course.controller");
const { validateCourse } = require("./course.validation");
const protect = require("../../middlewares/authMiddleware");

const router = express.Router();

router.use(protect);

router.get("/", controller.getCourses);
router.get("/:id", controller.getCourse);
router.post("/", validateCourse, controller.createCourse);
router.put("/:id", validateCourse, controller.updateCourse);
router.delete("/:id", controller.deleteCourse);

module.exports = router;