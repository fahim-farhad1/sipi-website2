import React, { useEffect } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2"; // Make sure you import Swal for alerts

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

const UpdateTestimonials = ({ refetch, TestimonialsData }) => {
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (TestimonialsData) {
      reset({
        name: TestimonialsData.name,
        position: TestimonialsData.position,
        department: TestimonialsData.department,
        image: TestimonialsData.image,
        content: TestimonialsData.content,
      });
    }
  }, [TestimonialsData, reset]);

  const onSubmit = async (data) => {
    try {
      // Make the PUT request to update the mentorship by ID
      await axiosPublic.put(`/Testimonials/${TestimonialsData._id}`, data);

      // Show a success alert
      Swal.fire({
        title: "Success!",
        text: "Mentorship updated successfully",
        icon: "success",
        confirmButtonText: "OK",
      });

      document.getElementById("Update_Testimonials_Modal").close();
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

  return (
    <div className="modal-box bg-white max-w-[1000px] p-0 ">
      <div className="flex justify-between items-center border-b border-gray-300 px-10">
        <h1 className="text-3xl font-semibold text-center mb-6">
          Update Testimonials
        </h1>
        <button
          className="text-3xl font-bold hover:text-red-500"
          onClick={() =>
            document.getElementById("Update_Testimonials_Modal").close()
          }
        >
          X
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
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
          label="Testimonials"
          name="department"
          register={register}
          validationRules={{ required: "Testimonials is required" }}
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

        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white font-semibold g w-full"
        >
          Update Teacher
        </button>
      </form>
    </div>
  );
};

export default UpdateTestimonials;
