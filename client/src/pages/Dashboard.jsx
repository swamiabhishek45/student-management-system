import Header from "@/components/Header";
import ProfilePanel from "@/components/profilepanel/ProfilePanel";
import SidebarMain from "@/components/sidebar/Sidebar";
import StudentCard from "@/components/studentcard/StudentCard";
import { SidebarProvider } from "@/components/ui/sidebar";
// import { Sidebar } from "lucide-react";
import React, { act, useEffect, useState } from "react";
import { Drawer, DrawerContent } from "@/components/ui/drawer";

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [activeTab, setActiveTab] = useState("dashboard")

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

  useEffect(() => {
    getStudents();
  }, []);

  const handleViewProfile = (student) => {
    setSelectedStudent(student);
    setIsDrawerOpen(true);
  };

  return (
    <SidebarProvider>
      <div className="flex w-full min-h-screen bg-white text-black">
        {/* sidebar */}

        <SidebarMain />
        <main className="flex-1 p-6 ">
          {/* header  */}
          <Header />

          {/* content layout  */}
        <div className="mt-6 flex-1">
            <div className="w-full">
              <div
                className="grid gap-6 transition-all duration-300 
                  grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
              >
                {students.map((std) => (
                  <StudentCard
                    key={std.name}
                    student={std}
                    onViewProfile={handleViewProfile}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* <div className="flex1">

            {activeTab === "dashboard" && (<Dashboard onNavigate={setActiveTab}/>)}
             
          </div> */}

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
