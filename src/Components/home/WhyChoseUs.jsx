import React from 'react'
import { GiReactor } from 'react-icons/gi'
import { MdSpaceDashboard } from 'react-icons/md'
import { PiStudent } from 'react-icons/pi'

export default function WhyChoseUs() {
  return (
    <section className="bg-gray-100 py-12 lg:py-24">
    <div className="mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:items-start">
      
      {/* Left Side: Image */}
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0 bg">
      <p className='text-primary font-semibold capitalize text-[22px]'>Why Choose Us</p>
        <h1 className="text-3xl lg:text-5xl font-bold mb-4 py-3">
        Why You Should Start Diploma Education with Us?
        </h1>
        <p className="text-lg text-gray-700 mb-4">
        At SIPI, we are committed to providing an exceptional diploma education experience that sets you on the path to success. When you choose us, you're choosing more than just an education; you're choosing a journey towards personal and professional growth. Here's why we stand out
        </p>
        {/* content */}
        <div>
          {/* item */}
          <div>
            {/* card */}
              <div className='flex my-5'>
                <div>
                <div className='w-[90px] h-[90px] bg-primary/70 rounded-full flex flex-col justify-center items-center'>
                  <p><PiStudent className='text-white text-[60px]' /></p>
                </div>
                </div>
                <div className='ml-2'>
                  <h2 className='text-xl font-semibold text-primary'>Skilled Teachers</h2>
                  <p className='text-gray-700'>Special wedding garments are often worn, and the ceremony is sttimes followed by a wedding reception. Music, poetry, prayers, or readings from.</p>
                </div>
              </div>
            {/* card */}
              <div className='flex my-5'>
                <div>
                <div className='w-[90px] h-[90px] bg-primary/70 rounded-full flex flex-col justify-center items-center'>
                  <p><GiReactor className='text-white text-[60px]' /></p>
                </div>
                </div>
                <div className='ml-2'>
                  <h2 className='text-xl font-semibold text-primary'>Skilled Teachers</h2>
                  <p className='text-gray-700'>Special wedding garments are often worn, and the ceremony is sttimes followed by a wedding reception. Music, poetry, prayers, or readings from.</p>
                </div>
              </div>
            {/* card */}
              <div className='flex my-5'>
                <div>
                <div className='w-[90px] h-[90px] bg-primary/70 rounded-full flex flex-col justify-center items-center'>
                  <p><MdSpaceDashboard className='text-white text-[60px]' /></p>
                </div>
                </div>
                <div className='ml-2'>
                  <h2 className='text-xl font-semibold text-primary'>Affordable Courses</h2>
                  <p className='text-gray-700'>Special wedding garments are often worn, and the ceremony is sttimes followed by a wedding reception. Music, poetry, prayers, or readings from.</p>
                </div>
              </div>
          </div>
        </div>
      </div>
      
      {/* Right Side: Content */}
      <div className="w-full lg:w-1/2 lg:pl-12 hidden md:block">
      <img 
          src="https://www.sipi.edu.bd/img/courses-1.jpg" 
          alt="Our Institute" 
          className="rounded-lg shadow-lg w-full h-[700px] object-cover "
        />
      </div>
    </div>
  </section>
  )
}
