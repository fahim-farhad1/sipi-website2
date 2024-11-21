import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function CampusCard({campusData}) {
  console.log(campusData)
    const {campusImg,campus,googleMapsLink,mobileNumbers,campusAddress,emailAddress} =campusData || {};
    const {address,area,country,postalCode}=campusAddress || {};
  return (
    <div 
              
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition  relative"
            >
              {/* Campus Image */}
              <img 
                src={campusImg} 
                className="w-full h-48 object-cover"
              />

                <a className='absolute top-[10px] left-[10px]' href={googleMapsLink} target='_blank'><FaMapMarkerAlt className='text-primary hover:text-white text-[40px]' /></a>
              {/* Campus Details */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{campus} </h3>
                <p className="text-black">Contact:</p>
                {
                  mobileNumbers?.map(number=><p className='text-gray-600' key={number}>{number}</p>)
                }
                <p>Email: <span className='text-gray-500'>{emailAddress}</span></p>
                <p className="text-gray-500 mb-4"><span className='text-black'>Location:</span> {address} {postalCode} {area} {country}</p>
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
