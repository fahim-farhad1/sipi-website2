import React, { useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const AddTeacher = ({ refetch }) => {
  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      subjects_taught: [""],
      awards: [""],
      notable_contributions: [""],
      name: "",
      image: "",
      designation: "",
      department: "",
      award_date: "",
      about_me: "",
      background: "",
      more_info: "",
    },
  });

  const {
    fields: subjectFields,
    append: addSubject,
    remove: removeSubject,
  } = useFieldArray({
    control,
    name: "subjects_taught",
  });

  const {
    fields: awardFields,
    append: addAward,
    remove: removeAward,
  } = useFieldArray({
    control,
    name: "awards",
  });

  const {
    fields: contributionFields,
    append: addContribution,
    remove: removeContribution,
  } = useFieldArray({
    control,
    name: "notable_contributions",
  });

  useEffect(() => {
    if (subjectFields.length === 0) {
      addSubject("");
    }
    if (awardFields.length === 0) {
      addAward("");
    }
    if (contributionFields.length === 0) {
      addContribution("");
    }
  }, [
    subjectFields,
    addSubject,
    awardFields,
    addAward,
    contributionFields,
    addContribution,
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

  const onSubmit = async (data) => {
    const structuredData = {
      image: data.image,
      name: data.name,
      designation: data.designation,
      department: data.department,
      subjects_taught: data.subjects_taught,
      awards: data.awards,
      award_date: data.award_date, // Assuming you have this field in your form
      notable_contributions: data.notable_contributions,
      about_me: data.about_me,
      background: data.background,
      more_info: data.more_info, // Assuming you have this field in your form
    };

    try {
      // Sending POST request to save teacher data
      const response = await axiosPublic.post("/Teachers", structuredData);

      if (response.data.insertedId) {
        // Show success alert
        Swal.fire({
          title: "Success!",
          text: "Teacher has been added successfully!",
          icon: "success",
          button: "OK",
        });
      }
      document.getElementById("Add_Teacher_Modal").close();
      refetch();
      reset();
    } catch (error) {
      console.error("Error adding teacher:", error);

      // Show error alert
      Swal.fire({
        title: "Error!",
        text: "Failed to add the teacher. Please try again.",
        icon: "error",
        button: "OK",
      });
    }
  };

  return (
    <div className="modal-box bg-white max-w-[800px] p-0">
      <div className="flex justify-between items-center px-10">
        <h1 className="text-3xl font-semibold text-center mb-6">Add Teacher</h1>
        <button
          className="text-3xl font-bold hover:text-red-500"
          onClick={() => document.getElementById("Add_Teacher_Modal").close()}
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
          <select
            {...register("designation", {
              required: "Designation is required",
            })}
            className="border border-gray-300 px-4 py-2 w-full bg-white"
          >
            <option value="">Select Designation</option>
            <option value="Chief Instructor">Chief Instructor</option>
            <option value="Senior Instructor">Senior Instructor</option>
            <option value="Junior Instructor">Junior Instructor</option>
            <option value="New Instructor">New Instructor</option>
            <option value="Intern">Intern</option>
          </select>
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

        {/* Subjects Taught */}
        {renderFieldArray(
          subjectFields,
          register,
          removeSubject,
          addSubject,
          "Subjects Taught",
          "subjects_taught"
        )}

        {/* Awards */}
        {renderFieldArray(
          awardFields,
          register,
          removeAward,
          addAward,
          "Awards",
          "awards"
        )}

        {/* Notable Contributions */}
        {renderFieldArray(
          contributionFields,
          register,
          removeContribution,
          addContribution,
          "Notable Contributions",
          "notable_contributions"
        )}

        {/* Award Date */}
        <div>
          <label className="block font-medium mb-1">Award Date</label>
          <input
            type="date"
            {...register("award_date", { required: "Award Date is required" })}
            className="border border-gray-300 px-4 py-2 w-full bg-white"
          />
          {errors.award_date && (
            <p className="text-red-500 text-sm">{errors.award_date.message}</p>
          )}
        </div>

        {/* About Me */}
        <div>
          <label className="block font-medium mb-1">About Me</label>
          <textarea
            {...register("about_me", { required: "About Me is required" })}
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
            Add Teacher
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTeacher;
