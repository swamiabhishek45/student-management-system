import mongoose from "mongoose";

const enrollmentSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    enrollDate: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  },
);

// prevent duplicates enrollments

// enrollmentSchema.index({});

export const Enrollment = mongoose.model("Enrollment", enrollmentSchema);
