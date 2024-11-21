import React from "react";
import { Link } from "react-router-dom";

export default function DepartmentCard({ deparmentData }) {
  const {  departmentBanner, bteb_thoughts,departmentName} = deparmentData || {};

  return (
    <div 
    // key={deparment._id} 
    className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
  >
    <img 
      src={departmentBanner} 
      className="w-full h-48 object-cover rounded-t-lg" 
    />
    <div className="p-4 text-start">
      <h3 className="text-xl font-semibold mb-2">{departmentName}</h3>
      <p className="text-gray-600 mb-4">{bteb_thoughts.slice(0,160)}...</p>
      <Link className="text-primary">
        Read More...
      </Link>
    </div>
  </div>
  )
}
