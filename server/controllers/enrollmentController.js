// Enroll Students into Courses
// Prevent Duplicate Enrollments
// View Enrollments by Course
// View All Enrollments
// Unenroll Students
// Show Student Count Per Course

import { Enrollment } from "../models/enrollment.js";
import { Student } from "../models/student.js";
import { Course } from "../models/course.js";

export const enrollStudent = async (req, res) => {
    try {
        const {studentId, courseId} =  req.body;

        const student = await Student.findById(studentId);

        if(!student){
            return res.status(404).json({message: "student not found"})
        
        }

        const course = await Course.findById(courseId);

        if(!course){
            return res.status(404).json({message: "course not found"})
        }

        const existingEnrollment = await Enrollment.findOne({studentId, courseId});
        if(existingEnrollment){
            return res.status(400).json({message: "student already enrolled in this course"})
        }

        const enrollment = await Enrollment.create({studentId, courseId});

        return res.status(201).json({enrollment, message: "student enrolled in course successfully"})
    } catch (error) {
        
    }
}

export const getAllEnrollments = async (req, res) => {
    try {
        const enrollments = await Enrollment.find().populate("studentId", "name email").populate("courseId", "name code credits");

        if(!enrollments){
            return res.status(400).json({message: "no enrollments found"});
        }

        return res.status(200).json({count: enrollments.length, enrollments});

    } catch (error) {
        return res.status(500).json({message: "error in fetching enrollments", error: error.message});
    }
}

export const getEnrollmentsByCourse = async(req, res)=>{
    try {
        const enrollments = await Enrollment.find({ courseId: req.params.courseId })
            .populate("studentId", "studentId name email grade phone address");



        return res.status(200).json({count: enrollments.length, enrollments});

    } catch (error) {
        return res.status(500).json({message: "error in fetching enrollments by course", error: error.message});
    }
}


export const unenrollStudent = async(req, res) => {
    try {
        const {studentId, courseId} = req.body;
        const enrollment = await Enrollment.findOneAndDelete({studentId, courseId})
        if(!enrollment){
            return res.status(404).json({message: "enrollment not found"})
        }
        return res.status(200).json({message: "student unenrolled from course successfully"});
    } catch (error) {
        return res.status(500).json({message: "error in unenrolling student", error: error.message})
    }
}   