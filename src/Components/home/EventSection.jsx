import React from 'react'
import MiddleSectionTitle from '../ReuseableTitle/MiddleSectionTitle';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const events = [
    {
      id: 1,
      title: 'Tech Conference 2024',
      date: 'November 15, 2024',
      image: 'https://i.ibb.co.com/nB5RGzv/Default.jpg', // Replace with actual image URL
    },
    {
      id: 2,
      title: 'Art & Culture Festival',
      date: 'December 5, 2024',
      image: 'https://i.ibb.co.com/nB5RGzv/Default.jpg',
    },
    {
      id: 3,
      title: 'Business Meetup',
      date: 'January 20, 2025',
      image: 'https://i.ibb.co.com/nB5RGzv/Default.jpg',
    },
    {
      id: 4,
      title: 'Science Fair',
      date: 'February 10, 2025',
      image: 'https://i.ibb.co.com/nB5RGzv/Default.jpg',
    },
    {
      id: 5,
      title: 'Music Concert',
      date: 'March 25, 2025',
      image: 'https://i.ibb.co.com/nB5RGzv/Default.jpg',
    },
    {
      id: 6,
      title: 'Literature Workshop',
      date: 'April 12, 2025',
      image: 'https://i.ibb.co.com/nB5RGzv/Default.jpg',
    },
  ];
  

export default function EventSection() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-8">
        <MiddleSectionTitle badge="Events" title="Great Moments Of Campus Life." />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div 
              key={event.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              {/* Event Image */}
              <div className="relative">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-[90%] mx-auto h-64 object-cover rounded-2xl my-3 border-4 border-primary"
                />
                {/* Event Date Overlay */}
                <div className="absolute top-2 left-2 bg-primary text-white text-xs font-semibold px-3 py-1 rounded">
                  {event.date}
                </div>
              </div>

              {/* Event Details */}
              <div className="px-6">
                <h3 className="text-xl font-semibold mb-2 text-primary">{event.title}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis quisquam, veritatis dolorum in vitae quam quibusdam maiores n</p>
                <Link className="text-primary py-2  rounded hover:bg-blue-600 transition-colors flex items-center">
                  Read More <FaLongArrowAltRight className='ml-2 my-5' />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
