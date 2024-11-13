import React from 'react'
import LeftTitle from '../ReuseableTitle/leftTitle'


const campuses = [
  {
    id: 1,
    name: 'Main Campus',
    students: 5000,
    location: 'New York, NY',
    image: 'https://thumbs.dreamstime.com/b/view-building-university-dhaka-bangladesh-october-capital-largest-city-166155464.jpg', // Replace with actual image URL
  },
  {
    id: 2,
    name: 'Downtown Campus',
    students: 3200,
    location: 'Los Angeles, CA',
    image: 'https://www.milestonecollege.com/images/03.jpg',
  },
  {
    id: 3,
    name: 'East Campus',
    students: 2500,
    location: 'Chicago, IL',
    image: 'https://qph.cf2.quoracdn.net/main-qimg-6f8c5989ac9f7d16e22a0e8e818d9ca6-lq',
  },
  {
    id: 4,
    name: 'West Campus',
    students: 1500,
    location: 'San Francisco, CA',
    image: 'https://thumbs.dreamstime.com/b/noakhali-bangladesh-march-science-technology-university-nstu-administrative-building-318863274.jpg',
  },
];

export default function CampusSecton() {
  return (
    <div className='my-5'>
        <LeftTitle title="Check Out Our Campuses!" badge="OUR CAMPUSES" />
        {/* Campuses */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        {campuses.map((campus) => (
          <div 
            key={campus.id} 
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img 
              src={campus.image} 
              alt={campus.name} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl text-primary font-semibold mb-2">{campus.name}</h3>
              <p className="text-gray-600 mb-1">Students: {campus.students}</p>
              <p className="text-gray-500">Location: {campus.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
