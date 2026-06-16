import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { createTeacher, updateTeacher } from '../../api/teacherApi'

const TeacherInputModal = ({ techer, onTeacherAdd }) => {
    const [name, setName] = useState(techer ? techer.name : '');
    const [email, setEmail] = useState(techer ? techer.email : '');
    const [subject, setSubject] = useState(techer ? techer.subject : '');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name.trim() || !email.trim() || !subject.trim()) {
            setError('All fields are required.');
            return;
        }
        setError('');

        try {
            if (techer && techer._id) {
                await updateTeacher(techer._id, { name, email, subject });
            } else {
                await createTeacher({ name, email, subject });
            }

            setName('');
            setEmail('');
            setSubject('');

            if (onTeacherAdd) {
                onTeacherAdd();
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to save teacher');
            console.log('Failed to connect to the server');
        }
    }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-2">
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            <Input placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
            <Input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />

            {/* TODO: Assign a teacher a course */}
            <Button className="bg-orange-600 hover:bg-orange-700 cursor-pointer">submit</Button>
        </form>
    )
}

export default TeacherInputModal