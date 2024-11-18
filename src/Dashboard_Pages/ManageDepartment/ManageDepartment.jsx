import React from "react";
import Loader from "../../Shared/Loader/Loader";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const ManageDepartment = () => {
  const axiosPublic = useAxiosPublic();

  // Fetch Department Data
  const {
    data: DepartmentData = [],
    isLoading: DepartmentDataIsLoading,
    error: DepartmentDataError,
    refetch,
  } = useQuery({
    queryKey: ["DepartmentData"],
    queryFn: () => axiosPublic.get(`/Department`).then((res) => res.data),
  });

  // Loader State
  if (DepartmentDataIsLoading) {
    return <Loader />;
  }

  // Error State
  if (DepartmentDataError) {
    return (
      <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-300 to-white">
        <p className="text-center text-red-500 font-bold text-3xl mb-8">
          Something went wrong. Please reload the page.
        </p>
        <button
          className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-400 transition duration-300"
          onClick={() => window.location.reload()}
        >
          Reload
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-200 min-h-screen">
      {/* Top Section */}
      <div className="flex justify-between border-b-2 border-gray-600 p-6 items-center">
        <p className="text-3xl font-semibold text-center">Manage Departments</p>
        <button
          className="border border-green-500 px-8 py-3 font-semibold hover:bg-green-500 hover:text-white"
          onClick={() =>
            document.getElementById("Add_Department_Modal").showModal()
          }
        >
          + Add Department
        </button>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {DepartmentData.map((department) => (
          <div
            key={department._id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            {/* Department Image */}
            <img
              src={department.department.department_img}
              alt={department.department.name}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              {/* Department Details */}
              <p className="text-gray-500 font-bold text-2xl mt-2">{department.diploma}</p>

              <div className="mt-4">
                {/*    */}
                <p className="font-bold text-gray-600">Objectives</p>
                <ul className="list-disc pl-6 mt-2 text-sm text-gray-500">
                  {department.objectives.slice(0, 3).map((objective, index) => (
                    <li key={index}>{objective}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                {/* Features */}
                <p className="font-bold text-gray-600">Features</p>
                <ul className="list-disc pl-6 mt-2 text-sm text-gray-500">
                  {department.features.slice(0, 3).map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* More Info Button */}
            <div className="bg-gray-100 p-4 text-center">
              <a
                href={department.department.redirect}
                className="text-blue-500 font-semibold hover:text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageDepartment;
