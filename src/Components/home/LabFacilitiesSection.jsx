import React from 'react'
import LeftTitle from '../ReuseableTitle/leftTitle'

const images = [
    'https://i.ibb.co.com/nB5RGzv/Default.jpg',
    'https://i.ibb.co.com/nB5RGzv/Default.jpg',
    'https://i.ibb.co.com/nB5RGzv/Default.jpg',
    'https://i.ibb.co.com/nB5RGzv/Default.jpg',
    'https://i.ibb.co.com/nB5RGzv/Default.jpg',
    'https://i.ibb.co.com/nB5RGzv/Default.jpg',
    'https://i.ibb.co.com/nB5RGzv/Default.jpg',
    'https://i.ibb.co.com/nB5RGzv/Default.jpg',
  ];

export default function LabFacilitiesSection() {
  return (
    <div>
        <LeftTitle badge={"Campus Life"} title={"Our Lab Facilities"} />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-5">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <img 
                src={image} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
    </div>
  )
}
