import React, { useState, useMemo } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Loader from "../../Shared/Loader/Loader";
import { useQuery } from "@tanstack/react-query";
import { CiEdit } from "react-icons/ci";
import { FaTrash } from "react-icons/fa";
import AddTuitionFee from "./AddTuitionFee/AddTuitionFee";
import UpdateTuitionFee from "./UpdateTuitionFee/UpdateTuitionFee";
import Swal from "sweetalert2";

const ManageTuitionFee = () => {
  const axiosPublic = useAxiosPublic();
  const [editTuitionFeeData, setEditTuitionFeeData] = useState(null);

  // Fetch Tuition Fee Data
  const {
    data: TuitionFeeData = [],
    isLoading: TuitionFeeDataIsLoading,
    error: TuitionFeeDataError,
    refetch,
  } = useQuery({
    queryKey: ["TuitionFeeData"],
    queryFn: () => axiosPublic.get("/Tuition-Fee").then((res) => res.data),
  });

  // State for filters
  const [selectedSemester, setSelectedSemester] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedSession, setSelectedSession] = useState("");

  // Extract unique dropdown values
  const semesters = useMemo(
    () => [...new Set(TuitionFeeData.map((item) => item.semester))],
    [TuitionFeeData]
  );
  const departments = useMemo(
    () => [...new Set(TuitionFeeData.map((item) => item.department))],
    [TuitionFeeData]
  );
  const sessions = useMemo(
    () => [...new Set(TuitionFeeData.map((item) => item.session))],
    [TuitionFeeData]
  );

  // Filtered data based on selected dropdowns
  const filteredData = TuitionFeeData.filter((item) => {
    return (
      (selectedSemester
        ? item.semester === parseInt(selectedSemester)
        : true) &&
      (selectedDepartment ? item.department === selectedDepartment : true) &&
      (selectedSession ? item.session === selectedSession : true)
    );
  });

  // Loader State
  if (TuitionFeeDataIsLoading) {
    return <Loader />;
  }

  // Error State
  if (TuitionFeeDataError) {
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

  const handleUpdateTuitionFee = (fee) => {
    setEditTuitionFeeData(fee);
    document.getElementById("Update_TuitionFee_Modal").showModal();
  };

  const handleDeleteTuitionFee = async (id) => {
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
          await axiosPublic.delete(`/Tuition-Fee/${id}`);
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
        <p className="text-3xl font-semibold text-center">
          Manage Tuition Fees
        </p>
        <button
          className="border border-green-500 px-8 py-3 font-semibold hover:bg-green-500 hover:text-white"
          onClick={() =>
            document.getElementById("Add_TuitionFee_Modal").showModal()
          }
        >
          + Add Tuition Fee
        </button>
      </div>

      {/* Filter Section */}
      <div className="p-6 px-20 flex flex-col gap-4 sm:flex-row items-center justify-between bg-white border border-gray-500">
        <select
          value={selectedSemester}
          onChange={(e) => setSelectedSemester(e.target.value)}
          className="border border-gray-400 rounded-lg px-4 py-2 w-full sm:w-1/4 bg-white"
        >
          <option value="">All Semesters</option>
          {semesters.map((sem) => (
            <option key={sem} value={sem}>
              Semester {sem}
            </option>
          ))}
        </select>

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
          value={selectedSession}
          onChange={(e) => setSelectedSession(e.target.value)}
          className="border border-gray-400 rounded-lg px-4 py-2 w-full sm:w-1/4 bg-white"
        >
          <option value="">All Sessions</option>
          {sessions.map((session) => (
            <option key={session} value={session}>
              {session}
            </option>
          ))}
        </select>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto p-6">
        <table className="table w-full text-left border-collapse">
          <thead className="text-center">
            <tr className="text-black">
              <th className="px-4 py-2">Semester</th>
              <th className="px-4 py-2">Department</th>
              <th className="px-4 py-2">Session</th>
              <th className="px-4 py-2">Fee Amount</th>
              <th className="px-4 py-2">Monthly Fee</th>
              <th className="px-4 py-2">Mid-Term Fee</th>
              <th className="px-4 py-2">Final Exam Fee</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <tr key={item._id} className="border-b text-center">
                  <td className="px-4 py-2">{item.semester}</td>
                  <td className="px-4 py-2">{item.department}</td>
                  <td className="px-4 py-2">{item.session}</td>
                  <td className="px-4 py-2">{item.feeDetails.feeAmount}</td>
                  <td className="px-4 py-2">{item.feeDetails.monthlyFee}</td>
                  <td className="px-4 py-2">
                    {item.feeDetails.midTermExamFee}
                  </td>
                  <td className="px-4 py-2">{item.feeDetails.finalExamFee}</td>
                  <td className="px-4 py-2 gap-5 text-black flex items-center">
                    <button
                      className="border-2 border-yellow-400 px-4 py-2 rounded-lg hover:bg-yellow-400 hover:text-white text-lg"
                      onClick={() => handleUpdateTuitionFee(item)}
                      title="Edit"
                    >
                      <CiEdit />
                    </button>
                    <button
                      className="border-2 border-red-400 px-4 py-2 rounded-lg hover:bg-red-400 hover:text-white text-lg"
                      onClick={() => handleDeleteTuitionFee(item._id)}
                      title="Delete"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center py-4">
                  No tuition fee data found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add New TuitionFee Modal */}
      <dialog id="Add_TuitionFee_Modal" className="modal">
        <AddTuitionFee refetch={refetch}></AddTuitionFee>
      </dialog>

      {/* Update TuitionFee Modal */}
      <dialog id="Update_TuitionFee_Modal" className="modal">
        <UpdateTuitionFee
          TuitionFeeData={editTuitionFeeData}
          refetch={refetch}
        ></UpdateTuitionFee>
      </dialog>
    </div>
  );
};

export default ManageTuitionFee;
