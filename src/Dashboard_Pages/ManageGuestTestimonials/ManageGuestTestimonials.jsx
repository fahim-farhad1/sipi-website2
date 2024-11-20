import React, { useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Shared/Loader/Loader";
import { FaEye, FaTrash } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import Swal from "sweetalert2";
import ViewGuestTestimonials from "./ViewGuestTestimonials/ViewGuestTestimonials";
import AddGuestTestimonials from "./AddGuestTestimonials/AddGuestTestimonials";
import UpdateGuestTestimonials from "./UpdateGuestTestimonials/UpdateGuestTestimonials";

const ManageGuestTestimonials = () => {
  const axiosPublic = useAxiosPublic();
  const [viewGuestTestimonials, setViewGuestTestimonials] = useState(null);
  const [editGuestTestimonialsData, setEditGuestTestimonialsData] =
    useState(null);

  // Fetch GuestTestimonials Data
  const {
    data: GuestTestimonialsData = [],
    isLoading: GuestTestimonialsDataIsLoading,
    error: GuestTestimonialsDataError,
    refetch,
  } = useQuery({
    queryKey: ["GuestTestimonialsData"],
    queryFn: () =>
      axiosPublic.get(`/GuestTestimonials`).then((res) => res.data),
  });

  // Loader State
  if (GuestTestimonialsDataIsLoading) {
    return <Loader />;
  }

  // Error State
  if (GuestTestimonialsDataError) {
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

  const handleViewGuestTestimonials = (testimonial) => {
    setViewGuestTestimonials(testimonial);
    document.getElementById("View_Modal_GuestTestimonials").showModal();
  };

  const handleUpdateGuestTestimonials = (testimonial) => {
    setEditGuestTestimonialsData(testimonial);
    document.getElementById("Update_GuestTestimonials_Modal").showModal();
  };

  const handleDeleteGuestTestimonials = async (id) => {
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
          await axiosPublic.delete(`/GuestTestimonials/${id}`);
          refetch(); // Refresh the data after deletion
          Swal.fire(
            "Deleted!",
            "The GuestTestimonials has been deleted successfully.",
            "success"
          );
        } catch (error) {
          console.error("Error deleting GuestTestimonials:", error);
          Swal.fire(
            "Failed!",
            "Failed to delete the GuestTestimonials. Please try again.",
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
          Manage Guest Testimonials
        </p>
        <button
          className="border border-green-500 px-8 py-3 font-semibold hover:bg-green-500 hover:text-white"
          onClick={() =>
            document.getElementById("Add_GuestTestimonials_Modal").showModal()
          }
        >
          + Add Guest Testimonial
        </button>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto p-6">
        <table className="table w-full text-left border-collapse">
          <thead className="text-center">
            <tr className="text-black">
              <th className="px-4 py-2">No</th>
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Position</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {GuestTestimonialsData.length > 0 ? (
              GuestTestimonialsData.map((testimonial, index) => (
                <tr key={testimonial._id} className="border-b text-center">
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 object-cover"
                    />
                  </td>
                  <td className="px-4 py-2">{testimonial.name}</td>
                  <td className="px-4 py-2">{testimonial.position}</td>
                  <td className="px-4 py-2 gap-5 text-black flex items-center mt-3">
                    <button
                      className="border-2 border-blue-400 px-4 py-2 rounded-lg hover:bg-blue-400 hover:text-white text-lg"
                      onClick={() => handleViewGuestTestimonials(testimonial)}
                      title="View"
                    >
                      <FaEye />
                    </button>
                    <button
                      className="border-2 border-yellow-400 px-4 py-2 rounded-lg hover:bg-yellow-400 hover:text-white text-lg"
                      onClick={() => handleUpdateGuestTestimonials(testimonial)}
                      title="Edit"
                    >
                      <CiEdit />
                    </button>
                    <button
                      className="border-2 border-red-400 px-4 py-2 rounded-lg hover:bg-red-400 hover:text-white text-lg"
                      onClick={() =>
                        handleDeleteGuestTestimonials(testimonial._id)
                      }
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
                  No testimonial found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* View Modal */}
      <dialog id="View_Modal_GuestTestimonials" className="modal">
        <ViewGuestTestimonials
          TestimonialData={viewGuestTestimonials}
        ></ViewGuestTestimonials>
      </dialog>

      {/* Add New GuestTestimonials Modal */}
      <dialog id="Add_GuestTestimonials_Modal" className="modal">
        <AddGuestTestimonials refetch={refetch}></AddGuestTestimonials>
      </dialog>

      {/* Update GuestTestimonials Modal */}
      <dialog id="Update_GuestTestimonials_Modal" className="modal">
        <UpdateGuestTestimonials
          GuestTestimonialsData={editGuestTestimonialsData}
          refetch={refetch}
        ></UpdateGuestTestimonials>
      </dialog>
    </div>
  );
};

export default ManageGuestTestimonials;
