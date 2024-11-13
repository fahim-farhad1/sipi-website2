import React from 'react'
import img from '../../assets/Departments/Computer/Department-of-Computer-Science.jpg'
const DepartmentBanner = () => {
  return (
    <div> 
      <img className='w-full h-96 opacity-60 bg-green-600' src={img} alt="" />
      <p className='text-5xl text-center -mt-52 text-black'>Computer</p>
    </div>
  )
}

export default DepartmentBanner
