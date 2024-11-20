import React, { useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Loader from "../../Shared/Loader/Loader";
import { useQuery } from "@tanstack/react-query";
import { FaEye, FaTrash } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import ViewRoutine from "./ViewRoutine/ViewRoutine";
import Swal from "sweetalert2";
import AddRoutine from "./AddRoutine/AddRoutine";
import UpdateRoutine from "./UpdateRoutine/UpdateRoutine";

const ManageRoutine = () => {
  const axiosPublic = useAxiosPublic();
  const [viewRoutine, setViewRoutine] = useState(null);
  const [editRoutineData, setEditRoutineData] = useState(null);

  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("");
  const [selectedSession, setSelectedSession] = useState("");

  // Fetch Routine Data
  const {
    data: RoutineData = [],
    isLoading: RoutineDataIsLoading,
    error: RoutineDataError,
    refetch,
  } = useQuery({
    queryKey: ["RoutineData"],
    queryFn: () => axiosPublic.get(`/Routine`).then((res) => res.data),
  });

  // Loader State
  if (RoutineDataIsLoading) {
    return <Loader />;
  }

  // Error State
  if (RoutineDataError) {
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

  // Extract unique dropdown options
  const departments = [
    ...new Set(RoutineData.map((routine) => routine.department)),
  ];
  const semesters = [
    ...new Set(RoutineData.map((routine) => routine.semester)),
  ];
  const sessions = [...new Set(RoutineData.map((routine) => routine.session))];

  // Filter Data
  const filteredData = RoutineData.filter((routine) => {
    return (
      (selectedDepartment === "" ||
        routine.department === selectedDepartment) &&
      (selectedSemester === "" ||
        routine.semester === Number(selectedSemester)) &&
      (selectedSession === "" || routine.session === selectedSession)
    );
  });

  const handleViewRoutine = (routine) => {
    setViewRoutine(routine);
    document.getElementById("View_Modal_Routine").showModal();
  };

  const handleUpdateRoutine = (routine) => {
    setEditRoutineData(routine);
    document.getElementById("Update_Routine_Modal").showModal();
  };

  const handleDeleteRoutine = async (id) => {
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
          await axiosPublic.delete(`/Routine/${id}`);
          refetch(); // Refresh the data after deletion
          Swal.fire(
            "Deleted!",
            "The Routine has been deleted successfully.",
            "success"
          );
        } catch (error) {
          console.error("Error deleting Routine:", error);
          Swal.fire(
            "Failed!",
            "Failed to delete the Routine. Please try again.",
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
        <p className="text-3xl font-semibold text-center">Manage Routines</p>
        <button
          className="border border-green-500 px-8 py-3 font-semibold hover:bg-green-500 hover:text-white"
          onClick={() =>
            document.getElementById("Add_Routine_Modal").showModal()
          }
        >
          + Add Routine
        </button>
      </div>

      {/* Query Section */}
      <div className="p-6 px-20 flex flex-col gap-4 sm:flex-row items-center justify-between bg-white border border-gray-500">
        <select
          value={selectedDepartment}
          onChange={(e) => setSelectedDepartment(e.target.value)}
          className="border border-gray-400 rounded-lg px-4 py-2 w-full sm:w-1/3 bg-white"
        >
          <option value="">All Departments</option>
          {departments.map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>
        <select
          value={selectedSemester}
          onChange={(e) => setSelectedSemester(e.target.value)}
          className="border border-gray-400 rounded-lg px-4 py-2 w-full sm:w-1/4 bg-white"
        >
          <option value="">All Semesters</option>
          {semesters.map((sem) => (
            <option key={sem} value={sem}>
              {sem}
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

      {/* Routine Data Display in Table */}
      <div className="overflow-x-auto p-6">
        <table className="table w-full text-left border-collapse">
          {/* Table Head */}
          <thead >
            <tr className="text-black">
              <th className=" px-4 py-2">#</th>
              <th className=" px-4 py-2">Department</th>
              <th className=" px-4 py-2">Semester</th>
              <th className=" px-4 py-2">Session</th>
              <th className=" px-4 py-2">Duration</th>
              <th className=" px-4 py-2">Actions</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {filteredData.map((routine, index) => (
              <tr key={routine._id} >
                <td className=" px-4 py-2">{index + 1}</td>
                <td className=" px-4 py-2">{routine.department}</td>
                <td className=" px-4 py-2">{routine.semester}</td>
                <td className=" px-4 py-2">{routine.session}</td>
                <td className=" px-4 py-2">{routine["class-Duration"]}</td>
                <td className="px-4 py-2 gap-5 text-black flex items-center mt-3">
                  <button
                    className="border-2 border-blue-400 px-4 py-2 rounded-lg hover:bg-blue-400 hover:text-white text-lg"
                    onClick={() => handleViewRoutine(routine)}
                    title="View"
                  >
                    <FaEye />
                  </button>
                  <button
                    className="border-2 border-yellow-400 px-4 py-2 rounded-lg hover:bg-yellow-400 hover:text-white text-lg"
                    onClick={() => handleUpdateRoutine(routine)}
                    title="Edit"
                  >
                    <CiEdit />
                  </button>
                  <button
                    className="border-2 border-red-400 px-4 py-2 rounded-lg hover:bg-red-400 hover:text-white text-lg"
                    onClick={() => handleDeleteRoutine(routine._id)}
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
      <dialog id="View_Modal_Routine" className="modal">
        <ViewRoutine RoutineData={viewRoutine}></ViewRoutine>
      </dialog>

      {/* Add new Routine Modal */}
      <dialog id="Add_Routine_Modal" className="modal">
        <AddRoutine refetch={refetch}></AddRoutine>
      </dialog>

      {/* Update Routine Modal */}
      <dialog id="Update_Routine_Modal" className="modal">
        <UpdateRoutine
          RoutineData={editRoutineData}
          refetch={refetch}
        ></UpdateRoutine>
      </dialog>
    </div>
  );
};

export default ManageRoutine;
