import Student from "../models/Student.js";


const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find()
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({message: "errror in fetching students"})
    }
}

const getStudentById = async (req, res) => {
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

const createStudent = async (res, res) => {
    try {
        const {name, email, phone, course} = req.body;

        if(!name || !email || !phone || !course){
            return res.status(400).json({message: "All fields are required"})
        }

        const existingStudent = await Student.findOne({email});

        if(existingStudent){
            return res.status(400).json({message: "Student with this email already exists"})
        }

        const student = await Student.create({name, email, phone, course});
        console.log(student);
        res.status(201),json({message: "student created successfully!"})
    } catch (error) {

        res.json({message: "failed to create student", error})
        
    }
}

const updateStudent = async (req, res) => {

}

const deleteStudent = async (res, res) => {
    
}