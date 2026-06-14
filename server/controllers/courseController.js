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
export const updateCourse = async (req, res) => {
    try {
        const {teacherId} = req.body;

        if(teacherId){
            const teacher = await Teacher.findById(teacherId);
            if(!teacher){
                return res.status(404).json({success: false, message: "Teacher not found"})
            }
        
        }

        const course = await Course.findByIdAndUpdate(req.params.id, req.body);

        if(!course){
          return res.status(404).json({message: "Course not found"});  
        }

        return res.status(200).json({course, message: "course updated successfully"});
    } catch (error) {
        res.status(500).json({message: "error in updating course", error: error.message})
    }
};
export const deleteCourse = async (req, res) => {
    try {
        const course  = await Course.findOneAndDelete(req.params.id);

        if (!course){
            return res.status(404).json({message: "course not found"})
        }

        res.status(200).json({message: "course deleted successfully"})
    } catch (error) {
        res.status(500).json({message: "error in deleting course", error: error.message})
    }
};


// view teacher assignments

export const getCoursesByTeacher = async(req,res) => {
    try {
        const courses = await Course.find({teacherId: req.params.teacherId}).populate("teacherId", "name email subject");


        return res.status(200).json({count: course.length, courses})
    } catch (error) {
        return res.status(500).json({message: "error in fetching courses", error: error.message})
    }
}