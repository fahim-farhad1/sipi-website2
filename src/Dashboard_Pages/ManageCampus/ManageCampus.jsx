import React, { useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Loader from "../../Shared/Loader/Loader";
import { useQuery } from "@tanstack/react-query";
import { FaTrash } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import Swal from "sweetalert2";
import AddCampus from "./AddCampus/AddCampus";
import UpdateCampus from "./UpdateCampus/UpdateCampus";

const ManageCampus = () => {
  const axiosPublic = useAxiosPublic();
  const [editCampusData, setEditCampusData] = useState(null);

  // Fetch Campus Data
  const {
    data: CampusData = [],
    isLoading: CampusDataIsLoading,
    error: CampusDataError,
    refetch,
  } = useQuery({
    queryKey: ["CampusData"],
    queryFn: () => axiosPublic.get("/Campus").then((res) => res.data),
  });

  // Loader State
  if (CampusDataIsLoading) {
    return <Loader />;
  }

  // Error State
  if (CampusDataError) {
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

  const handleUpdateCampus = (campus) => {
    setEditCampusData(campus);
    document.getElementById("Update_Campus_Modal").showModal();
  };

  const handleDeleteCampus = async (id) => {
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
          await axiosPublic.delete(`/Campus/${id}`);
          refetch(); // Refresh the data after deletion
          Swal.fire(
            "Deleted!",
            "The Campus has been deleted successfully.",
            "success"
          );
        } catch (error) {
          console.error("Error deleting Campus:", error);
          Swal.fire(
            "Failed!",
            "Failed to delete the Campus. Please try again.",
            "error"
          );
        }
      }
    });
  };

  return (
    <div className="bg-gray-200 min-h-screen border border-black">
      {/* Top Section */}
      <div className="flex justify-between border-b-2 border-gray-600 p-6 h-24 items-center">
        <p className="text-3xl font-semibold text-center">Manage Campus</p>
        <button
          className="border border-green-500 px-8 py-3 font-semibold hover:bg-green-500 hover:text-white"
          onClick={() =>
            document.getElementById("Add_Campus_Modal").showModal()
          }
        >
          + Add Campus
        </button>
      </div>

      {/* Display Campus Data as Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 pb-4">
        {CampusData.map((campus) => (
          <div
            key={campus._id}
            className="bg-white  shadow-lg p-6 flex flex-col h-full"
          >
            {/* Campus Image */}
            <img
              src={campus.campusImg}
              alt={`Image of ${campus.campus}`}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />

            {/* Campus Name */}
            <h2 className="text-2xl font-semibold text-gray-800">
              {campus.campus}
            </h2>

            {/* Campus Address */}
            <p className="text-gray-600 mt-2">
              {campus.campusAddress.address}, {campus.campusAddress.area},{" "}
              {campus.campusAddress.city} - {campus.campusAddress.postalCode},{" "}
              {campus.campusAddress.country}
            </p>

            {/* Email Address */}
            <p className="text-gray-600 mt-2">
              <strong>Email:</strong> {campus.emailAddress}
            </p>

            {/* Mobile Numbers (display as list) */}
            <div className="text-gray-600 mt-2">
              <strong>Mobile:</strong>
              <ul className="list-disc pl-6">
                {campus.mobileNumbers.map((number, index) => (
                  <li key={index}>{number}</li>
                ))}
              </ul>
            </div>

            {/* Google Maps Link */}
            {/* Google Maps Link */}
            <div className="text-gray-600 mt-2 flex  gap-2">
              <strong>Google Maps Link:</strong>
              <a
                href={campus.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 hover:underline"
              >
                Google Maps link
              </a>
            </div>

            {/* Push buttons to the bottom */}
            <div className="mt-auto p-4 flex gap-4">
              <button
                className="border-2 border-yellow-400 py-3 rounded-lg hover:bg-yellow-400 hover:text-white text-lg w-full"
                onClick={() => handleUpdateCampus(campus)}
                title="Edit"
              >
                <CiEdit className="mx-auto text-lg" />
              </button>
              <button
                className="border-2 border-red-400 py-3 rounded-lg hover:bg-red-400 hover:text-white text-lg w-full"
                onClick={() => handleDeleteCampus(campus._id)}
                title="Delete"
              >
                <FaTrash className="mx-auto text-lg" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add New Campus Modal */}
      <dialog id="Add_Campus_Modal" className="modal">
        <AddCampus refetch={refetch}></AddCampus>
      </dialog>

      {/* Update Campus Modal */}
      <dialog id="Update_Campus_Modal" className="modal">
        <UpdateCampus
          CampusData={editCampusData}
          refetch={refetch}
        ></UpdateCampus>
      </dialog>
    </div>
  );
};

export default ManageCampus;
