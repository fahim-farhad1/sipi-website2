import React, { useEffect } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const UpdateNotices = ({ NoticesData, refetch }) => {
  const axiosPublic = useAxiosPublic();

  // Initialize the form with default values
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      department: "",
      authority_type: "",
      date: "",
      content: "", // content from details
      link: "", // link from details
    },
  });

  // Reset the form with the fetched data when NoticesData changes
  useEffect(() => {
    if (NoticesData) {
      reset({
        title: NoticesData.title,
        department: NoticesData.department,
        authority_type: NoticesData.authority_type,
        date: NoticesData.date,
        content: NoticesData.details?.content || "", // set content from details
        link: NoticesData.details?.link || "", // set link from details
      });
    }
  }, [NoticesData, reset]);

  const onSubmit = async (data) => {
    try {
      // Make the PUT request to update the notice by ID
      const updatedData = {
        title: data.title,
        department: data.department,
        authority_type: data.authority_type,
        date: data.date,
        details: {
          content: data.content,
          link: data.link,
        },
      };

      await axiosPublic.put(`/Notices/${NoticesData._id}`, updatedData);

      // Show a success alert
      Swal.fire({
        title: "Success!",
        text: "Notice updated successfully",
        icon: "success",
        confirmButtonText: "OK",
      });

      document.getElementById("Update_Notices_Modal").close();
      refetch();
    } catch (error) {
      // Show an error alert
      Swal.fire({
        title: "Error!",
        text: "Failed to update the notice. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });

      console.error("Error updating notice:", error);
    }
  };

  return (
    <div className="modal-box bg-white max-w-[800px] p-0">
      <div className="flex justify-between items-center px-10">
        <h1 className="text-3xl font-semibold text-center mb-6">
          Update Notices Data
        </h1>
        <button
          className="text-3xl font-bold hover:text-red-500"
          onClick={() =>
            document.getElementById("Update_Notices_Modal").close()
          }
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
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg"
          >
            Update Notice
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateNotices;
