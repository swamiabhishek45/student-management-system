import Header from "@/components/Header";
import ProfilePanel from "@/components/ProfilePanel";
import SidebarMain from "@/components/sidebar/Sidebar";
import StudentCard from "@/components/studentcard/StudentCard";
import { SidebarProvider } from "@/components/ui/sidebar";
// import { Sidebar } from "lucide-react";
import React from "react";

const Dashboard = () => {
  const students = [
    { name: "Abhishek", grade: "A", courses: 4, email: "one@123"},
    { name: "Priya", grade: "B", courses: 3, email: "[one@123" },
    { name: "Rahul", grade: "A+", courses: 5, email: "two@123" },
  ];
  return (
    <SidebarProvider>
      <div className="flex w-full min-h-screen bg-black text-white">
        {/* sidebar */}

        <SidebarMain />
        <main className="flex-1 p-6 md:p-8 flex flex-col min-w-0">
          {/* header  */}
          <Header />


          {/* content layout  */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6 flex-1 items-start">

            <div className="lg:col-span-2 xl:col-span-3 flex flex-col justify-between h-full">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

              {students.map((std) => (
                // studentcard
                <StudentCard key={std.name} student={std} />
              ))}
              </div>
            </div>

            {/* profilepanel  */}

            <ProfilePanel />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
