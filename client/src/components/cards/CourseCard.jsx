import React from 'react'
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';

const CourseCard = ({ courses, onEdit, onDelete }) => {
    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {courses && courses.map((course) => (
                <Card
                    key={course._id}
                    className="w-full"
                >
                    <CardContent className="p-6">
                        <div className="mb-4">
                            <h3 className="text-xl font-bold">{course.name}</h3>
                            <p className="text-gray-500 text-sm">
                                {course.code}
                            </p>
                        </div>

                        {course.teacherId && (
                            <div>
                                Instructor: <span>{course.teacherId.name}</span>
                            </div>
                        )}

                        <div className="flex justify-between items-center pt-4 border-t mb-4">
                            <span className=" ">
                                Course Credits
                            </span>

                            <span className="rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold text-orange-600">
                                {course.credits}
                            </span>
                        </div>

                        <div className="flex justify-center gap-3">
                            <Button 
                                onClick={() => onEdit && onEdit(course)}
                                variant="outline" 
                                className="cursor-pointer"
                            >
                                Edit
                            </Button>
                            <Button 
                                variant="destructive" 
                                onClick={() => onDelete && onDelete(course._id)}
                                className="bg-red-600 hover:bg-red-700 text-white cursor-pointer"
                            >
                                Delete
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

export default CourseCard
