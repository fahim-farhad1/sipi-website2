import React from "react";
import { useForm } from "react-hook-form"; // Ensure useForm is imported
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const AddNotices = ({ refetch, managementData }) => {
  const axiosPublic = useAxiosPublic();

  // Define the useForm hook with defaultValues based on your data structure
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      title: managementData?.title || "",
      department: managementData?.department || "",
      authority_type: managementData?.authority_type || "",
      date: managementData?.date || "",
      content: managementData?.details?.content || "",
      link: managementData?.details?.link || "",
    },
  });

  // Function to handle form submission
  const onSubmit = async (data) => {
    const structuredData = {
      title: data.title,
      department: data.department,
      authority_type: data.authority_type,
      date: data.date,
      details: {
        content: data.content,
        link: data.link,
      },
    };

    try {
      // Sending POST request to save notice data
      const response = await axiosPublic.post("/Notices", structuredData);

      if (response.data.insertedId) {
        // Show success alert
        Swal.fire({
          title: "Success!",
          text: "Notice has been added successfully!",
          icon: "success",
          button: "OK",
        });
      }
      document.getElementById("Add_Notices_Modal").close();
      refetch();
      reset();
    } catch (error) {
      console.error("Error adding notice:", error);

      // Show error alert
      Swal.fire({
        title: "Error!",
        text: "Failed to add the notice. Please try again.",
        icon: "error",
        button: "OK",
      });
    }
  };

  return (
    <div className="modal-box bg-white max-w-[1000px] p-0 ">
      <div className="flex justify-between items-center border-b border-gray-300 px-10">
        <h1 className="text-3xl font-semibold text-center mb-6">Add Notices</h1>
        <button
          className="text-3xl font-bold hover:text-red-500"
          onClick={() => document.getElementById("Add_Notices_Modal").close()}
        >
          X
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
        {/* Title Input */}
        <div>
          <label className="block font-medium mb-1">Title</label>
          <input
            type="text"
            {...register("title", { required: "Title is required" })}
            className="border border-gray-300 px-4 py-2 w-full bg-white"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        {/* Department Input */}
        <div>
          <label className="block font-medium mb-1">Department</label>
          <input
            type="text"
            {...register("department", { required: "Department is required" })}
            className="border border-gray-300 px-4 py-2 w-full bg-white"
          />
          {errors.department && (
            <p className="text-red-500 text-sm">{errors.department.message}</p>
          )}
        </div>

        {/* Authority Type Input */}
        <div>
          <label className="block font-medium mb-1">Authority Type</label>
          <input
            type="text"
            {...register("authority_type", {
              required: "Authority Type is required",
            })}
            className="border border-gray-300 px-4 py-2 w-full bg-white"
          />
          {errors.authority_type && (
            <p className="text-red-500 text-sm">
              {errors.authority_type.message}
            </p>
          )}
        </div>

        {/* Date Input */}
        <div>
          <label className="block font-medium mb-1">Date</label>
          <input
            type="date"
            {...register("date", { required: "Date is required" })}
            className="border border-gray-300 px-4 py-2 w-full bg-white"
          />
          {errors.date && (
            <p className="text-red-500 text-sm">{errors.date.message}</p>
          )}
        </div>

        {/* Content Input */}
        <div>
          <label className="block font-medium mb-1">Content</label>
          <textarea
            {...register("content", { required: "Content is required" })}
            className="border border-gray-300 px-4 py-2 w-full bg-white"
            rows="5"
          />
          {errors.content && (
            <p className="text-red-500 text-sm">{errors.content.message}</p>
          )}
        </div>

        {/* Link Input */}
        <div>
          <label className="block font-medium mb-1">Link</label>
          <input
            type="url"
            {...register("link", { required: "Link is required" })}
            className="border border-gray-300 px-4 py-2 w-full bg-white"
          />
          {errors.link && (
            <p className="text-red-500 text-sm">{errors.link.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white font-semibold g w-full"
        > 
          Add Notices
        </button>
      </form>
    </div>
  );
};

export default AddNotices;
