## main fout models

Student:
    name
    email
    phone
    address 
    grade

Teacher:
    name
    email
    subject

Course:
    name
    code
    credits
    teacherId

Enrollment:
    studentId
    courseId
    enrollDate


## Relationships
student <----> couse

many student can join courses

student -> enroll -> course

techer -> course