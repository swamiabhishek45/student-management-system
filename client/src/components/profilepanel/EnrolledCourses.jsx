import React from 'react';
import { User, Mail } from 'lucide-react';

export default function EnrolledCourses({ courses = [] }) {
  if (courses.length === 0) {
    return <div className="text-center text-slate-400 py-12">No courses enrolled.</div>;
  }

  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-bold text-sm text-slate-800 uppercase">Enrolled Courses ({courses.length})</h4>
      <div className="flex flex-col gap-3">
        {courses.map((course) => {
          if (!course) return null;
          const teacher = course.teacherId || {};
          return (
            <div key={course._id || course.code} className="border rounded-lg p-3 flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <div>
                  <h5 className="font-semibold">{course.name}</h5>
                  <span className="text-xs text-slate-500">{course.code}</span>
                </div>
                <span className="text-xs text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full font-medium">
                  {course.credits} Credits
                </span>
              </div>
              <div className="border-t pt-2 flex flex-col gap-1">
                {teacher.name ? (
                  <>
                    <span className="flex items-center gap-1"><User size={14} /> {teacher.name} ({teacher.subject})</span>
                    {teacher.email && <span className="flex items-center gap-1"><Mail size={12} /> {teacher.email}</span>}
                  </>
                ) : (
                  <span className="italic text-slate-400">No instructor assigned</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
