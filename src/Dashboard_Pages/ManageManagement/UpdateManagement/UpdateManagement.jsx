import React, { useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const UpdateManagement = ({ ManagementData, refetch }) => {
  const axiosPublic = useAxiosPublic();

  // Initialize the form with default values
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      image: "",
      designation: "",
      department: "",
      email: "",
      phone: "",
      about_me: "",
      background: "",
      responsibilities: [""],
      achievements: [""],
      more_info: "",
    },
  });

  // Handle responsibilities fields
  const {
    fields: responsibilitiesFields,
    append: addResponsibilities,
    remove: removeResponsibilities,
  } = useFieldArray({
    control,
    name: "responsibilities",
  });

  // Handle achievements fields
  const {
    fields: awardAchievements,
    append: addAchievements,
    remove: removeAchievements,
  } = useFieldArray({
    control,
    name: "achievements",
  });

  // Reset the form with the fetched data when ManagementData changes
  useEffect(() => {
    if (ManagementData) {
      reset({
        name: ManagementData.name,
        image: ManagementData.image,
        designation: ManagementData.designation,
        department: ManagementData.department,
        email: ManagementData.email,
        phone: ManagementData.phone,
        about_me: ManagementData.about_me,
        background: ManagementData.background,
        responsibilities: ManagementData.responsibilities || [""],
        achievements: ManagementData.achievements || [""],
        more_info: ManagementData.more_info,
      });
    }
  }, [ManagementData, reset]);

  const onSubmit = async (data) => {
    try {
      // Make the PUT request to update the mentorship by ID
      await axiosPublic.put(`/Management/${ManagementData._id}`, data);

      // Show a success alert
      Swal.fire({
        title: "Success!",
        text: "Mentorship updated successfully",
        icon: "success",
        confirmButtonText: "OK",
      });

      document.getElementById("Update_Management_Modal").close();
      refetch();
    } catch (error) {
      // Show an error alert
      Swal.fire({
        title: "Error!",
        text: "Failed to update mentorship. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });

      console.error("Error updating mentorship:", error);
    }
  };

  // Generic field array rendering function
  const renderFieldArray = (
    fields,
    registerFn,
    removeFn,
    addFn,
    label,
    fieldName
  ) => (
    <div className="mb-3">
      <label className="font-medium mb-1 block">{label}</label>
      {fields.map((item, index) => (
        <div key={item.id} className="flex mt-2">
          <input
            type="text"
            className="border border-gray-300 px-4 py-2 flex-grow bg-white"
            {...registerFn(`${fieldName}.${index}`, {
              required: `${label.slice(0, -1)} is required`,
            })}
            placeholder={`Enter ${label.toLowerCase().slice(0, -1)}`}
          />
          <button
            type="button"
            onClick={() => removeFn(index)}
            className="px-3 py-2 bg-red-500 text-white"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => addFn("")}
        className="px-4 py-2 bg-blue-500 text-white mt-2"
      >
        Add {label.slice(0, -1)}
      </button>
    </div>
  );

  return (
    <div className="modal-box bg-white max-w-[1000px] p-0 ">
      <div className="flex justify-between items-center border-b border-gray-300 px-10">
        <h1 className="text-3xl font-semibold text-center mb-6">
          Update Management
        </h1>
        <button
          className="text-3xl font-bold hover:text-red-500"
          onClick={() =>
            document.getElementById("Update_Management_Modal").close()
          }
        >
          X
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
        {/* Name */}
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="border border-gray-300 px-4 py-2 w-full bg-white"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Image URL */}
        <div>
          <label className="block font-medium mb-1">Image URL</label>
          <input
            type="text"
            {...register("image", { required: "Image URL is required" })}
            className="border border-gray-300 px-4 py-2 w-full bg-white"
          />
          {errors.image && (
            <p className="text-red-500 text-sm">{errors.image.message}</p>
          )}
        </div>

        {/* Designation */}
        <div>
          <label className="block font-medium mb-1">Designation</label>
          <input
            type="text"
            {...register("designation", {
              required: "Designation is required",
            })}
            className="border border-gray-300 px-4 py-2 w-full bg-white"
          />
          {errors.designation && (
            <p className="text-red-500 text-sm">{errors.designation.message}</p>
          )}
        </div>

        {/* Department */}
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

        {/* Email */}
        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="border border-gray-300 px-4 py-2 w-full bg-white"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block font-medium mb-1">Phone</label>
          <input
            type="text"
            {...register("phone", { required: "Phone is required" })}
            className="border border-gray-300 px-4 py-2 w-full bg-white"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>

        {/* About me */}
        <div>
          <label className="block font-medium mb-1">About me</label>
          <textarea
            {...register("about_me", { required: "About me is required" })}
            className="border border-gray-300 h-28 px-4 py-2 w-full bg-white"
          />
          {errors.about_me && (
            <p className="text-red-500 text-sm">{errors.about_me.message}</p>
          )}
        </div>

        {/* Background */}
        <div>
          <label className="block font-medium mb-1">Background</label>
          <textarea
            {...register("background", { required: "Background is required" })}
            className="border border-gray-300 h-28 px-4 py-2 w-full bg-white"
          />
          {errors.background && (
            <p className="text-red-500 text-sm">{errors.background.message}</p>
          )}
        </div>

        {/* Responsibilities */}
        {renderFieldArray(
          responsibilitiesFields,
          register,
          removeResponsibilities,
          addResponsibilities,
          "Responsibilities",
          "responsibilities"
        )}

        {/* Achievements */}
        {renderFieldArray(
          awardAchievements,
          register,
          removeAchievements,
          addAchievements,
          "Achievements",
          "achievements"
        )}

        {/* More Info */}
        <div>
          <label className="block font-medium mb-1">More Info</label>
          <textarea
            {...register("more_info", { required: "More Info is required" })}
            className="border border-gray-300 h-28 px-4 py-2 w-full bg-white"
          />
          {errors.more_info && (
            <p className="text-red-500 text-sm">{errors.more_info.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white font-semibold g w-full"
        >
          Update Management
        </button>
      </form>
    </div>
  );
};

export default UpdateManagement;
