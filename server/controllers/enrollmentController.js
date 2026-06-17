import { Enrollment } from "../models/enrollment.js";
import { Student } from "../models/student.js";
import { Course } from "../models/course.js";

// Enroll Students into Courses (with Duplicate Prevention)
export const enrollStudent = async (req, res) => {
    try {
        const { studentId, courseId } = req.body;
        if (!await Student.exists({ _id: studentId }) || !await Course.exists({ _id: courseId })) {
            return res.status(404).json({ message: "Student or Course not found" });
        }
        if (await Enrollment.exists({ studentId, courseId })) {
            return res.status(400).json({ message: "Student already enrolled in this course" });
        }
        const enrollment = await Enrollment.create({ studentId, courseId });
        res.status(201).json({ enrollment, message: "student enrolled in course successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// View All Enrollments
export const getAllEnrollments = async (req, res) => {
    try {
        const enrollments = await Enrollment.find()
            .populate("studentId", "name email")
            .populate({
                path: "courseId",
                populate: { path: "teacherId", select: "name email subject" }
            });
        res.status(200).json({ count: enrollments.length, enrollments });
    } catch (error) {
        res.status(500).json({ message: "error in fetching enrollments", error: error.message });
    }
};

// View Enrollments by Course (Show Student Count Per Course)
export const getEnrollmentsByCourse = async (req, res) => {
    try {
        const enrollments = await Enrollment.find({ courseId: req.params.courseId })
            .populate("studentId", "studentId name email grade phone address");
        res.status(200).json({ count: enrollments.length, enrollments });
    } catch (error) {
        res.status(500).json({ message: "error in fetching enrollments by course", error: error.message });
    }
};

// Unenroll Students
export const unenrollStudent = async (req, res) => {
    try {
        const { studentId, courseId } = req.body;
        const enrollment = await Enrollment.findOneAndDelete({ studentId, courseId });
        if (!enrollment) {
            return res.status(404).json({ message: "enrollment not found" });
        }
        res.status(200).json({ message: "student unenrolled from course successfully" });
    } catch (error) {
        res.status(500).json({ message: "error in unenrolling student", error: error.message });
    }
};