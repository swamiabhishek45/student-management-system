import express from "express"

import { createTeacher, deleteTeacher, getAllTeachers, getTeacherById, updateTeacher } from "../controllers/teacherController.js";

const router = express.Router()

router.get("/", getAllTeachers);

router.get("/:id", getTeacherById)

router.post("/", createTeacher);

router.put("/:id", updateTeacher);

router.delete("/:id", deleteTeacher)

export default router;