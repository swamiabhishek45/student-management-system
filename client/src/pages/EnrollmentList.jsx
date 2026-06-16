import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export default function EnrollmentList({ enrollments, onUnenroll }) {
  return (
    <div className="border p-4 rounded">
      <h2 className="text-xl font-bold mb-4">Enrolled Students</h2>
      {enrollments.length === 0 ? (
        <p>No enrollments found.</p>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Course Name</TableHead>
              <TableHead>Course Code</TableHead>
              <TableHead>Enroll/Unroll</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {enrollments.map((e) => (
              <TableRow key={e._id}>
                <TableCell>{e.studentId?.name}</TableCell>
                <TableCell>{e.studentId?.email}</TableCell>
                <TableCell>{e.courseId?.name}</TableCell>
                <TableCell>{e.courseId?.code}</TableCell>
                <TableCell>
                  <Button
                    onClick={() => onUnenroll(e._id, e.studentId?._id, e.courseId?._id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-sm cursor-pointer"
                  >
                    Unenroll
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
