import React from "react";
import { useForm, useFieldArray } from "react-hook-form";

const AddTeacher = ({ refetch }) => {
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

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
    reset();
  };

  const ensureMinimumFields = (removeFn, appendFn, fields) => (index) => {
    if (fields.length === 1) {
      appendFn(""); // Add a new empty field if only one field remains
    }
    removeFn(index);
  };

  return (
    <div className="modal-box bg-white max-w-[800px] p-0">
      <h1 className="text-3xl font-semibold text-center mb-6">Add Teacher</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded-lg p-6 max-w-2xl mx-auto space-y-4"
      >
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

        {/* Image */}
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
            className="border border-gray-300 rounded-lg px-4 py-2 w-full bg-white"
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

        {/* Subjects Taught */}
        <div>
          <label className="block font-medium mb-1">Subjects Taught</label>
          {subjectFields.map((field, index) => (
            <div key={field.id} className="flex items-center gap-2 mb-2">
              <input
                type="text"
                {...register(`subjects_taught.${index}`, {
                  required: "Subject is required",
                })}
                className="border border-gray-300 rounded-lg px-4 py-2 flex-grow"
              />
              <button
                type="button"
                onClick={ensureMinimumFields(
                  removeSubject,
                  addSubject,
                  subjectFields
                )(index)}
                className="px-3 py-2 bg-red-500 text-white rounded-md"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => addSubject("")}
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Add Subject
          </button>
        </div>

        {/* Awards */}
        <div>
          <label className="block font-medium mb-1">Awards</label>
          {awardFields.map((field, index) => (
            <div key={field.id} className="flex items-center gap-2 mb-2">
              <input
                type="text"
                {...register(`awards.${index}`, {
                  required: "Award is required",
                })}
                className="border border-gray-300 rounded-lg px-4 py-2 flex-grow"
              />
              <button
                type="button"
                onClick={ensureMinimumFields(
                  removeAward,
                  addAward,
                  awardFields
                )(index)}
                className="px-3 py-2 bg-red-500 text-white rounded-md"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => addAward("")}
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Add Award
          </button>
        </div>

        {/* Notable Contributions */}
        <div>
          <label className="block font-medium mb-1">
            Notable Contributions
          </label>
          {contributionFields.map((field, index) => (
            <div key={field.id} className="flex items-center gap-2 mb-2">
              <input
                type="text"
                {...register(`notable_contributions.${index}`, {
                  required: "Contribution is required",
                })}
                className="border border-gray-300 rounded-lg px-4 py-2 flex-grow"
              />
              <button
                type="button"
                onClick={ensureMinimumFields(
                  removeContribution,
                  addContribution,
                  contributionFields
                )(index)}
                className="px-3 py-2 bg-red-500 text-white rounded-md"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => addContribution("")}
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Add Contribution
          </button>
        </div>

        {/* About Me */}
        <div>
          <label className="block font-medium mb-1">About Me</label>
          <textarea
            {...register("about_me", { required: "About Me is required" })}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full"
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
            className="border border-gray-300 rounded-lg px-4 py-2 w-full"
          />
          {errors.background && (
            <p className="text-red-500 text-sm">{errors.background.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTeacher;
