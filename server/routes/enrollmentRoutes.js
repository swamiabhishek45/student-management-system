import express from "express";

import {
  enrollStudent,
  getAllEnrollments,
  getEnrollmentsByCourse,
  unenrollStudent,
} from "../controllers/enrollmentController.js";

const router = express.Router();

router.post("/", enrollStudent);

router.get("/", getAllEnrollments);

router.get("/course/:courseId", getEnrollmentsByCourse);


router.delete("/:id", unenrollStudent);

export default router;
