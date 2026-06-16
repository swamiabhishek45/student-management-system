import {Student} from "../models/student.js";
import {Enrollment} from "../models/enrollment.js";


export const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find()

        if(!students){
            res.status(404).json({message: "No students found"})
        }

        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({message: "errror in fetching students"})
    }
}

export const getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if(!student){
            res.status(404).json({message: "student not found"})
        }

        res.status(200).json(student)
    } catch (error) {
        res.status(500).json({message: "Error in fetching student"})
    }
}

export const createStudent = async (req, res) => {
    try {
        const { name, email, phone, grade, address } = req.body;

        if(!name || !email || !phone || !grade || !address){
            return res.status(400).json({message: "All fields are required"})
        }

        const existingStudent = await Student.findOne({email});

        if(existingStudent){
            return res.status(400).json({message: "Student with this email already exists"})
        }

        // Auto-generate studentId since it is a required unique field in the schema
        const studentId = "STU" + Date.now();

        // Create the student in MongoDB
        const student = await Student.create({  studentId, name, email, phone, grade, address});
        
        console.log(student);
        res.status(201).json({student, message: "student created successfully!"})
    } catch (error) {

        res.status(500).json({message: "failed to create student", error: error.message})
        
    }
}

export const updateStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(req.params.id, req.body);

        if(!student){
            res.status(404).json({message: "Student not found"});
        }

        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({message: "Error in updating student"})
    }
}

export const deleteStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);

        if(!student){
            return res.status(404).json({message: "Student not found"})
        }

        // Delete all enrollments associated with this student
        await Enrollment.deleteMany({ studentId: req.params.id });

        res.status(200).json({student, message: "student deleted successfully"});
    } catch (error) {
        res.status(500).json({message: "Error in deleting student"})
    }
}
