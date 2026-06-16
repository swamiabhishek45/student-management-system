import React, { useState, useEffect } from "react";
import { getEnrollments, deleteEnrollment } from "../api/enrollmentApi";
import EnrollmentInputModal from "../components/header/EnrollmentInputModal";
import EnrollmentList from "./EnrollmentList";

export default function EnrollmentsPage({ students, courses, onRefresh }) {
  const [enrollments, setEnrollments] = useState([]);

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

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Enrollments</h1>
      <EnrollmentInputModal   
        students={students} 
        courses={courses} 
        onEnrollSuccess={handleEnrollSuccess} 
      />
    
        <EnrollmentList 
          enrollments={enrollments} 
          onUnenroll={handleUnenroll} 
        />
      
    </div>
  );
}