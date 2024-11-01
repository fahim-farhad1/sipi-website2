import React from 'react';
import LeftTitle from '../ReuseableTitle/leftTitle';

const OurCources = () => {
    const courses = [
        { id: 1, title: 'React Basics', description: 'Learn the fundamentals of React.' },
        { id: 2, title: 'Advanced React', description: 'Dive deeper into React with hooks, context, and more.' },
        { id: 3, title: 'JavaScript Essentials', description: 'A must-know guide to JavaScript.' },
        { id: 4, title: 'CSS for Developers', description: 'Master styling with CSS.' },
        { id: 5, title: 'Node.js Introduction', description: 'Introduction to server-side JavaScript.' },
      ];
    return (
        <div className=''>
            <LeftTitle badge="Our Cources" title="Graduate Programs"/>

            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {courses.map(course => (
                <div
                    key={course.id}
                    className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                    <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                    <p className="text-gray-600">{course.description}</p>
                </div>
                ))}
            </div>

        </div>
    );
};

export default OurCources;