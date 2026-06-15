import {Teacher} from '../models/teacher.js';

export const createTeacher = async (req, res) => {
    try {
        const {name, email, subject} = req.body;
        if (!name || !email || !subject) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        const existingTeacher = await Teacher.findOne({ email });
        if (existingTeacher) {
            return res.status(400).json({ success: false, message: "Teacher Email must be unique" });
        }
    
        const teacher = await Teacher.create({name, email, subject});

        return res.status(201).json({success: true, teacher});
    } catch (error) {
        res.status(500).json({success:false, error: error.message})
    }
}

export const getAllTeachers = async (req, res) => {
    try {
        const teachers = await Teacher.find();

        return res.status(200).json({success: true, teachers})
    } catch (error) {
        return res.status(500).json({success: false, error: error.message})
    }
}

export const getTeacherById = async(req, res) => {
    try {
        const {id} = req.params;
        const teacher = await Teacher.findById(id);

        if(!teacher){
            return res.status(404).json({success: false, message:"Teacher not found"})
        }

        return res.status(200).json({success: true, teacher})
    } catch (error) {
        res.status(500).json({success:false, error: error.message})
    }
}

export const updateTeacher = async (req, res) => {
    try {
        const {id} = req.params;
        const {name, email, subject} = req.body;

        const teacher = await Teacher.findByIdAndUpdate(id, {name, email, subject}, { new: true });
        
        if(!teacher){
            return res.status(404).json({success: false, message:"teacher not found"})
        }

        return res.status(200).json({success: true, teacher});
    } catch (error) {
        res.status(500).json({success:false, error: error.message})
    }
}

export const deleteTeacher = async (req, res) => {
    try {
        const {id} = req.params;
        const teacher = await Teacher.findByIdAndDelete(id);

        if(!teacher){
            return res.status(404).json({success: false, message:"teacher not found"})
        }

        return res.status(200).json({success: true, teacher, message: "teacher deleted successfully"});
    } catch (error) {
        res.status(500).json({success: false, error: error.message});
    }
}
