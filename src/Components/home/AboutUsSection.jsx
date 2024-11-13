import React from 'react'

export default function AboutUsSection() {
  return (
    <section className="bg-gray-100 py-12 lg:py-24">
      <div className="container mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:items-start">
        
        {/* Left Side: Image */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <img 
            src="https://www.sipi.edu.bd/img/courses-1.jpg" 
            alt="Our Institute" 
            className="rounded-lg shadow-lg w-full h-[700px] object-cover "
          />
        </div>
        
        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 lg:pl-12">
        <p className='text-primary font-semibold capitalize text-[22px]'>About Us</p>
          <h1 className="text-3xl lg:text-5xl font-bold mb-4 py-5">
          A Station of Engineering Education
          </h1>
          <p className="text-lg text-gray-700 mb-6">
          Welcome to Shyamoli Ideal Polytechnic Institute. With a heartfelt desire to promoting our ideals into the fields of education and research, Shyamoli Ideal Polytechnic Institute is poised to become an instant celebrity in the field of engineering education. Built with the vision of producing the engineering graduates of the new millennium with the dexterity and maturity the nation requires – this endeavor heralds our continued commitment to the people of Bangladesh. It is our expectation that Shyamoli Ideal Polytechnic Institute will bring a new era in the field of diploma engineering education. It will provide the nation and the global economy with a fresh and continuous combination of highly skilled diploma graduates ready and willing to meet and exceed all professional opportunities in all fields of involvement. As we continue to progress to meet the challenges and goals of today, we will maintain our vigil for the challenges of tomorrow. Through this journey Insha-Allah our will and commitment to our cause will remain steadfast.
          </p>
          <button className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}
