import StudentCard from '@/components/cards/StudentCard';
import React, { useEffect, useState } from 'react';
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import ProfilePanel from "@/components/profilepanel/ProfilePanel";

const StudentPage = ({ students, onViewProfile }) => {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleViewProfile = (student) => {
    if (onViewProfile) {
      onViewProfile(student);
    } else {
      setSelectedStudent(student);
      setIsDrawerOpen(true);
    }
  };

  return (
    <div className="mt-6 flex-1">
      <div className="w-full">
        <div
          className="grid gap-6 transition-all duration-300 
                  grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-items-center md:justify-items-start"
        >
          {students.map((std) => (
            <StudentCard
              key={std.id}
              student={std}
              onViewProfile={handleViewProfile}
            />
          ))}
        </div>
      </div>

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
  );
};

export default StudentPage;