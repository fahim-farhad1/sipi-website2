import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; // Import slick-carousel CSS
import 'slick-carousel/slick/slick-theme.css'; // Import slick-carousel theme CSS
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MiddleSectionTitle from '../ReuseableTitle/MiddleSectionTitle';
import { Link } from 'react-router-dom';

// Replace with your actual guest testimonials data
const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    content: 'This event was truly amazing, and the organization was top-notch. I look forward to participating again!',
    image: 'https://i.ibb.co.com/nB5RGzv/Default.jpg', // Replace with actual image URL
  },
  {
    id: 2,
    name: 'Jane Smith',
    content: 'A memorable experience with fantastic people. The venue was beautiful and the atmosphere was incredible.',
    image: 'https://i.ibb.co.com/nB5RGzv/Default.jpg',
  },
  {
    id: 3,
    name: 'Michael Brown',
    content: 'I was honored to be a part of this event. Great discussions, networking, and overall a wonderful time!',
    image: 'https://i.ibb.co.com/nB5RGzv/Default.jpg',
  },
  {
    id: 4,
    name: 'Emily White',
    content: 'An unforgettable experience that I will cherish for years. Well-organized and lots of fun!',
    image: 'https://i.ibb.co.com/nB5RGzv/Default.jpg',
  },
];
export default function GuestTestimonialSection() {
  const settings = {
    autoplay: true, // Auto scroll through slides
    autoplaySpeed: 1000, // Time in ms between slides
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };
  return (
    <section className="py-12 bg-gray-50">
    <div className=" mx-auto px-6 lg:px-8">
      <MiddleSectionTitle badge="Testimonial" title="Guest Testimonials" />
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="px-4 py-5">
            <div className="flex items-center rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition md:w-[370px] md:h-[200px]">
              <div className='flex  items-center'>
              {/* Guest Image */}
              <div className="w-[40%] flex flex-col items-center justify-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className=" object-cover w-[60px] h-[60px] mb-2 rounded-full border-2 border-primary"
                />
              {/* Guest Name */}
              <h3 className="text-[18px] font-semibold text-primary">{testimonial.name}</h3>
              <p className="text-sm m-0 p-0 text-primary">perents</p>
              </div>

              {/* massge */}
              <div className='w-[60%] border-l-2 border-primary'>{/* Testimonial Content */}
              <div className='pl-2 text-start'>
                <p className="text-gray-600 text-sm text-start">{testimonial.content.slice(0,70)}</p>
                <Link className='text-primary'>Read more</Link>
              </div>
              </div>

              </div>

            </div>
          </div>
        ))}
      </Slider>
    </div>
  </section>
  )
}
