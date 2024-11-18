import React, { useEffect } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useForm, useFieldArray } from "react-hook-form";
import Swal from "sweetalert2";

const AddManagement = ({ refetch, managementData = {} }) => {
  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: managementData?.name || "",
      image: managementData?.image || "",
      designation: managementData?.designation || "",
      department: managementData?.department || "",
      email: managementData?.email || "",
      phone: managementData?.phone || "",
      about_me: managementData?.about_me || "",
      background: managementData?.background || "",
      responsibilities: managementData?.responsibilities || [""],
      achievements: managementData?.achievements || [""],
      more_info: managementData?.more_info || "",
    },
  });

  const onSubmit = async (data) => {
    const structuredData = {
      image: data.image,
      name: data.name,
      designation: data.designation,
      department: data.department,
      email: data.email,
      phone: data.phone,
      about_me: data.about_me,
      background: data.background,
      responsibilities: data.responsibilities,
      achievements: data.achievements,
      more_info: data.more_info,
    };

    try {
      // Sending POST request to save teacher data
      const response = await axiosPublic.post("/Management", structuredData);

      if (response.data.insertedId) {
        // Show success alert
        Swal.fire({
          title: "Success!",
          text: "Management has been added successfully!",
          icon: "success",
          button: "OK",
        });
      }
      document.getElementById("Add_Management_Modal").close();
      refetch();
      reset();
    } catch (error) {
      console.error("Error adding teacher:", error);

      // Show error alert
      Swal.fire({
        title: "Error!",
        text: "Failed to add the Management. Please try again.",
        icon: "error",
        button: "OK",
      });
    }
  };

  const {
    fields: responsibilitiesFields,
    append: addResponsibilities,
    remove: removeResponsibilities,
  } = useFieldArray({
    control,
    name: "responsibilities",
  });

  const {
    fields: awardAchievements,
    append: addAchievements,
    remove: removeAchievements,
  } = useFieldArray({
    control,
    name: "achievements",
  });

  useEffect(() => {
    if (responsibilitiesFields.length === 0) {
      addResponsibilities("");
    }
    if (awardAchievements.length === 0) {
      addAchievements("");
    }
  }, [
    addResponsibilities,
    removeResponsibilities,
    addAchievements,
    removeAchievements,
  ]);

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
            className="border border-gray-300  px-4 py-3 flex-grow bg-white"
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
        className="px-4 py-2 bg-blue-500 text-white w-60 mt-2"
      >
        Add {label.slice(0, -1)}
      </button>
    </div>
  );

  return (
    <div className="modal-box bg-white max-w-[800px] p-0">
      <div className="flex justify-between items-center px-10">
        <h1 className="text-3xl font-semibold text-center mb-6">
          {managementData?._id ? "Edit Management" : "Add Management"}
        </h1>
        <button
          className="text-3xl font-bold hover:text-red-500"
          onClick={() =>
            document.getElementById("Add_Management_Modal").close()
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
            {...register("department", {
              required: "Department is required",
            })}
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
            {...register("email", {
              required: "Email is required",
            })}
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
            {...register("phone", {
              required: "Phone is required",
            })}
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
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg"
          >
            Add Management
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddManagement;
