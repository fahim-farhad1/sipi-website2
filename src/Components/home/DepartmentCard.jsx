import React from 'react'

export default function DepartmentCard({deparmentData}) {
    const {department,diploma,bteb_thoughts}=deparmentData
    console.log(deparmentData)
    const {department_img,name,redirect}= department
  return (
    <div 
    // key={deparment._id} 
    className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
  >
    <img
      src={department_img}
      className="w-full h-48 object-cover rounded-t-lg" 
    />
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">{diploma}</h3>
      <p className="text-gray-600 mb-4">{bteb_thoughts.slice(0,160)}...</p>
      <button className="text-primary py-2 px-4 rounded hover:bg-blue-600 transition-colors">
        Read More
      </button>
    </div>
  </div>
  )
}
