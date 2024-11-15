import React from 'react'

export default function WhyChoseUs() {
  return (
    <section className="bg-gray-100 py-12 lg:py-24">
    <div className="container mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:items-start">
      
      {/* Left Side: Image */}
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0 bg">
      <p className='text-primary font-semibold capitalize text-[22px]'>Why Choose Us</p>
        <h1 className="text-3xl lg:text-5xl font-bold mb-4 py-5">
        Why You Should Start Diploma Education with Us?
        </h1>
        <p className="text-lg text-gray-700 mb-6">
        At SIPI, we are committed to providing an exceptional diploma education experience that sets you on the path to success. When you choose us, you're choosing more than just an education; you're choosing a journey towards personal and professional growth. Here's why we stand out
        </p>
        <button className="bg-primary text-white py-3 px-6 rounded-lg hover:bg-white hover:text-primary transition">
          Learn More
        </button>
      </div>
      
      {/* Right Side: Content */}
      <div className="w-full lg:w-1/2 lg:pl-12">
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
