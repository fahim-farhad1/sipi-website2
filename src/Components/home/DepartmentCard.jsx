import React from "react";

export default function DepartmentCard({ deparmentData }) {
  const { department, diploma, bteb_thoughts } = deparmentData || {};
  const { department_img, name, redirect } = department || {}; // Fallback to an empty object if `department` is undefined

  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      {department_img ? (
        <img
          src={department_img}
          alt={name || "Department"}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      ) : (
        <div className="w-full h-48 bg-gray-200 rounded-t-lg flex items-center justify-center">
          <span className="text-gray-500">No Image</span>
        </div>
      )}
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">
          {diploma || "No Diploma Information"}
        </h3>
        <p className="text-gray-600 mb-4">
          {bteb_thoughts
            ? `${bteb_thoughts.slice(0, 160)}...`
            : "No thoughts available"}
        </p>
        <button className="text-primary py-2 px-4 rounded hover:bg-blue-600 transition-colors">
          Read More
        </button>
      </div>
    </div>
  );
}
