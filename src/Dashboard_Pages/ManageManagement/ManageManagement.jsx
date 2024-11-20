import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Loader from "../../Shared/Loader/Loader";
import { FaEye, FaTrash } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import ViewManagement from "./ViewManagement/ViewManagement";
import AddManagement from "./AddManagement/AddManagement";
import UpdateManagement from "./UpdateManagement/UpdateManagement";
import Swal from "sweetalert2";

const ManageManagement = () => {
  const axiosPublic = useAxiosPublic();
  const [viewManagement, setViewManagement] = useState(null);
  const [editManagementData, setEditManagementData] = useState(null);

  // Fetch Management Data
  const {
    data: ManagementData = [],
    isLoading: ManagementDataIsLoading,
    error: ManagementDataError,
    refetch,
  } = useQuery({
    queryKey: ["ManagementData"],
    queryFn: () => axiosPublic.get(`/Management`).then((res) => res.data),
  });

  // Loader State
  if (ManagementDataIsLoading) {
    return <Loader />;
  }

  // Error State
  if (ManagementDataError) {
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

  // State for search filters
  const [searchName, setSearchName] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedDesignation, setSelectedDesignation] = useState("");

  // Filtered Teachers based on Search Inputs
  const filteredManagement = ManagementData.filter((management) => {
    const matchesName = management.name
      .toLowerCase()
      .includes(searchName.toLowerCase());
    const matchesDepartment = management.department
      .toLowerCase()
      .includes(selectedDepartment.toLowerCase());
    const matchesDesignation = management.designation
      .toLowerCase()
      .includes(selectedDesignation.toLowerCase());

    return matchesName && matchesDepartment && matchesDesignation;
  });

  const handleDeleteManagement = async (id) => {
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
          await axiosPublic.delete(`/Management/${id}`);
          refetch(); // Refresh the data after deletion
          Swal.fire(
            "Deleted!",
            "The teacher has been deleted successfully.",
            "success"
          );
        } catch (error) {
          console.error("Error deleting teacher:", error);
          Swal.fire(
            "Failed!",
            "Failed to delete the teacher. Please try again.",
            "error"
          );
        }
      }
    });
  };

  // Extract departments and designations for the dropdowns
  const departments = [
    ...new Set(ManagementData.map((management) => management.department)),
  ];
  const designations = [
    ...new Set(ManagementData.map((management) => management.designation)),
  ];

  const handleViewTeacher = (management) => {
    setViewManagement(management);
    document.getElementById("View_Modal_Management").showModal();
  };

  const handleUpdateManagement = (management) => {
    setEditManagementData(management);
    document.getElementById("Update_Management_Modal").showModal();
  };

  return (
    <div className="bg-gray-200 min-h-screen border border-black">
      {/* Top Section */}
      <div className="flex justify-between border-b-2 border-gray-600 p-6 items-center">
        <p className="text-3xl font-semibold text-center">
          Manage Management Staff
        </p>
        <button
          className="border border-green-500 px-8 py-3 font-semibold hover:bg-green-500 hover:text-white"
          onClick={() =>
            document.getElementById("Add_Management_Modal").showModal()
          }
        >
          + Add Management Staff
        </button>
      </div>

      {/* Query Section */}
      <div className="p-6 px-20 flex flex-col gap-4 sm:flex-row items-center justify-between bg-white border border-gray-500">
        <input
          type="text"
          placeholder="Search by Name"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          className="border border-gray-400 rounded-lg px-4 py-2 w-full sm:w-1/3 bg-white"
        />
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
          <tbody>
            {filteredManagement.length > 0 ? (
              filteredManagement.map((management, index) => (
                <tr key={management._id} className="border-b">
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">
                    <img
                      src={management.image}
                      alt={management.name}
                      className="w-16 h-16 object-cover"
                    />
                  </td>
                  <td className="px-4 py-2">{management.name}</td>
                  <td className="px-4 py-2">{management.department}</td>
                  <td className="px-4 py-2">{management.designation}</td>
                  <td className="px-4 py-2 gap-5 text-black flex items-center mt-3">
                    <button
                      className="border-2 border-blue-400 px-4 py-2 rounded-lg hover:bg-blue-400 hover:text-white text-lg"
                      onClick={() => handleViewTeacher(management)}
                      title="View"
                    >
                      <FaEye />
                    </button>
                    <button
                      className="border-2 border-yellow-400 px-4 py-2 rounded-lg hover:bg-yellow-400 hover:text-white text-lg"
                      onClick={() => handleUpdateManagement(management)}
                      title="Edit"
                    >
                      <CiEdit />
                    </button>
                    <button
                      className="border-2 border-red-400 px-4 py-2 rounded-lg hover:bg-red-400 hover:text-white text-lg"
                      onClick={() => handleDeleteManagement(management._id)}
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
                  No managements found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* View Modal */}
      <dialog id="View_Modal_Management" className="modal">
        <ViewManagement managementData={viewManagement}></ViewManagement>
      </dialog>

      {/* Add New Management Modal */}
      <dialog id="Add_Management_Modal" className="modal">
        <AddManagement refetch={refetch}></AddManagement>
      </dialog>

      {/* Update Management Modal */}
      <dialog id="Update_Management_Modal" className="modal">
        <UpdateManagement
          ManagementData={editManagementData}
          refetch={refetch}
        ></UpdateManagement>
      </dialog>
    </div>
  );
};

export default ManageManagement;
