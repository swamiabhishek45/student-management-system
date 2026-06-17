import React, { useState, useEffect } from "react";
import { getEnrollments, deleteEnrollment } from "../api/enrollmentApi";
import EnrollmentInputModal from "../components/header/EnrollmentInputModal";
import EnrollmentList from "./EnrollmentList";

export default function EnrollmentsPage({ students, courses, onRefresh }) {
  const [enrollments, setEnrollments] = useState([]);
  const [selectedCourseId, setSelectedCourseId] = useState("all");

  const fetchEnrollments = async () => {
    try {
      const res = await getEnrollments();
      setEnrollments(res.data.enrollments || []);
    } catch (err) {
      console.error("Failed to load enrollments", err);
    }
  };

  useEffect(() => {
    fetchEnrollments();
  }, []);

  const handleEnrollSuccess = () => {
    fetchEnrollments();
    if (onRefresh) onRefresh();
  };

  const handleUnenroll = async (enrollmentId, studentId, courseId) => {
    try {
      await deleteEnrollment(enrollmentId, { studentId, courseId });
      fetchEnrollments();
      if (onRefresh) onRefresh();
    } catch (err) {
      console.log("Failed to unenroll student");
    }
  };

  // Compute student count per course
  const studentCountPerCourse = {};
  courses.forEach((c) => {
    studentCountPerCourse[c._id] = 0;
  });
  enrollments.forEach((e) => {
    const courseId = e.courseId?._id || e.courseId;
    if (courseId) {
      if (studentCountPerCourse[courseId] !== undefined) {
        studentCountPerCourse[courseId]++;
      } else {
        studentCountPerCourse[courseId] = 1;
      }
    }
  });

  // Filtered enrollments for display
  const filteredEnrollments = selectedCourseId === "all"
    ? enrollments
    : enrollments.filter((e) => (e.courseId?._id || e.courseId) === selectedCourseId);

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Enrollments</h1>
        <p>Enroll students into courses, view course capacities, and view/filter records.</p>
      </div>

      <div className="p-4 rounded-lg border ">
        <h2 className="text-xs font-semibold text-gray-500 uppercase mb-2">Student Count Per Course:</h2>
        <div className="flex flex-wrap gap-2">
          {courses.length === 0 ? (
            <p className="text-gray-500 text-sm">No courses available.</p>
          ) : (
            courses.map((course) => {
              const count = studentCountPerCourse[course._id] || 0;
              return (
                <div key={course._id} className="border px-3 py-1 rounded-full text-xs font-medium">
                  {course.name}: <span className="font-bold text-orange-600">{count}</span>
                </div>
              );
            })
          )}
        </div>
      </div>

      <div className="mb-6">
        <EnrollmentInputModal   
          students={students} 
          courses={courses} 
          onEnrollSuccess={handleEnrollSuccess} 
        />
      </div>

      <div className="border p-4 rounded-lg">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-4 border-b pb-4">
          <h2 className="text-xl font-bold">Enrolled Students</h2>
          
          <div className="flex items-center gap-2">
            <span>Filter by Course:</span>
            <select
              value={selectedCourseId}
              onChange={(e) => setSelectedCourseId(e.target.value)}
              className="border rounded p-1.5"
            >
              <option value="all">All Courses ({enrollments.length})</option>
              {courses.map((c) => {
                const count = studentCountPerCourse[c._id] || 0;
                return (
                  <option key={c._id} value={c._id}>
                    {c.name} ({count})
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <EnrollmentList 
          enrollments={filteredEnrollments} 
          onUnenroll={handleUnenroll} 
        />
      </div>
    </div>
  );
}