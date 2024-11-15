import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MiddleSectionTitle from '../ReuseableTitle/MiddleSectionTitle';

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
        dots: true, // Show navigation dots
        infinite: true, // Loop the slides
        speed: 500, // Transition speed
        slidesToShow: 1, // Show one slide at a time
        slidesToScroll: 1, // Scroll one slide at a time
        autoplay: true, // Auto scroll through slides
        autoplaySpeed: 3000, // Time in ms between slides
        arrows: true, // Show next/prev arrows
      };
  return (
    <section className="py-12 bg-gray-50">
    <div className="container mx-auto px-6 lg:px-8">
      <MiddleSectionTitle badge="Testimonial" title="Guest Testimonials" />
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="px-4">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition">
              {/* Guest Image */}
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Guest Name */}
              <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>

              {/* Testimonial Content */}
              <p className="text-gray-600">{testimonial.content}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  </section>
  )
}
