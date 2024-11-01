import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';




const banners = [
    {
      id: 1,
      image: 'https://i.ibb.co.com/0rqXzZ7/fa8ed7e9-0e83-462f-8c5d-13b06d25cef3.jpg',
      heading: 'Education is the best key success in life',
      description: 'Donec vitae libero non enim placerat eleifend aliquam erat volutpat. Curabitur diam ex, dapibus purus sapien, cursus sed nisl tristique, commodo gravida lectus non.',
    },
    {
      id: 2,
      image: 'https://i.ibb.co.com/LYVqvx4/d758805a-da1d-45b4-bcb7-f95402436087.jpg',
      heading: 'Education is the best key success in life',
      description: 'Donec vitae libero non enim placerat eleifend aliquam erat volutpat. Curabitur diam ex, dapibus purus sapien, cursus sed nisl tristique, commodo gravida lectus non.',
    },
    {
      id: 3,
      image: 'https://i.ibb.co.com/TwPcpMt/8cfa27dc-4377-41a5-870d-22aceef24364.jpg',
      heading: 'Education is the best key success in life',
      description: 'Donec vitae libero non enim placerat eleifend aliquam erat volutpat. Curabitur diam ex, dapibus purus sapien, cursus sed nisl tristique, commodo gravida lectus non.',
    },
  ];
  

export default function BannerSection() {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };



  return (
    <div className='my-3'>
     <Slider {...settings}>
        {banners.map((banner) => (
          <div key={banner.id} className="relative">
            {/* Background Image */}
            <div
              className="w-full h-[500px] lg:h-[600px] bg-cover bg-center"
              style={{
                backgroundImage: `url(${banner.image})`,
              }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-madBlack bg-opacity-60"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col  justify-center  text-white px-6 lg:px-12">
              <div className='w-[70%]'>
              <p className='text-[25px] font-semibold'>Welcome To -</p>
              <p className='text-[35px] font-semibold text-primary'>shyamoli ideal polytechnic institute</p>
              <h2 className="text-[32px] lg:text-5xl font-bold mb-4">{banner.heading}</h2>
              <p className="text-[28px] lg:text-xl mb-6">{banner.description}</p>
              <div className="flex gap-4">
                <button className="bg-primary text-white py-2 px-6 rounded hover:bg-blue-600 transition">
                  Discover More
                </button>
                <button className="bg-gray-800 text-white py-2 px-6 rounded hover:bg-gray-700 transition">
                  Contact Us
                </button>
              </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
