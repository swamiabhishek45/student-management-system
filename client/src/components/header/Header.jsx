import React from "react";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "../ui/input";
import StudentInputModal from "./StudentInputModal";
import TeacherInputModal from "./TeacherInputModal";
import CourseInputModal from "./CourseInputModal";
import EnrollmentInputModal from "./EnrollmentInputModal";

const Header = ({ activeTab, onAddClick }) => {
  const getHeaderInfo = () => {
    switch (activeTab) {
      case "dashboard":
        return { title: "Dashboard", buttonText: null };
      case "students":
        return { title: "Students", buttonText: "Add Student" };
      case "courses":
        return { title: "Courses", buttonText: "Add Course" };
      case "teachers":
        return { title: "Teachers", buttonText: "Add Teacher" };
      case "enrollments":
        return { title: "Enrollments", buttonText: "Enroll Student" };
      default:
        return { title: "SMS", buttonText: null };
    }
  };

  const { title, buttonText } = getHeaderInfo();

  return (
    <div className="flex items-center justify-between border-b pb-5">
      <div className="text-2xl font-bold">
        <h1 className="text-2xl font-bold ">{title}</h1>
      </div>

      {buttonText && (
        <Dialog>
          <DialogTrigger>   <Button
            onClick={onAddClick}
            className="bg-orange-600 hover:bg-orange-700 gap-2 flex items-center px-4 py-2 cursor-pointer"
          >
            <Plus className="h-4 w-4" />
            <span>{buttonText}</span>
          </Button></DialogTrigger>


          <DialogContent>
            <DialogHeader className="mt-10">
              {activeTab === "students" && (
                 <StudentInputModal />
              )}

              {activeTab === "teachers" && (
                <TeacherInputModal />
              )}

              {activeTab === "courses" && (
               <CourseInputModal />
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
