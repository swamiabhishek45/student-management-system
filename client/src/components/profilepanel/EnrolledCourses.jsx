import React from 'react';

export default function EnrolledCourses({ courses = [] }) {
  return (
    <div className="flex flex-col gap-3 border-t border-slate-100 pt-6 mt-2">
      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
        Enrolled Courses ({courses.length})
      </h4>
      
      <ol className="flex flex-col gap-3 text-sm text-slate-600 pl-1">
        {courses.map((course, index) => (
          <li key={course.code} className="flex gap-2">
            <span className="font-semibold text-slate-400">{index + 1}.</span>
            <span>{course.name} ({course.code})</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
