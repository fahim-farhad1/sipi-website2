import React from 'react'
import LeftTitle from '../ReuseableTitle/leftTitle'

const galleryImages = [
  'https://via.placeholder.com/300x400', // Replace with actual image URLs
  'https://via.placeholder.com/400x300',
  'https://via.placeholder.com/300x300',
  'https://via.placeholder.com/500x400',
  'https://via.placeholder.com/400x400',
  'https://via.placeholder.com/350x500',
  'https://via.placeholder.com/450x350',
  'https://via.placeholder.com/350x450',
];

export default function LabFacilitiesSection() {
  return (
    <div>
        <LeftTitle badge={"Campus Life"} title={"Our Lab Facilities"} />

        <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        style={{
          gridAutoRows: '200px', // Set a base height for the rows
        }}
      >
        {galleryImages.map((src, index) => (
          <div
            key={index}
            className="relative rounded-lg shadow-md hover:shadow-lg transition"
            style={{
              gridRowEnd: `span ${Math.ceil(Math.random() * 2 + 1)}`, // Randomly span rows
            }}
          >
            <img
              src={src}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
