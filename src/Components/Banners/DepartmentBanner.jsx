import React from 'react'
import img from '../../assets/Departments/Computer/Department-of-Computer-Science.jpg'
const DepartmentBanner = () => {
  const image = "https://i.ibb.co.com/0rqXzZ7/fa8ed7e9-0e83-462f-8c5d-13b06d25cef3.jpg"
  const title = "About Us"
  return (
    <section 
      className="relative min-h-[450px] bg-cover bg-center flex items-center justify-center text-center" 
      style={{ 
        backgroundImage: `url(${image})`, // Replace with actual image URL
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>

      {/* Banner Content */}
      <div className="relative z-10 px-4">
        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">{title}</h1>
      </div>

      {/* Badge Button */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
        <a 
          href="#" 
          className="bg-primary text-white py-3 px-6 rounded-badge shadow-lg hover:bg-primary transition"
        >
          <span>Home</span> <span className='px-2'>|</span> <span>Department</span>
        </a>
      </div>
    </section>
  )
}

export default DepartmentBanner
