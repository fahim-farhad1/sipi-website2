import React, { useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Shared/Loader/Loader";

// Importing necessary icons
import { FcDepartment } from "react-icons/fc";
import { MdAdminPanelSettings } from "react-icons/md";
import { CiCalendarDate, CiEdit } from "react-icons/ci";
import { FaTrash } from "react-icons/fa";
import AddNotices from "./AddNotices/AddNotices";
import UpdateNotices from "./UpdateNotices/UpdateNotices";
import Swal from "sweetalert2";

const ManageNotices = () => {
  const axiosPublic = useAxiosPublic();
  const [editNoticesData, setEditNoticesData] = useState(null);

  // Fetch Notices Data
  const {
    data: NoticesData = [],
    isLoading: NoticesDataIsLoading,
    error: NoticesDataError,
    refetch,
  } = useQuery({
    queryKey: ["NoticesData"],
    queryFn: () => axiosPublic.get(`/Notices`).then((res) => res.data),
  });

  // Loader State
  if (NoticesDataIsLoading) {
    return <Loader />;
  }

  // Error State
  if (NoticesDataError) {
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

  // Sort the notices (optional, if you want to sort by date, etc.)
  const sortedNotices = NoticesData.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  // Function to limit content preview
  const getContentPreview = (content, length = 30) => {
    return content.length > length
      ? content.substring(0, length) + "..."
      : content;
  };

  const handleUpdateNotices = (notice) => {
    setEditNoticesData(notice);
    document.getElementById("Update_Notices_Modal").showModal();
  };

  const handleDeleteNotices = async (id) => {
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
          await axiosPublic.delete(`/Notices/${id}`);
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
    <div className="bg-gray-200 min-h-screen">
      {/* Top Section */}
      <div className="flex justify-between border-b-2 border-gray-600 p-6 items-center">
        <p className="text-3xl font-semibold text-center">Manage Notices</p>
        <button
          className="border border-green-500 px-8 py-3 font-semibold hover:bg-green-500 hover:text-white"
          onClick={() =>
            document.getElementById("Add_Notices_Modal").showModal()
          }
        >
          + Add Notices
        </button>
      </div>

      {/* Notices List */}
      <div className="gap-6 p-6">
        {sortedNotices && sortedNotices.length > 0 ? (
          sortedNotices.map((notice) => (
            <div
              key={notice._id}
              className="border-b bg-gray-100 mb-3 p-4 hover:shadow-xl"
            >
              <h2 className="text-2xl font-semibold">{notice.title}</h2>
              <div className="flex flex-col md:flex-row justify-between items-center mb-2 p-3">
                <p className="text-lg text-gray-700 flex items-center mb-2 md:mb-0">
                  <FcDepartment className="mr-2 text-2xl" />
                  {notice.department}
                </p>
                <p className="text-lg text-gray-700 flex items-center mb-2 md:mb-0">
                  <MdAdminPanelSettings className="mr-2 text-2xl" />
                  {notice.authority_type}
                </p>
                <p className="text-lg text-gray-700 flex items-center">
                  <CiCalendarDate className="mr-2 text-2xl" />
                  {notice.date}
                </p>
              </div>

              {/* Preview of the notice content */}
              <p className="text-gray-700">{notice.details.content}</p>

              {/* Read more link */}
              <a
                href={notice.details.link}
                className="text-green-500 hover:underline"
              >
                Related Link
              </a>

              {/* Buttons */}
              <div className="px-4  gap-5 text-black flex items-center justify-end mt-3">
                <button
                  className="border-2 border-yellow-400 px-4 py-2 rounded-lg hover:bg-yellow-400 hover:text-white text-lg"
                  onClick={() => handleUpdateNotices(notice)}
                  title="Edit"
                >
                  <CiEdit />
                </button>
                <button
                  className="border-2 border-red-400 px-4 py-2 rounded-lg hover:bg-red-400 hover:text-white text-lg"
                  onClick={() => handleDeleteNotices(notice._id)}
                  title="Delete"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No notices available at the moment.</p>
        )}
      </div>

      {/* Add New Notices Modal */}
      <dialog id="Add_Notices_Modal" className="modal">
        <AddNotices refetch={refetch}></AddNotices>
      </dialog>

      {/* Update Notices Modal */}
      <dialog id="Update_Notices_Modal" className="modal">
        <UpdateNotices
          NoticesData={editNoticesData}
          refetch={refetch}
        ></UpdateNotices>
      </dialog>
    </div>
  );
};

export default ManageNotices;
