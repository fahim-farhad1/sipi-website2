import React, { useEffect, useState } from 'react';
import MiddleSectionTitle from '../ReuseableTitle/MiddleSectionTitle';

const OurCources = () => {
      const [courses, setCourse] = useState([]);
      useEffect(()=>{
        fetch('https://sipi-server.vercel.app/Department')
        .then(res => res.json())
        .then(data => setCourse(data))
      },[])
    return (
        <div className='my-5'>
            <MiddleSectionTitle badge="COURSES" title="BTEB Affiliated Courses"/>

            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map(course => (
          <div 
            key={course._id} 
            className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <img 
              src={course.department.department_img} 
              alt={course.name} 
              className="w-full h-48 object-cover rounded-t-lg" 
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{course.department.name}</h3>
              <p className="text-gray-600 mb-4">{course.objectives}</p>
              <button className="text-primary py-2 px-4 rounded hover:bg-blue-600 transition-colors">
                Read More
              </button>
            </div>
          </div>
        ))}
            </div>

        </div>
    );
};

export default OurCources;