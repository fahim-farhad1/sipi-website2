import React, { useEffect, useState } from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa';
import { LiaChalkboardTeacherSolid } from 'react-icons/lia';
import { PiStudent } from 'react-icons/pi';
import { Link } from 'react-router-dom';

export default function AboutUsSection() {
  const [aboutus, setAboutus]=useState([])
  const {History,about,image,student_count,teacher_count}=aboutus;
  useEffect(()=>{
    fetch("https://sipi-server.vercel.app/AboutUS")
    .then(res=>res.json())
    .then(data=>setAboutus(data[0]))
  },[])
  return (
    <section className="bg-gray-100 py-12 lg:py-24">
      <div className="mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:items-start">
        
        {/* Left Side: Image */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <img 
            src="https://www.sipi.edu.bd/img/courses-1.jpg" 
            alt="Our Institute" 
            className="rounded-lg shadow-lg w-full h-auto object-cover "
          />
        </div>
        
        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 lg:pl-12">
        <p className='text-primary font-semibold capitalize text-[22px]'>About Us</p>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 py-5">
          A Station of Engineering Education
          </h1>
          <div className='h-[200px]'>
            <p className="text-lg text-gray-700 mb-6">{about && about?.slice(0,115)}...</p>
            <p className="text-lg text-gray-700 mb-6">{about && History?.slice(0,115)}...</p>
          </div>
          
          {/* count*/}
          <div className='grid md:grid-cols-2 mt-5 gap-3 items-center justify-center md:items-start md:justify-start'>
            {/* card */}
            <div className='w-[250px] h-[250px] bg-primary/10 rounded-md flex justify-center items-center'>
              <div className='w-[80%] h-[80%] bg-primary/70 rounded-full flex flex-col justify-center items-center'>
                <p><PiStudent className='text-white text-[100px]' /></p>
                <p className='text-[28px] font-semibold text-white'>Stdents {student_count}</p>
              </div>
            </div>
            {/* card */}
            <div className='w-[250px] h-[250px] bg-primary/10 rounded-md flex justify-center items-center'>
              <div className='w-[80%] h-[80%] bg-primary/70 rounded-full flex flex-col justify-center items-center'>
                <p><LiaChalkboardTeacherSolid className='text-white text-[100px]' /></p>
                <p className='text-[28px] font-semibold text-white'>Teachers {student_count}</p>
              </div>
            </div>
          </div>
          <Link className="text-primary py-2  rounded transition-colors flex items-center">
              Read More <FaLongArrowAltRight className='ml-2 my-5' />
          </Link>
        </div>
      </div>
    </section>
  )
}
