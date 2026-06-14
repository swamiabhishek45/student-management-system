import React from 'react'

const StudentPage = () => {
      const [students, setStudents] = useState([]);

const getStudents = async () => {
    try {
      const studentsResponse = await fetch(
        "http://localhost:5000/api/students",
      );

      const studentsData = await studentsResponse.json();

      const enrollmentsResponse = await fetch(
        "http://localhost:5000/api/enrollments",
      );

      const enrollmentsData = await enrollmentsResponse.json();

      const updatedStudents = [];

      studentsData.forEach((student) => {
        const studentEnrollments = enrollmentsData.enrollments.filter(
          (enrollment) => enrollment.studentId?._id === student._id,
        );

        updatedStudents.push({
          ...student,
          courses: studentEnrollments.length,
        });
      });

      setStudents(updatedStudents);
    } catch (error) {
      console.log(error);
    }
  };

     useEffect(() => {
        getStudents();
      }, []);
  return (
    <div className="mt-6 flex-1">
            <div className="w-full">
              <div
                className="grid gap-6 transition-all duration-300 
                  grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
              >
                {students.map((std) => (
                  <StudentCard
                    key={std.name}
                    student={std}
                    onViewProfile={handleViewProfile}
                  />
                ))}
              </div>
            </div>
          </div>
  )
}

export default StudentPage