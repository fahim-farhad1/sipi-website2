import React, { useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Shared/Loader/Loader";
import { FaEye, FaTrash } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import ViewTeacher from "./ViewTeacher/ViewTeacher";

const ManageTeachers = () => {
  const axiosPublic = useAxiosPublic();
  const [viewTeacher, setViewTeacher] = useState(null);

  // Fetch Teacher Data
  const {
    data: TeachersData = [],
    isLoading: TeachersDataIsLoading,
    error: TeachersDataError,
  } = useQuery({
    queryKey: ["TeachersData"],
    queryFn: () => axiosPublic.get(`/Teachers`).then((res) => res.data),
  });

  // State for query and filters
  const [searchName, setSearchName] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedDesignation, setSelectedDesignation] = useState("");

  // Extract unique departments and designations from data
  const departments = [...new Set(TeachersData.map((t) => t.department))];
  const designations = [...new Set(TeachersData.map((t) => t.designation))];

  // Filter data based on search and dropdown selections
  const filteredTeachers = TeachersData.filter((teacher) => {
    return (
      teacher.name.toLowerCase().includes(searchName.toLowerCase()) &&
      (selectedDepartment ? teacher.department === selectedDepartment : true) &&
      (selectedDesignation ? teacher.designation === selectedDesignation : true)
    );
  });

  // Loader State
  if (TeachersDataIsLoading) {
    return <Loader />;
  }

  // Error State
  if (TeachersDataError) {
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

  const handleViewTeacher = (teacher) => {
    setViewTeacher(teacher);
    document.getElementById("View_Modal_Teacher").showModal();
  };

  return (
    <div className="bg-gray-200 min-h-screen">
      {/* Top Section */}
      <div className="flex justify-between border-b-2 border-gray-600 p-6 items-center">
        <p className="text-3xl font-semibold text-center">Manage Teachers</p>
        <div>
          <button className="border border-green-500 px-8 py-3 font-semibold hover:bg-green-500 hover:text-white">
            + Add Teacher
          </button>
        </div>
      </div>

      {/* Query Section */}
      <div className="p-6 flex flex-col gap-4 sm:flex-row items-center justify-between bg-white shadow-md rounded-lg">
        {/* Search by Name */}
        <input
          type="text"
          placeholder="Search by Name"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          className="border border-gray-400 rounded-lg px-4 py-2 w-full sm:w-1/3 bg-white"
        />

        {/* Filter by Department */}
        <select
          value={selectedDepartment}
          onChange={(e) => setSelectedDepartment(e.target.value)}
          className="border border-gray-400 rounded-lg px-4 py-2 w-full sm:w-1/4 bg-white"
        >
          <option value="">All Departments</option>
          {departments.map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>

        {/* Filter by Designation */}
        <select
          value={selectedDesignation}
          onChange={(e) => setSelectedDesignation(e.target.value)}
          className="border border-gray-400 rounded-lg px-4 py-2 w-full sm:w-1/4 bg-white"
        >
          <option value="">All Designations</option>
          {designations.map((desig) => (
            <option key={desig} value={desig}>
              {desig}
            </option>
          ))}
        </select>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto p-6">
        <table className="table w-full text-left border-collapse">
          {/* Table Header */}
          <thead>
            <tr className="text-black">
              <th className="px-4 py-2">No</th>
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Department</th>
              <th className="px-4 py-2">Designation</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {filteredTeachers.length > 0 ? (
              filteredTeachers.map((teacher, index) => (
                <tr key={teacher._id} className="border-b text-center">
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">
                    <img
                      src={teacher.image}
                      alt={teacher.name}
                      className="w-16 h-16 object-cover rounded-full"
                    />
                  </td>
                  <td className="px-4 py-2">{teacher.name}</td>
                  <td className="px-4 py-2">{teacher.department}</td>
                  <td className="px-4 py-2">{teacher.designation}</td>
                  <td className="px-4 py-2 flex gap-5 text-black">
                    <button
                      className="border-2 border-blue-400 px-4 py-2 rounded-lg hover:bg-blue-400 hover:text-white text-lg"
                      onClick={() => handleViewTeacher(teacher)}
                      title="View"
                    >
                      <FaEye />
                    </button>
                    <button
                      className="border-2 border-yellow-400 px-4 py-2 rounded-lg hover:bg-yellow-400 hover:text-white text-lg"
                      title="Edit"
                    >
                      <CiEdit />
                    </button>
                    <button
                      className="border-2 border-red-400 px-4 py-2 rounded-lg hover:bg-red-400 hover:text-white text-lg"
                      title="Delete"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-4">
                  No teachers found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* View Modal */}
      <dialog id="View_Modal_Teacher" className="modal">
        <ViewTeacher teacherData={viewTeacher}></ViewTeacher>
      </dialog>

      {/* Add new Teacher */}
      <dialog id="Create_New_Salary_Insights" className="modal">
        <ModalAddSalaryInsights refetch={refetch}></ModalAddSalaryInsights>
      </dialog>
    </div>
  );
};

export default ManageTeachers;
