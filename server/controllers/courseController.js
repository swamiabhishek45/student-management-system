// Create/Edit/Delete Courses
// Course Name, Code, Credits
// Assign/Reassign Teachers
// View Teacher Assignments

import { Course } from "../models/course.js";
import { Teacher } from "../models/teacher.js";

export const createCourse = async (req, res) => {
  try {
    const { teacherId } = req.body;

    const teacher = await Teacher.findById(teacherId);

    if (!teacher) {
      return res.status(404).json({
        success: false,
        message: "Teacher not found",
      });
    }
    const course = await Course.create(req.body);

    return res
      .status(201)
      .json({ success: true, course, message: "course created successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

export const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find().populate(
      "teacherId",
      "name email subject",
    );

    if (!courses) {
      return res.status(404).json({ message: "No courses found" });
    }

    return res.status(200).json(courses);
  } catch (error) {
    return res.status(500).json({ message: "error in fetching courses", error: error.message});
  }
};

export const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id).populate(
      "teacherId",
      "name email subject",
    );

    if (!course) {
      return res.status(404).json({ success: false, message: "Course not found"});
    }

    res.status(200).json(course);
  } catch (error) {
    return res.status(500).json({ message: "error in fetching course", error: error.message});
  }
};
export const updateCourse = async (req, res) => {};
export const deleteCourse = async (req, res) => {};
