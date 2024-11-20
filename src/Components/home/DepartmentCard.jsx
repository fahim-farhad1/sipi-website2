import React from "react";
import { Link } from "react-router-dom";

export default function DepartmentCard({ deparmentData }) {
  const { department, diploma, bteb_thoughts } = deparmentData || {};
  const { department_img, name, redirect } = department || {}; // Fallback to an empty object if `department` is undefined

  return (
    <div 
    // key={deparment._id} 
    className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
  >
    <img 
      src={department_img} 
      className="w-full h-48 object-cover rounded-t-lg" 
    />
    <div className="p-4 text-start">
      <h3 className="text-xl font-semibold mb-2">{diploma}</h3>
      <p className="text-gray-600 mb-4">{bteb_thoughts.slice(0,160)}...</p>
      <Link className="text-primary">
        Read More...
      </Link>
    </div>
  </div>
  )
}
