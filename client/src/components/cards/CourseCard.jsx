import React from 'react'
import { Card, CardContent } from '../ui/card';

const CourseCard = ({ courses }) => {
    console.log(courses);

    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {courses.map((course) => (
                <Card
                    key={course._id}
                    className=""
                >
                    <CardContent className="p-6">
                        <div className="mb-4">
                            <h3 className="text-xl font-bold">{course.name}</h3>
                            <p className="text-muted-foreground text-sm">
                                {course.code}
                            </p>
                        </div>

                        <div className="flex justify-between items-center pt-4 border-t">
                            <span className="text-sm text-muted-foreground">
                                Course Credits
                            </span>

                            <span className="rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold text-orange-600">
                                {course.credits}
                            </span>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

export default CourseCard