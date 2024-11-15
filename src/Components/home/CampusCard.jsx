import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function CampusCard({campus}) {
    console.log(campus)
    const {campus_image,name,number, location} =campus;
  return (
    <div 
              
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition  relative"
            >
              {/* Campus Image */}
              <img 
                src={campus_image} 
                className="w-full h-48 object-cover"
              />

                <a className='absolute top-[10px] left-[10px]' href="https://maps.google.com/?q=123+Main+Street,+Cityville" target='_blank'><FaMapMarkerAlt className='text-primary hover:text-white text-[40px]' /></a>
              {/* Campus Details */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{name} </h3>
                <p className="text-gray-600 mb-2">Contact: {number}</p>
                <p className="text-gray-500 mb-4">Location: {location}</p>
                <a 
                //   href={campus.website} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block bg-primary text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                >
                  Visit Campus Website
                </a>
                
              </div>
            </div>
  )
}
