import React, { useState } from "react";
import Loader from "../../Shared/Loader/Loader";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { FaEye, FaTrash } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import ViewDepartment from "./ViewDepartment/ViewDepartment";
import AddDepartment from "./AddDepartment/AddDepartment";
import UpdateDepartment from "./UpdateDepartment/UpdateDepartment";
import Swal from "sweetalert2";

const ManageDepartment = () => {
  const axiosPublic = useAxiosPublic();
  const [viewDepartment, setViewDepartment] = useState(null);
  const [editDepartmentData, setEditDepartmentData] = useState(null);

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

  const handleViewDepartment = (department) => {
    setViewDepartment(department);
    document.getElementById("View_Modal_Department").showModal();
  };

  const handleUpdateDepartment = (department) => {
    setEditDepartmentData(department);
    document.getElementById("Update_Department_Modal").showModal();
  };

  const handleDeleteDepartment = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axiosPublic.delete(`/Department/${id}`);
          refetch(); // Refresh the data after deletion
          Swal.fire(
            "Deleted!",
            "The Department has been deleted successfully.",
            "success"
          );
        } catch (error) {
          console.error("Error deleting Department:", error);
          Swal.fire(
            "Failed!",
            "Failed to delete the Department. Please try again.",
            "error"
          );
        }
      }
    });
  };

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
            className="bg-white rounded-lg shadow-lg flex flex-col h-full"
          >
            {/* Department Image */}
            {department.departmentBanner ? (
              <img
                src={department.departmentBanner}
                alt={department.department?.name || "Department Image"}
                className="w-full h-48 object-cover"
              />
            ) : (
              <div className="w-full h-48 flex items-center justify-center bg-gray-200">
                <p className="text-gray-500">No Image Available</p>
              </div>
            )}

            <div className="flex-grow p-4">
              {/* Department Name */}
              <div className="flex text-lg font-medium gap-5">
                <p className="w-24">Department:</p>
                <p className="text-black ">
                  {department.departmentName || "Unnamed Department"}
                </p>
              </div>

              {/* Degree Name */}
              <div className="flex text-lg font-medium gap-5">
                <p className="w-24">Degree:</p>
                <p className="text-black ">
                  {department.diploma || "Unnamed Degree"}
                </p>
              </div>

              {/* Regulation Name */}
              <div className="flex text-lg font-medium gap-5">
                <p className="w-24">Regulation:</p>
                <p className="text-black ">
                  {department.regulation || "Unnamed Regulation"}
                </p>
              </div>
            </div>

            {/* Buttons Section */}
            <div className="p-4 flex gap-4">
              <button
                className="border-2 border-blue-400 py-3 rounded-lg hover:bg-blue-400 hover:text-white text-lg w-full"
                onClick={() => handleViewDepartment(department)}
                title="View"
              >
                <FaEye className="mx-auto text-lg" />
              </button>
              <button
                className="border-2 border-yellow-400 py-3 rounded-lg hover:bg-yellow-400 hover:text-white text-lg w-full"
                onClick={() => handleUpdateDepartment(department)}
                title="Edit"
              >
                <CiEdit className="mx-auto text-lg" />
              </button>
              <button
                className="border-2 border-red-400 py-3 rounded-lg hover:bg-red-400 hover:text-white text-lg w-full"
                onClick={() => handleDeleteDepartment(department._id)}
                title="Delete"
              >
                <FaTrash className="mx-auto text-lg" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View Modal */}
      <dialog id="View_Modal_Department" className="modal">
        <ViewDepartment DepartmentData={viewDepartment}></ViewDepartment>
      </dialog>

      {/* Add New Department Modal */}
      <dialog id="Add_Department_Modal" className="modal">
        <AddDepartment refetch={refetch}></AddDepartment>
      </dialog>

      {/* Update Department Modal */}
      <dialog id="Update_Department_Modal" className="modal">
        <UpdateDepartment
          DepartmentData={editDepartmentData}
          refetch={refetch}
        ></UpdateDepartment>
      </dialog>
    </div>
  );
};

export default ManageDepartment;
