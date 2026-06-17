import React, { useState } from "react";
import { Button } from "../ui/button";
import { Plus, Menu } from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog"
import StudentInputModal from "./StudentInputModal";
import TeacherInputModal from "./TeacherInputModal";
import CourseInputModal from "./CourseInputModal";
import EnrollmentInputModal from "./EnrollmentInputModal";

const Header = ({ activeTab, onAddClick, onStudentAdded, onTeacherAdded, onCourseAdded, teachers }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { toggleSidebar } = useSidebar();

  const getHeaderInfo = () => {
    switch (activeTab) {
      // case "dashboard":
      //   return { title: "Dashboard", buttonText: null };
      case "students":
        return { title: "Students", buttonText: "Add Student" };
      case "courses":
        return { title: "Courses", buttonText: "Add Course" };
      case "teachers":
        return { title: "Teachers", buttonText: "Add Teacher" };
      case "enrollments":
        return { title: "Enrollments"};
      default:
        return { title: "SMS", buttonText: null };
    }
  };

  const { title, buttonText } = getHeaderInfo();

  return (
    <div className="flex items-center justify-between border-b pb-5">
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden cursor-pointer -ml-2"
          onClick={toggleSidebar}
        >
          <Menu className="h-6 w-6 text-slate-700" />
          {/* <span className="sr-only">Toggle Menu</span> */}
        </Button>
        <div className="text-2xl font-bold">
          <h1 className="text-2xl font-bold ">{title}</h1>
        </div>
      </div>

      {buttonText && (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button
              onClick={onAddClick}
              className="bg-orange-600 hover:bg-orange-700 gap-2 flex items-center px-4 py-2 cursor-pointer"
            >
              <Plus className="h-4 w-4" />
              <span>{buttonText}</span>
            </Button>
          </DialogTrigger>


          <DialogContent>
            <DialogHeader className="mt-10">
              {activeTab === "students" && (
                <StudentInputModal
                  onStudentAdded={() => {
                    setIsOpen(false);
                    if (onStudentAdded) onStudentAdded();
                  }}
                />
              )}

              {activeTab === "teachers" && (
                <TeacherInputModal
                  onTeacherAdd={() => {setIsOpen(false); 
                    if (onTeacherAdded) onTeacherAdded();
                  }}
                />
              )}

              {activeTab === "courses" && (
                <CourseInputModal
                  teachers={teachers}
                  onCourseSaved={() => {
                    setIsOpen(false);
                    if (onCourseAdded) onCourseAdded();
                  }}
                />
              )}

              {activeTab === "enrollments" && (
               <EnrollmentInputModal />
              )}
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Header;
