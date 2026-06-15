import React, { useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const StudentInputModal = ({ onStudentAdded }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [grade, setGrade] = useState('');

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');


        if (!name || !email || !phone || !address || !grade) {
            setError('Please fill in all fields');
            return;
        }

        setLoading(true);

        try {
            const response = await axios.post("http://localhost:5000/api/students", {
                name,
                email,
                phone,
                address,
                grade,
            });

            const data = await response.json();

            if (response.ok) {
                setName('')
                setEmail('');
                setPhone('')
                setAddress('')
                setGrade('');

                if (onStudentAdded) {
                    onStudentAdded();
                }
            } else {
                setError(data.message || 'Something went wrong');
            }
        } catch (err) {
            setError('Failed to connect to the server');
        }
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 p-2'>
            <h3 className="text-lg font-bold text-slate-800 text-center">Add Student</h3>

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