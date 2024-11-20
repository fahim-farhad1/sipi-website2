import React, { useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Shared/Loader/Loader";
import { FaEye, FaTrash } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import ViewTestimonials from "./ViewTestimonials/ViewTestimonials";
import AddTestimonials from "./AddTestimonials/AddTestimonials";
import UpdateTestimonials from "./UpdateTestimonials/UpdateTestimonials";
import Swal from "sweetalert2";

const ManageTestimonials = () => {
  const axiosPublic = useAxiosPublic();
  const [viewTestimonials, setViewTestimonials] = useState(null);
  const [editTestimonialsData, setEditTestimonialsData] = useState(null);

  // States for search and filter
  const [searchName, setSearchName] = useState("");
  const [selectedTestimonials, setSelectedTestimonials] = useState("");

  // Fetch Testimonials Data
  const {
    data: TestimonialsData = [],
    isLoading: TestimonialsDataIsLoading,
    error: TestimonialsDataError,
    refetch,
  } = useQuery({
    queryKey: ["TestimonialsData"],
    queryFn: () => axiosPublic.get(`/Testimonials`).then((res) => res.data),
  });

  // Loader State
  if (TestimonialsDataIsLoading) {
    return <Loader />;
  }

  // Error State
  if (TestimonialsDataError) {
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

  // Filter logic
  const filteredTestimonials = TestimonialsData.filter((testimonial) => {
    const matchesName = testimonial.name
      .toLowerCase()
      .includes(searchName.toLowerCase());
    const matchesTestimonials =
      selectedTestimonials === "" ||
      testimonial.department === selectedTestimonials;

    return matchesName && matchesTestimonials;
  });

  const handleViewTestimonials = (testimonial) => {
    setViewTestimonials(testimonial);
    document.getElementById("View_Modal_Testimonials").showModal();
  };

  const handleUpdateTestimonials = (testimonial) => {
    setEditTestimonialsData(testimonial);
    document.getElementById("Update_Testimonials_Modal").showModal();
  };

  const handleDeleteTestimonials = async (id) => {
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
          await axiosPublic.delete(`/Testimonials/${id}`);
          refetch(); // Refresh the data after deletion
          Swal.fire(
            "Deleted!",
            "The Testimonials has been deleted successfully.",
            "success"
          );
        } catch (error) {
          console.error("Error deleting Testimonials:", error);
          Swal.fire(
            "Failed!",
            "Failed to delete the Testimonials. Please try again.",
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
          Manage Testimonials
        </p>
        <button
          className="border border-green-500 px-8 py-3 font-semibold hover:bg-green-500 hover:text-white"
          onClick={() =>
            document.getElementById("Add_Testimonials_Modal").showModal()
          }
        >
          + Add Testimonials
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
          value={selectedTestimonials}
          onChange={(e) => setSelectedTestimonials(e.target.value)}
          className="border border-gray-400 rounded-lg px-4 py-2 w-full sm:w-1/4 bg-white"
        >
          <option value="">All Testimonialss</option>
          {/* Dynamically generate department options */}
          {Array.from(
            new Set(
              TestimonialsData.map((testimonial) => testimonial.department)
            )
          ).map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto p-6">
        <table className="table w-full text-left border-collapse">
          <thead className="">
            <tr className="text-black">
              <th className="px-4 py-2">No</th>
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Testimonials</th>
              <th className="px-4 py-2">Position</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTestimonials.length > 0 ? (
              filteredTestimonials.map((testimonial, index) => (
                <tr key={testimonial._id} className="border-b ">
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 object-cover"
                    />
                  </td>
                  <td className="px-4 py-2">{testimonial.name}</td>
                  <td className="px-4 py-2">{testimonial.department}</td>
                  <td className="px-4 py-2">{testimonial.position}</td>
                  <td className="px-4 py-2 gap-5 text-black flex items-center mt-3">
                    <button
                      className="border-2 border-blue-400 px-4 py-2 rounded-lg hover:bg-blue-400 hover:text-white text-lg"
                      onClick={() => handleViewTestimonials(testimonial)}
                      title="View"
                    >
                      <FaEye />
                    </button>
                    <button
                      className="border-2 border-yellow-400 px-4 py-2 rounded-lg hover:bg-yellow-400 hover:text-white text-lg"
                      onClick={() => handleUpdateTestimonials(testimonial)}
                      title="Edit"
                    >
                      <CiEdit />
                    </button>
                    <button
                      className="border-2 border-red-400 px-4 py-2 rounded-lg hover:bg-red-400 hover:text-white text-lg"
                      onClick={() => handleDeleteTestimonials(testimonial._id)}
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
      <dialog id="View_Modal_Testimonials" className="modal">
        <ViewTestimonials testimonialData={viewTestimonials}></ViewTestimonials>
      </dialog>

      {/* Add New Testimonials Modal */}
      <dialog id="Add_Testimonials_Modal" className="modal">
        <AddTestimonials refetch={refetch}></AddTestimonials>
      </dialog>

      {/* Update Testimonials Modal */}
      <dialog id="Update_Testimonials_Modal" className="modal">
        <UpdateTestimonials
          TestimonialsData={editTestimonialsData}
          refetch={refetch}
        ></UpdateTestimonials>
      </dialog>
    </div>
  );
};

export default ManageTestimonials;
