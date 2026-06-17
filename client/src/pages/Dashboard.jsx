import Header from "@/components/header/Header";

import ProfilePanel from "@/components/profilepanel/ProfilePanel";
import SidebarMain from "@/components/sidebar/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

import React, { useEffect, useState } from "react";
import { Drawer, DrawerContent } from "@/components/ui/drawer";

import StudentPage from "./StudentPage";
import TeachersPage from "./TechersPage";
import CoursesPage from "./CoursesPage";
import EnrollmentsPage from "./EnrollmentsPage";

import { getStudents as fetchStudents } from "../api/studentApi";
import { getEnrollments } from "../api/enrollmentApi";
import { getTeachers as fetchTeachers } from "../api/teacherApi";
import { getCourses as fetchCourses } from "../api/courseApi";

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");

  const [teachers, setTeachers] = useState([]);
  const [courses, setCourses] = useState([]);

  const getStudents = async () => {
    try {
      const studentsResponse = await fetchStudents();
      const studentsData = studentsResponse.data;

      const enrollmentsResponse = await getEnrollments();
      const enrollmentsData = enrollmentsResponse.data;

      const updatedStudents = [];
      studentsData.forEach((student) => {
        const studentEnrollments = enrollmentsData.enrollments.filter(
          (enrollment) => enrollment.studentId?._id === student._id,
        );
        updatedStudents.push({
          ...student,
          courses: studentEnrollments.length,
          coursesList: studentEnrollments
            .map((e) => e.courseId)
            .filter(Boolean),
        });
      });

      setStudents(updatedStudents);
    } catch (error) {
      console.log(error);
    }
  };

  const getTeachers = async () => {
    try {
      const response = await fetchTeachers();
      setTeachers(response.data.teachers);
    } catch (error) {
      console.log(error);
    }
  };

  const getCourses = async () => {
    try {
      const response = await fetchCourses();
      setCourses(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const refreshAllData = () => {
    getStudents();
    getTeachers();
    getCourses();
  };

  useEffect(() => {
    refreshAllData();
  }, []);

  const handleViewProfile = (student) => {
    setSelectedStudent(student);
    setIsDrawerOpen(true);
  };

  return (
    <SidebarProvider>
      <div className="flex w-full min-h-screen bg-white text-black">
        {/* sidebar */}

        <SidebarMain activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="flex-1 p-6 ">
          {/* header  */}
          <Header
            activeTab={activeTab}
            onStudentAdded={refreshAllData}
            onTeacherAdded={refreshAllData}
            onCourseAdded={refreshAllData}
            teachers={teachers}
          />

          {/* content layout  */}
          <div className="mt-6 flex-1">
            {activeTab === "dashboard" && <>Dashboard</>}

            {activeTab === "students" && (
              <StudentPage
                students={students}
                onViewProfile={handleViewProfile}
              />
            )}

            {activeTab === "teachers" && (
              <TeachersPage teachers={teachers} onRefresh={refreshAllData} />
            )}

            {activeTab === "courses" && (
              <CoursesPage
                courses={courses}
                onRefresh={refreshAllData}
                teachers={teachers}
              />
            )}

            {activeTab === "enrollments" && (
              <EnrollmentsPage
                students={students}
                courses={courses}
                onRefresh={refreshAllData}
              />
            )}
          </div>
        </main>

        {/* profilepanel  */}

        <Drawer
          open={isDrawerOpen}
          onOpenChange={setIsDrawerOpen}
          direction="right"
        >
          <DrawerContent className="h-full w-[85vw]">
            {selectedStudent && (
              <ProfilePanel
                student={selectedStudent}
                onClose={() => setIsDrawerOpen(false)}
                onRefresh={refreshAllData}
              />
            )}
          </DrawerContent>
        </Drawer>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
