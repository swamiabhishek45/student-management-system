TEACHER    
 - create
 - edit
 - delete

COURSE   
 - create
 - edit
 - delete

ENROLLMENT   
 - create
 - edit
 - delete
 - view

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

Admin model:
    - name
    - email
    - password
    - role

## Relationships
student <----> couse

many student can join courses (many-to-many relationship)

student -> enroll -> course

techer -> course


## final presentation
admin

create student
create teacher -> course
create course
create enrollment -> student + course


## JWT Auth
    - sign in
    - sign up
    - logout
    
## Dashboard
    - summary of students, teachers, courses


## UI/UX
    - shandcn
    - tailwind
    - lucide icons

## Admin, teacher, student roles
    - admin: 
        create, 
        update,
        delete, 
        view
    - techer:
        create, 
        update,
        delete,
        view
    - student:
        create, 
        update,
        delete,
        view



/ -> all students
/student/:id -> single student
