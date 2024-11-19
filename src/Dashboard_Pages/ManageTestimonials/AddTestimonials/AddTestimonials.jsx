import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const FormField = ({
  label,
  type = "text",
  name,
  register,
  validationRules = {},
  error,
  isTextarea = false,
  ...rest
}) => {
  const Field = isTextarea ? "textarea" : "input";
  return (
    <div className="mb-4">
      <label className="font-medium mb-1 block">{label}</label>
      <Field
        {...register(name, validationRules)}
        className="border border-gray-300 px-4 py-3 w-full bg-white rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
        {...rest}
      />
      {error && <span className="text-red-500">{error.message}</span>}
    </div>
  );
};

const AddTestimonials = ({ refetch }) => {
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Function to handle form submission
  const onSubmit = async (data) => {
    // We exclude the _id field since it's generated automatically in the backend
    const structuredData = {
      name: data.name,
      position: data.position,
      department: data.department,
      image: data.image,
      date: new Date().toISOString().split("T")[0], // Current date
      content: data.content,
    };

    try {
      // Sending POST request to save the testimonial data
      const response = await axiosPublic.post("/Testimonials", structuredData);

      if (response.data.insertedId) {
        // Show success alert
        Swal.fire({
          title: "Success!",
          text: "Testimonial has been added successfully!",
          icon: "success",
          button: "OK",
        });
      }
      // Close the modal and reset form
      document.getElementById("Add_Testimonials_Modal").close();
      refetch();
      reset();
    } catch (error) {
      console.error("Error adding testimonial:", error);

      // Show error alert
      Swal.fire({
        title: "Error!",
        text: "Failed to add the testimonial. Please try again.",
        icon: "error",
        button: "OK",
      });
    }
  };

  return (
    <div className="modal-box bg-white max-w-[1000px] rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center pb-4 border-b border-gray-300">
        <h1 className="text-3xl font-semibold text-gray-700">
          Add Testimonials
        </h1>
        <button
          className="text-3xl font-bold text-gray-700 hover:text-red-500"
          onClick={() =>
            document.getElementById("Add_Testimonials_Modal").close()
          }
        >
          X
        </button>
      </div>

      <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
        <FormField
          label="Name"
          name="name"
          register={register}
          validationRules={{ required: "Name is required" }}
          error={errors.name}
        />
        <FormField
          label="Position"
          name="position"
          register={register}
          validationRules={{ required: "Position is required" }}
          error={errors.position}
        />
        <FormField
          label="Department"
          name="department"
          register={register}
          validationRules={{ required: "Department is required" }}
          error={errors.department}
        />
        <FormField
          label="Image URL"
          name="image"
          register={register}
          validationRules={{
            required: "Image URL is required",
            pattern: {
              value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg|webp))$/i,
              message: "Enter a valid image URL",
            },
          }}
          error={errors.image}
        />
        <FormField
          label="Testimonial Content"
          name="content"
          register={register}
          validationRules={{ required: "Content is required" }}
          error={errors.content}
          isTextarea
          rows={4}
        />

        {/* Submit Button */}
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg"
          >
            Add Testimonials
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTestimonials;
