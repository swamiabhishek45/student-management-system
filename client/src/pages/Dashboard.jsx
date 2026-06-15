import Header from "@/components/Header";
import ProfilePanel from "@/components/profilepanel/ProfilePanel";
import SidebarMain from "@/components/sidebar/Sidebar";
import StudentCard from "@/components/studentcard/StudentCard";
import { SidebarProvider } from "@/components/ui/sidebar";
import React, { useEffect, useState } from "react";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import StudentPage from "./StudentPage";
import TeachersPage from "./TechersPage";
import CoursesPage from "./CoursesPage";
import EnrollmentsPage from "./EnrollmentsPage";
import { BookOpen, ClipboardList, User, Users } from "lucide-react";

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");



  const getStudents = async () => {
    try {
      const studentsResponse = await fetch(
        "http://localhost:5000/api/students",
      );
      const studentsData = await studentsResponse.json();

      const enrollmentsResponse = await fetch(
        "http://localhost:5000/api/enrollments",
      );
      const enrollmentsData = await enrollmentsResponse.json();

      const updatedStudents = [];
      studentsData.forEach((student) => {
        const studentEnrollments = enrollmentsData.enrollments.filter(
          (enrollment) => enrollment.studentId?._id === student._id,
        );
        updatedStudents.push({
          ...student,
          courses: studentEnrollments.length,
        });
      });

      setStudents(updatedStudents);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCounts = async () => {
   
  };

  useEffect(() => {
    getStudents();
    fetchCounts();
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
          <Header activeTab={activeTab} />

          {/* content layout  */}
          <div className="mt-6 flex-1">
            {activeTab === "dashboard" && (
        <>
        dashbiard
        </>
            )}

            {activeTab === "students" && (
              <StudentPage onViewProfile={handleViewProfile} />
            )}

            {activeTab === "teachers" && (
              <TeachersPage />
            )}

            {activeTab === "courses" && (
              <CoursesPage />
            )}

            {activeTab === "enrollments" && (
              <EnrollmentsPage />
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
              />
            )}
          </DrawerContent>
        </Drawer>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
