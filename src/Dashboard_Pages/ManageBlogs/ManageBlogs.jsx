import React, { useState, useEffect } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Shared/Loader/Loader";
import { FaEye, FaTrash } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import Swal from "sweetalert2";
import AddBlogs from "./AddBlogs/AddBlogs";
import ViewBlogs from "./ViewBlogs/ViewBlogs";
import UpdateBlogs from "./UpdateBlogs/UpdateBlogs";

const ManageBlogs = () => {
  const axiosPublic = useAxiosPublic();
  const [viewBlogs, setViewBlogs] = useState(null);
  const [editBlogsData, setEditBlogsData] = useState(null);

  // Fetch Blogs Data
  const {
    data: BlogsData = [],
    isLoading: BlogsDataIsLoading,
    error: BlogsDataError,
    refetch,
  } = useQuery({
    queryKey: ["BlogsData"],
    queryFn: () => axiosPublic.get(`/Blogs`).then((res) => res.data),
  });

  // State for Search
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  // Filter Blogs Based on Search Term and Category
  useEffect(() => {
    if (BlogsData) {
      const filtered = BlogsData.filter(
        (blog) =>
          (blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            blog.category.toLowerCase().includes(searchTerm.toLowerCase())) &&
          (selectedCategory ? blog.category === selectedCategory : true)
      );
      setFilteredBlogs(filtered);
    }
  }, [searchTerm, selectedCategory, BlogsData]);

  // Loader State
  if (BlogsDataIsLoading) {
    return <Loader />;
  }

  // Error State
  if (BlogsDataError) {
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

  const handleViewBlogs = (blogs) => {
    setViewBlogs(blogs);
    document.getElementById("View_Modal_Blogs").showModal();
  };

  const handleUpdateBlogs = (blogs) => {
    setEditBlogsData(blogs);
    document.getElementById("Update_Blogs_Modal").showModal();
  };

  const handleDeleteBlogs = async (id) => {
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
          await axiosPublic.delete(`/Blogs/${id}`);
          refetch(); // Refresh the data after deletion
          Swal.fire(
            "Deleted!",
            "The Blogs has been deleted successfully.",
            "success"
          );
        } catch (error) {
          console.error("Error deleting Blogs:", error);
          Swal.fire(
            "Failed!",
            "Failed to delete the Blogs. Please try again.",
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
        <p className="text-3xl font-semibold text-center">Manage Blogs</p>
        <button
          className="border border-green-500 px-8 py-3 font-semibold hover:bg-green-500 hover:text-white"
          onClick={() => document.getElementById("Add_Blogs_Modal").showModal()}
        >
          + Add Blogs
        </button>
      </div>

      {/* Search Section */}
      <div className="p-6 px-20 flex flex-col gap-4 sm:flex-row items-center justify-between bg-white border border-gray-500">
        <input
          type="text"
          placeholder="Search by Title or Category"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-400 rounded-lg px-4 py-2 w-full sm:w-1/3 bg-white"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border border-gray-400 rounded-lg px-4 py-2 w-full sm:w-1/4 bg-white"
        >
          <option value="">All Categories</option>
          {/* Dynamically generate category options */}
          {Array.from(new Set(BlogsData.map((blog) => blog.category))).map(
            (category) => (
              <option key={category} value={category}>
                {category}
              </option>
            )
          )}
        </select>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto p-6">
        <table className="table w-full text-left border-collapse">
          <thead className="">
            <tr className="text-black">
              <th className="px-4 py-2">No</th>
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog, index) => (
                <tr key={blog._id} className="border-b">
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">
                    <img
                      src={blog.featuredImage}
                      alt={blog.title}
                      className="w-16 h-16 object-cover"
                    />
                  </td>
                  <td className="px-4 py-2">{blog.title}</td>
                  <td className="px-4 py-2">{blog.category}</td>
                  <td className="px-4 py-2 gap-5 text-black flex items-center mt-3">
                    <button
                      className="border-2 border-blue-400 px-4 py-2 rounded-lg hover:bg-blue-400 hover:text-white text-lg"
                      onClick={() => handleViewBlogs(blog)}
                      title="View"
                    >
                      <FaEye />
                    </button>
                    <button
                      className="border-2 border-yellow-400 px-4 py-2 rounded-lg hover:bg-yellow-400 hover:text-white text-lg"
                      onClick={() => handleUpdateBlogs(blog)}
                      title="Edit"
                    >
                      <CiEdit />
                    </button>
                    <button
                      className="border-2 border-red-400 px-4 py-2 rounded-lg hover:bg-red-400 hover:text-white text-lg"
                      onClick={() => handleDeleteBlogs(blog._id)}
                      title="Delete"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  No blogs found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* View Modal */}
      <dialog id="View_Modal_Blogs" className="modal">
        <ViewBlogs blogsData={viewBlogs}></ViewBlogs>
      </dialog>

      {/* Add New Blogs Modal */}
      <dialog id="Add_Blogs_Modal" className="modal">
        <AddBlogs refetch={refetch}></AddBlogs>
      </dialog>

      {/* Update Blogs Modal */}
      <dialog id="Update_Blogs_Modal" className="modal">
        <UpdateBlogs BlogsData={editBlogsData} refetch={refetch}></UpdateBlogs>
      </dialog>
    </div>
  );
};

export default ManageBlogs;
