import mongoose from 'mongoose';


const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true,
        unique: true,
    },
    credits: {
        type: Number,
        required: true
    },
    teacherId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher',
        required: true
    }
}, {timestamps: true});

export const Course = mongoose.model('Course', courseSchema);