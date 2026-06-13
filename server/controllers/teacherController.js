import {Teacher} from '../models/teacher.js';

export const createTeacher = async (req, res) => {
    try {
        const {name, email, subject} = req.body;
    
        const teacher = await Teacher.create({name, email, subject});

        return res.status(201).json({success: true, teacher});
    } catch (error) {
        res.josn(500).json({success:false, error: error.message})
    }
}

export const getAllTeachers = async (req, res) => {
    try {
        const teachers = await Teacher.find();

        if (!teachers){
            return res.status(404).json({success:false, message:"No teachers found"})
        }

        return res.status(200).json({success: true, teachers})
    } catch (error) {
        return res.json(500).json({success: false, error: error.message})
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
        res.json(500).json({success:false, error: error.message})
    }
}

export const updateTeacher = async (req, res) => {
    try {
        const {id} = req.params;
        const {name, email, subject} = req.body;

        const teacher = await Teacher.findByIdAndUpdate(id, {name, email, subject});
        
        if(!teacher){
            return res.status(404).json({success: false, message:"teacher not found"})
        }

        return res.status(200).json({success: true, teacher});
    } catch (error) {
        res.json(500).json({success:false, error: error.message})
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
        res.json(500).json({success: false, error: error.message});
    }
}
