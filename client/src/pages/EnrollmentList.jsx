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
    <div>
      {enrollments.length === 0 ? (
        <p className="text-center text-gray-500">No enrollments found</p>
      ) : (
        <div className="overflow-x-auto rounded-lg">
          <Table>
            <TableHeader className="bg-gray-300">
              <TableRow>
                <TableHead>Student Name</TableHead>
                <TableHead>Email Address</TableHead>
                <TableHead>Course Name</TableHead>
                <TableHead>Course Code</TableHead>
                <TableHead className="text-right pr-6">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {enrollments.map((e) => (
                <TableRow key={e._id}>
                  <TableCell>{e.studentId?.name}</TableCell>
                  <TableCell >{e.studentId?.email}</TableCell>
                  <TableCell >{e.courseId?.name}</TableCell>
                  <TableCell >{e.courseId?.code}</TableCell>
                  <TableCell className="text-right pr-6">
                    <Button
                      onClick={() =>
                        onUnenroll(e._id, e.studentId?._id, e.courseId?._id)
                      }
                      variant="destructive"
                      className="cursor-pointer font-semibold"
                    >
                      Unenroll
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}
