import React from "react";

export default function TeacherCard({ teacher }) {
  const { name, image, department, designation} = teacher;



  return (
    <div className="flex my-5 bg-white border mx-3 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            {/* Left Side Image */}
            <div className="w-1/3">
              <img
                src={image}
                className="h-[150px] w-[150px] object-cover p-3"
              />
            </div>

            {/* Right Side Content */}
            <div className="w-2/3 p-6">
              <h3 className="text-xl font-semibold text-primary">{name}</h3>
              <p className="text-gray-600">
                <strong>Designation:</strong> {designation}
              </p>
              <p className="text-gray-600 mt-2">
                {department}
              </p>
            </div>
          </div>
  );
}
