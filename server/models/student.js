import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    studentId: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    grade: {
        type: String,
        required: true,
    },
}, { timestamps: true });

export const Student = mongoose.model('Student', studentSchema);
