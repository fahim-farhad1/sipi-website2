import React from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

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

const AddGuestTestimonials = ({ refetch }) => {
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const structuredData = {
      name: data.name,
      position: data.position,
      image: data.image,
      date_of_visit: new Date().toISOString().split("T")[0], // Use the correct key
      testimonial: data.testimonial, // Use the correct key
      comments: data.comments, // Add comments field
    };

    try {
      const response = await axiosPublic.post(
        "/GuestTestimonials",
        structuredData
      );

      if (response.data.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "Testimonial has been added successfully!",
          icon: "success",
          button: "OK",
        });
      }
      document.getElementById("Add_GuestTestimonials_Modal").close();
      refetch();
      reset();
    } catch (error) {
      console.error("Error adding testimonial:", error);

      Swal.fire({
        title: "Error!",
        text: "Failed to add the testimonial. Please try again.",
        icon: "error",
        button: "OK",
      });
    }
  };

  return (
    <div className="modal-box bg-white max-w-[1000px] p-0 ">
      <div className="flex justify-between items-center border-b border-gray-300 px-10">
        <h1 className="text-3xl font-semibold text-center mb-6">
          Add Guest Testimonials
        </h1>
        <button
          className="text-3xl font-bold hover:text-red-500"
          onClick={() =>
            document.getElementById("Add_GuestTestimonials_Modal").close()
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
          label="Comments"
          name="comments"
          register={register}
          validationRules={{ required: "Comments are required" }}
          error={errors.comments}
          isTextarea
          rows={3}
        />
        <FormField
          label="Testimonial Content"
          name="testimonial"
          register={register}
          validationRules={{ required: "Testimonial content is required" }}
          error={errors.testimonial}
          isTextarea
          rows={4}
        />

        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white font-semibold g w-full"
        >
          Add Guest Testimonials
        </button>
      </form>
    </div>
  );
};

export default AddGuestTestimonials;
