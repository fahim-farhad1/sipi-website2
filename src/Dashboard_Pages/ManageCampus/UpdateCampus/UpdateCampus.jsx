import React, { useEffect } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useFieldArray, useForm } from "react-hook-form";
import Swal from "sweetalert2";

const UpdateCampus = ({ CampusData, refetch }) => {
  const axiosPublic = useAxiosPublic();

  // Initialize React Hook Form
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  // Field Array for mobile numbers
  const { fields, append, remove } = useFieldArray({
    control,
    name: "mobileNumbers",
  });

  // Populate form fields with existing campus data
  useEffect(() => {
    if (CampusData) {
      reset({
        campus: CampusData.campus || "",
        campusAddress: {
          address: CampusData.campusAddress?.address || "",
          area: CampusData.campusAddress?.area || "",
          city: CampusData.campusAddress?.city || "",
          postalCode: CampusData.campusAddress?.postalCode || "",
          country: CampusData.campusAddress?.country || "",
        },
        emailAddress: CampusData.emailAddress || "",
        mobileNumbers: CampusData.mobileNumbers || [""],
        googleMapsLink: CampusData.googleMapsLink || "",
        campusImg: CampusData.campusImg || "",
      });
    }
  }, [CampusData, reset]);

  const onSubmit = async (data) => {
    try {
      await axiosPublic.put(`/Campus/${CampusData._id}`, data);

      Swal.fire({
        title: "Success!",
        text: "Campus updated successfully.",
        icon: "success",
        confirmButtonText: "OK",
      });

      document.getElementById("Update_Campus_Modal").close();
      refetch();
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Failed to update campus. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
      console.error("Error updating campus:", error);
    }
  };

  const renderFieldArray = (fields, removeFn, addFn, label, fieldName) => (
    <div className="mb-3">
      <label className="font-medium mb-1 block">{label}</label>
      {fields.map((item, index) => (
        <div key={item.id} className="flex mt-2">
          <input
            type="text"
            className="border border-gray-300 px-4 py-3 flex-grow bg-white"
            {...register(`${fieldName}[${index}]`, {
              required: `${label.slice(0, -1)} is required`,
            })}
            placeholder={`Enter ${label.toLowerCase().slice(0, -1)}`}
          />
          <button
            type="button"
            onClick={() => removeFn(index)}
            className="ml-2 px-3 py-2 bg-red-500 text-white rounded"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={addFn}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Add {label.slice(0, -1)}
      </button>
    </div>
  );

  return (
    <div className="modal-box bg-white max-w-[1000px] p-0 ">
      <div className="flex justify-between items-center border-b border-gray-300 px-10">
        <h1 className="text-3xl font-semibold text-center mb-6">
          Update Campus
        </h1>
        <button
          className="text-3xl font-bold hover:text-red-500"
          onClick={() => document.getElementById("Update_Campus_Modal").close()}
        >
          X
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="p-8">
        {/* Campus Name */}
        <div className="mb-3">
          <label className="font-medium mb-1 block">Campus Name</label>
          <input
            type="text"
            {...register("campus", { required: "Campus name is required" })}
            className="border border-gray-300 px-4 py-3 w-full bg-white"
            placeholder="Enter campus name"
          />
          {errors.campus && (
            <span className="text-red-500">{errors.campus.message}</span>
          )}
        </div>

        {/* Campus Address */}
        <div className="grid grid-cols-2 gap-4">
          {["address", "area", "city", "postalCode", "country"].map((field) => (
            <div key={field} className="mb-3">
              <label className="font-medium mb-1 block">
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                type="text"
                {...register(`campusAddress.${field}`, {
                  required: `${
                    field.charAt(0).toUpperCase() + field.slice(1)
                  } is required`,
                })}
                className="border border-gray-300 px-4 py-3 w-full bg-white"
                placeholder={`Enter ${field}`}
              />
              {errors.campusAddress?.[field] && (
                <span className="text-red-500">
                  {errors.campusAddress[field]?.message}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Numbers */}
        {renderFieldArray(
          fields,
          remove,
          append,
          "Mobile Numbers",
          "mobileNumbers"
        )}

        {/* Email Address */}
        <div className="mb-3">
          <label className="font-medium mb-1 block">Email Address</label>
          <input
            type="email"
            {...register("emailAddress", { required: "Email is required" })}
            className="border border-gray-300 px-4 py-3 w-full bg-white"
            placeholder="Enter email address"
          />
          {errors.emailAddress && (
            <span className="text-red-500">{errors.emailAddress.message}</span>
          )}
        </div>

        {/* Google Maps Link */}
        <div className="mb-3">
          <label className="font-medium mb-1 block">Google Maps Link</label>
          <input
            type="url"
            {...register("googleMapsLink", {
              required: "Google Maps link is required",
            })}
            className="border border-gray-300 px-4 py-3 w-full bg-white"
            placeholder="Enter Google Maps link"
          />
          {errors.googleMapsLink && (
            <span className="text-red-500">
              {errors.googleMapsLink.message}
            </span>
          )}
        </div>

        {/* Campus Image URL */}
        <div className="mb-3">
          <label className="font-medium mb-1 block">Campus Image URL</label>
          <input
            type="url"
            {...register("campusImg", {
              required: "Campus image URL is required",
            })}
            className="border border-gray-300 px-4 py-3 w-full bg-white"
            placeholder="Enter campus image URL"
          />
          {errors.campusImg && (
            <span className="text-red-500">{errors.campusImg.message}</span>
          )}
        </div>

        {/* Submit Button */}

        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white font-semibold g w-full"
        >
          Update Campus
        </button>
      </form>
    </div>
  );
};

export default UpdateCampus;
