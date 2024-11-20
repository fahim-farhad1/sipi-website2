import React, { useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const AddCampus = ({ refetch }) => {
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

  useEffect(() => {
    if (fields.length === 0) {
      append(""); // Append initial empty mobile number field
    }
  }, [append, fields.length]);

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
            className="px-3 py-2 bg-red-500 text-white"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => addFn()}
        className="px-4 py-2 bg-blue-500 text-white w-60 mt-2"
      >
        Add {label.slice(0, -1)}
      </button>
    </div>
  );

  const onSubmit = async (data) => {
    const structuredData = { ...data };
    try {
      const response = await axiosPublic.post("/Campus", structuredData);
      if (response.data.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "Campus has been added successfully!",
          icon: "success",
        });
        reset(); // Reset the form after successful submission
        refetch(); // Refetch to get updated data
        document.getElementById("Add_Campus_Modal").close(); // Close the modal
      }
    } catch (error) {
      console.error("Error adding campus:", error);
      Swal.fire({
        title: "Error!",
        text: "Failed to add the Campus. Please try again.",
        icon: "error",
      });
    }
  };

  return (
    <div className="modal-box bg-white max-w-[1000px] p-0 ">
      <div className="flex justify-between items-center border-b border-gray-300 px-10">
        <h1 className="text-3xl font-semibold text-center mb-6">Add Campus</h1>
        <button
          className="text-3xl font-bold hover:text-red-500"
          onClick={() => document.getElementById("Add_Campus_Modal").close()}
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
          <div className="mb-3">
            <label className="font-medium mb-1 block">Address</label>
            <input
              type="text"
              {...register("campusAddress.address", {
                required: "Address is required",
              })}
              className="border border-gray-300 px-4 py-3 w-full bg-white"
              placeholder="Enter address"
            />
            {errors.campusAddress?.address && (
              <span className="text-red-500">
                {errors.campusAddress.address.message}
              </span>
            )}
          </div>
          <div className="mb-3">
            <label className="font-medium mb-1 block">Area</label>
            <input
              type="text"
              {...register("campusAddress.area", {
                required: "Area is required",
              })}
              className="border border-gray-300 px-4 py-3 w-full bg-white"
              placeholder="Enter area"
            />
            {errors.campusAddress?.area && (
              <span className="text-red-500">
                {errors.campusAddress.area.message}
              </span>
            )}
          </div>
          <div className="mb-3">
            <label className="font-medium mb-1 block">City</label>
            <input
              type="text"
              {...register("campusAddress.city", {
                required: "City is required",
              })}
              className="border border-gray-300 px-4 py-3 w-full bg-white"
              placeholder="Enter city"
            />
            {errors.campusAddress?.city && (
              <span className="text-red-500">
                {errors.campusAddress.city.message}
              </span>
            )}
          </div>
          <div className="mb-3">
            <label className="font-medium mb-1 block">Postal Code</label>
            <input
              type="text"
              {...register("campusAddress.postalCode", {
                required: "Postal code is required",
              })}
              className="border border-gray-300 px-4 py-3 w-full bg-white"
              placeholder="Enter postal code"
            />
            {errors.campusAddress?.postalCode && (
              <span className="text-red-500">
                {errors.campusAddress.postalCode.message}
              </span>
            )}
          </div>
          <div className="mb-3">
            <label className="font-medium mb-1 block">Country</label>
            <input
              type="text"
              {...register("campusAddress.country", {
                required: "Country is required",
              })}
              className="border border-gray-300 px-4 py-3 w-full bg-white"
              placeholder="Enter country"
            />
            {errors.campusAddress?.country && (
              <span className="text-red-500">
                {errors.campusAddress.country.message}
              </span>
            )}
          </div>
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
          Add Campus
        </button>
      </form>
    </div>
  );
};

export default AddCampus;
