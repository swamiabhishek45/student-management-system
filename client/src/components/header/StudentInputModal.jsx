import React, { useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { createStudent, updateStudent } from '../../api/studentApi';

const StudentInputModal = ({ student, onStudentAdded }) => {

    const [name, setName] = useState(student ? student.name : '');
    const [email, setEmail] = useState(student ? student.email : '');
    const [phone, setPhone] = useState(student ? student.phone : '');
    const [address, setAddress] = useState(student ? student.address : '');
    const [grade, setGrade] = useState(student ? student.grade : '');

    const [error, setError] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!name || !email || !phone || !address || !grade) {
            setError('Please fill in all fields');
            return;
        }

        try {
            if (student && student._id) {
                await updateStudent(student._id, {  name, email, phone, address,grade,
                });
            } else {
                await createStudent({ name,email,phone, address,grade,
                })
            }

            setName('');
            setEmail('');
            setPhone('');
            setAddress('');
            setGrade('');

            if (onStudentAdded) {
                onStudentAdded();
            }
        } catch (err) {
            setError('Failed to connect to the server');
        } 
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 p-2'>

            {error && <p className="text-sm text-red-500 text-center">{error}</p>}

            <Input placeholder="name" value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <Input
                placeholder="email" type="email"
                value={email} onChange={(e) => setEmail(e.target.value)}
            />
            <Input placeholder="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <Input placeholder="address" value={address} onChange={(e) => setAddress(e.target.value)}
            />
            <Input placeholder="grade"
                value={grade} onChange={(e) => setGrade(e.target.value)}
            />

            <Button
                type="submit"
                className="bg-orange-600 hover:bg-orange-700 text-white cursor-pointer"
            >
                Submit
            </Button>
        </form>
    );
};

export default StudentInputModal;