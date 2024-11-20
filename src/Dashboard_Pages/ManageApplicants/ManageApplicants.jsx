import React, { useState, useEffect } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { FaEye, FaTrash } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Shared/Loader/Loader";
import ViewApplicant from "./ViewApplicant/ViewApplicant";
import Swal from "sweetalert2";

const ManageApplicants = () => {
  const axiosPublic = useAxiosPublic();
  const [viewApplicant, setViewApplicant] = useState(null);

  const [applicants, setApplicants] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [selectedDivision, setSelectedDivision] = useState("");

  // Fetch Applicant Data
  const {
    data: ApplicantData = [],
    isLoading: ApplicantDataIsLoading,
    error: ApplicantDataError,
    refetch,
  } = useQuery({
    queryKey: ["ApplicantData"],
    queryFn: () =>
      axiosPublic.get(`/Applicant`).then((res) => {
        const sortedApplicants = res.data.sort(
          (a, b) => new Date(b.appliedDate) - new Date(a.appliedDate)
        );
        setApplicants(sortedApplicants);
        return sortedApplicants;
      }),
  });

  // Get unique divisions for the dropdown
  const divisions = [...new Set(ApplicantData.map((item) => item.division))];

  // Filter applicants based on the search name and division
  const filteredApplicants = applicants.filter((applicant) => {
    const matchesName =
      searchName === "" ||
      applicant.fullName.toLowerCase().includes(searchName.toLowerCase());
    const matchesDivision =
      selectedDivision === "" || applicant.division === selectedDivision;
    return matchesName && matchesDivision;
  });

  // Handle Approve
  const handleApprove = (id) => {
    setApplicants((prev) =>
      prev.map((applicant) =>
        applicant._id === id
          ? { ...applicant, applicantStatus: "Approved" }
          : applicant
      )
    );
  };

  // Handle Delete
  const handleDelete = (id) => {
    setApplicants((prev) => prev.filter((applicant) => applicant._id !== id));
  };

  // Loader State
  if (ApplicantDataIsLoading) {
    return <Loader />;
  }

  // Error State
  if (ApplicantDataError) {
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

  const handleViewApplicant = (applicant) => {
    setViewApplicant(applicant);
    document.getElementById("View_Modal_Applicant").showModal();
  };

  const handleDeleteApplicant = async (id) => {
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
          await axiosPublic.delete(`/Applicant/${id}`);
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

  return (
    <div className="bg-gray-200 min-h-screen border border-black">
      {/* Top Section */}
      <div className="flex justify-between border-b-2 border-gray-600 p-6 h-24 items-center">
        <p className="text-3xl font-semibold text-center">Manage Applicants</p>
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
          value={selectedDivision}
          onChange={(e) => setSelectedDivision(e.target.value)}
          className="border border-gray-400 rounded-lg px-4 py-2 w-full sm:w-1/4 bg-white"
        >
          <option value="">All Divisions</option>
          {divisions.map((division) => (
            <option key={division} value={division}>
              {division}
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
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Division</th>
              <th className="px-4 py-2">Applicant Date</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Number</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredApplicants.map((applicant, index) => (
              <tr
                key={applicant._id}
                className={`border-b ${
                  applicant.applicantStatus === "Approved"
                    ? "bg-gray-300 text-gray-500"
                    : ""
                }`}
              >
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{applicant.fullName}</td>
                <td className="px-4 py-2">{applicant.division}</td>
                <td className="px-4 py-2">{applicant.appliedDate}</td>
                <td className="px-4 py-2">{applicant.email}</td>
                <td className="px-4 py-2">{applicant.mobileNumber}</td>
                <td className="px-4 py-2">{applicant.applicantStatus}</td>
                <td className="px-4 py-2 gap-5 text-black flex items-center mt-3">
                  {/* {applicant.applicantStatus !== "Approved" && (
                    <button
                      className="border-2 border-green-400 px-4 py-2 rounded-lg hover:bg-green-400 hover:text-white text-lg italic"
                      onClick={() => handleApprove(applicant._id)}
                      title="Approve"
                    >
                      Approve
                    </button>
                  )} */}
                  <button
                    className="border-2 border-blue-400 px-4 py-2 rounded-lg hover:bg-blue-400 hover:text-white text-lg"
                    onClick={() => handleViewApplicant(applicant)}
                    title="View"
                  >
                    <FaEye />
                  </button>
                  <button
                    className="border-2 border-red-400 px-4 py-2 rounded-lg hover:bg-red-400 hover:text-white text-lg"
                    onClick={() => handleDeleteApplicant(applicant._id)}
                    title="Delete"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* View Modal */}
      <dialog id="View_Modal_Applicant" className="modal">
        <ViewApplicant applicantData={viewApplicant}></ViewApplicant>
      </dialog>
    </div>
  );
};

export default ManageApplicants;
