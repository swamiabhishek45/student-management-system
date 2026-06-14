import Header from "@/components/Header";
import ProfilePanel from "@/components/profilepanel/ProfilePanel";
import SidebarMain from "@/components/sidebar/Sidebar";
import StudentCard from "@/components/studentcard/StudentCard";
import { SidebarProvider } from "@/components/ui/sidebar";
// import { Sidebar } from "lucide-react";
import React, { useEffect, useState } from "react";
import { 
  Drawer, 
  DrawerContent,
} from "@/components/ui/drawer";

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);


  const fetchData = async () => {
    try {

      const [studentsRes, enrollmentsRes] = await Promise.all([
        fetch("http://localhost:5000/api/students"),
        fetch("http://localhost:5000/api/enrollments")
      ]);

      const studentsData = await studentsRes.json();
      const enrollmentsData = await enrollmentsRes.json();

      // Combine student details with their enrollment counts and course lists
      const enriched = studentsData.map(student => {
        const studentEnrollments = (enrollmentsData.enrollments || []).filter(
          e => e.studentId && e.studentId._id === student._id
        );
        return {
          ...student,
          courses: studentEnrollments.length,
          coursesList: studentEnrollments.map(e => e.courseId).filter(Boolean)
        };
      });

      setStudents(enriched);

    } catch (err) {
      console.error(err);
    } 
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleViewProfile = (student) => {
    setSelectedStudent(student);
    setIsDrawerOpen(true);
  };


  return (
    <SidebarProvider>
      <div className="flex w-full min-h-screen bg-black text-white">
        {/* sidebar */}

        <SidebarMain />
        <main className="flex-1 p-6 md:p-8 flex flex-col min-w-0">
          {/* header  */}
          <Header />


          {/* content layout  */}
          <div className="mt-6 flex-1">
            
              <div className="w-full">
              <div className="grid gap-6 transition-all duration-300 
                  grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                  {students.map((std) => (
                    <StudentCard key={std.name} student={std} onViewProfile={handleViewProfile} />
                  ))}
                </div>
            </div>
          </div>
        </main>

             {/* profilepanel  */}

              <Drawer open={isDrawerOpen}
                onOpenChange={setIsDrawerOpen}
                direction="right"
              >

              <DrawerContent className="h-full w-[85vw] sm:w-[450px] bg-white border-l border-slate-200">
                  {
                    selectedStudent && (
                      <ProfilePanel 
                        student={selectedStudent}
                        onClose={() => setIsDrawerOpen(false)}
                      />
                    )
                  }
                </DrawerContent>

              </Drawer>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
