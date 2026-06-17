import React, { useState } from "react";
import { enrollStudent } from "../../api/enrollmentApi";
import { Button } from "../ui/button";

export default function EnrollmentInputModal({ students, courses, onEnrollSuccess }) {
  const [studentId, setStudentId] = useState("");
  const [courseId, setCourseId] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!studentId || !courseId) {
      setError("Please select both student and course.");
      return;
    }
    try {
      setError("");
      setSuccess("");
      await enrollStudent({ studentId, courseId });
      setSuccess("Enrolled successfully!");

      setStudentId("");

      setCourseId("");
      onEnrollSuccess();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to enroll student.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4 rounded mb-6 max-w-md bg-white">
      <h2 className="text-xl font-bold mb-4">New Enrollment</h2>
      {error && <div className="text-red-500 mb-2">{error}</div>}
      {success && <div className="text-green-500 mb-2">{success}</div>}

      <div className="mb-4">
        <label className="block mb-1 font-medium">Student</label>
        <select value={studentId} onChange={(e) => setStudentId(e.target.value)} className="border p-2 rounded w-full">
          <option>Select Student</option>
          {students.map((s) => (
            <option key={s._id} value={s._id}>{s.name}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Course</label>
        <select onChange={(e) => setCourseId(e.target.value)} className="border p-2 rounded w-full" value={courseId} >
          <option>Select Course</option>
          {courses.map((c) => (
            <option key={c._id} value={c._id}>{c.name}</option>
          ))}
        </select>
      </div>

      <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white cursor-pointer">
        Submit
      </Button>
    </form>
  );
}

