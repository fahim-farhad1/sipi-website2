import React, { useEffect } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useForm, useFieldArray } from "react-hook-form";

const UpdateBlogs = ({ BlogsData, refetch }) => {
  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  // Handling dynamic field arrays (for tags and comments)
  const {
    fields: tagsFields,
    append: addTags,
    remove: removeTags,
  } = useFieldArray({
    control,
    name: "tags",
  });

  const {
    fields: commentsFields,
    append: addComment,
    remove: removeComment,
  } = useFieldArray({
    control,
    name: "comments",
  });

  // Reset the form with BlogsData when it's available
  useEffect(() => {
    if (BlogsData) {
      reset({
        title: BlogsData.title,
        authorName: BlogsData.authorName,
        publicationDate: BlogsData.publicationDate,
        category: BlogsData.category,
        tags: BlogsData.tags || [], // Initialize tags field
        content: BlogsData.content,
        featuredImage: BlogsData.featuredImage,
        shortDescription: BlogsData.shortDescription,
        readingTime: BlogsData.readingTime,
        authorProfile: BlogsData.authorProfile || {}, // Initialize author profile
        comments: BlogsData.comments || [], // Initialize comments field
      });
    }
  }, [BlogsData, reset]);

  const onSubmit = async (data) => {
    try {
      // Make the PUT request to update the blog post by ID
      await axiosPublic.put(`/Blogs/${BlogsData._id}`, data);

      // Show a success alert
      Swal.fire({
        title: "Success!",
        text: "Blog updated successfully",
        icon: "success",
        confirmButtonText: "OK",
      });

      document.getElementById("Update_Blogs_Modal").close();
      refetch();
    } catch (error) {
      // Show an error alert
      Swal.fire({
        title: "Error!",
        text: "Failed to update the blog. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });

      console.error("Error updating blog:", error);
    }
  };

  // Render input fields for tag and comment fields with error handling
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
            className="border border-gray-300 px-4 py-3 flex-grow bg-white"
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
      {errors[fieldName] && (
        <span className="text-red-500 text-sm">
          {errors[fieldName]?.message}
        </span>
      )}
      <button
        type="button"
        onClick={() => addFn("")}
        className="px-4 py-2 bg-blue-500 text-white w-60 mt-2"
      >
        Add {label.slice(0, -1)}
      </button>
    </div>
  );

  // Regular form field (input/textarea) component with error handling
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
      <div className="mb-3">
        <label className="font-medium mb-1 block">{label}</label>
        <Field
          {...register(name, validationRules)}
          className="border border-gray-300 px-4 py-3 w-full bg-white"
          {...rest}
        />
        {error && <span className="text-red-500">{error.message}</span>}
      </div>
    );
  };

  return (
    <div className="modal-box bg-white max-w-[1000px] p-0">
      <div className="flex justify-between items-center border-b border-gray-300 px-10">
        <h1 className="text-3xl font-semibold text-center mb-6">
          Update Blogs
        </h1>
        <button
          className="text-3xl font-bold hover:text-red-500"
          onClick={() => document.getElementById("Update_Blogs_Modal").close()}
        >
          X
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="px-10 py-8 space-y-4">
        <FormField
          label="Title"
          name="title"
          register={register}
          validationRules={{ required: "Title is required" }}
          error={errors.title}
        />
        <FormField
          label="Author Name"
          name="authorName"
          register={register}
          validationRules={{ required: "Author name is required" }}
          error={errors.authorName}
        />

        {/* Publication Date */}
        <div>
          <label className="block font-medium mb-1">Publication Date</label>
          <input
            type="date"
            {...register("publicationDate")}
            className="border border-gray-300 px-4 py-2 w-full bg-white"
          />
        </div>

        <FormField
          label="Category"
          name="category"
          register={register}
          validationRules={{ required: "Category is required" }}
          error={errors.category}
        />

        {renderFieldArray(
          tagsFields,
          register,
          removeTags,
          addTags,
          "Tags",
          "tags"
        )}

        <FormField
          label="Content"
          name="content"
          isTextarea={true}
          register={register}
          validationRules={{ required: "Content is required" }}
          error={errors.content}
        />

        {/* Featured Image URL */}
        <div>
          <label className="block font-medium mb-1">Featured Image URL</label>
          <input
            type="url"
            {...register("featuredImage")}
            className="border border-gray-300 px-4 py-2 w-full bg-white"
          />
        </div>

        <FormField
          label="Short Description"
          name="shortDescription"
          register={register}
          validationRules={{ required: "Short description is required" }}
          error={errors.shortDescription}
        />

        <FormField
          label="Reading Time"
          name="readingTime"
          register={register}
          validationRules={{ required: "Reading time is required" }}
          error={errors.readingTime}
        />

        {/* Author Profile */}
        <FormField
          label="Author Bio"
          name="authorProfile.bio"
          isTextarea={true}
          register={register}
          validationRules={{ required: "Author bio is required" }}
          error={errors.authorProfile?.bio}
        />

        {/* Author Profile Picture URL */}
        <div>
          <label className="block font-medium mb-1">
            Author Profile Picture URL
          </label>
          <input
            type="url"
            {...register("authorProfile.profilePicture")}
            className="border border-gray-300 px-4 py-2 w-full bg-white"
          />
        </div>

        {/* Handle comments dynamically */}
        <div className="mb-3">
          <label className="font-medium mb-1 block">Comments</label>
          {commentsFields.map((comment, index) => (
            <div key={comment.id} className="flex flex-col space-y-2 mt-2">
              <input
                type="text"
                className="border border-gray-300 px-4 py-3 bg-white"
                {...register(`comments.${index}.user`, {
                  required: "User name is required",
                })}
                placeholder="Enter user name"
              />
              <textarea
                className="border border-gray-300 px-4 py-3 bg-white"
                {...register(`comments.${index}.comment`, {
                  required: "Comment is required",
                })}
                placeholder="Enter comment"
              ></textarea>
              <input
                type="date"
                className="border border-gray-300 px-4 py-2 bg-white"
                {...register(`comments.${index}.date`, {
                  required: "Date is required",
                })}
              />
              <button
                type="button"
                onClick={() => removeComment(index)}
                className="px-3 py-2 bg-red-500 text-white"
              >
                Remove Comment
              </button>
            </div>
          ))}
          {errors.comments && (
            <span className="text-red-500 text-sm">
              {errors.comments?.message}
            </span>
          )}
          <button
            type="button"
            onClick={() => addComment({ user: "", comment: "", date: "" })}
            className="px-4 py-2 mt-5 bg-blue-500 text-white"
          >
            Add Comment
          </button>
        </div>
        {/* Handle comments dynamically */}
        <div className="mb-3">
          <label className="font-medium mb-1 block">Comments</label>
          {commentsFields.map((comment, index) => (
            <div key={comment.id} className="flex flex-col space-y-2 mt-2">
              <input
                type="text"
                className="border border-gray-300 px-4 py-3 bg-white"
                {...register(`comments.${index}.user`, {
                  required: "User name is required",
                })}
                placeholder="Enter user name"
              />
              <textarea
                className="border border-gray-300 px-4 py-3 bg-white"
                {...register(`comments.${index}.comment`, {
                  required: "Comment is required",
                })}
                placeholder="Enter comment"
              ></textarea>
              <input
                type="date"
                className="border border-gray-300 px-4 py-2 bg-white"
                {...register(`comments.${index}.date`, {
                  required: "Date is required",
                })}
              />
              <button
                type="button"
                onClick={() => removeComment(index)}
                className="px-3 py-2 bg-red-500 text-white"
              >
                Remove Comment
              </button>
            </div>
          ))}
          {errors.comments && (
            <span className="text-red-500 text-sm">
              {errors.comments?.message}
            </span>
          )}
          <button
            type="button"
            onClick={() => addComment({ user: "", comment: "", date: "" })}
            className="px-4 py-2 mt-5 bg-blue-500 text-white"
          >
            Add Comment
          </button>
        </div>
        {/* Submit Button */}

        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white font-semibold g w-full"
        >
          Update Blogs
        </button>
      </form>
    </div>
  );
};

export default UpdateBlogs;
