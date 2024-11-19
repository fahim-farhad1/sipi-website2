import React, { useEffect } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useFieldArray, useForm } from "react-hook-form";
import Swal from "sweetalert2";

const UpdateDepartment = ({ DepartmentData, refetch }) => {
  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    control,
    reset,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      departmentName: "",
      departmentBanner: "",
      aboutDepartment: "",
      departmentInfo: {
        chief_instructor: "",
        current_students: "",
        passed_students: "",
        job_placement: "",
        total_teachers: "",
      },
      objectives: [""],
      features: [""],
      success: [""],
      requirements: [""],
      lab_facilities: [""],
      qualifications: "",
      duration: "",
      course_outline: [{ semester: "", subjects: [""] }],
      scholarship: {
        description: "",
        eligibility: "",
      },
      bteb_thoughts: "",
      regulation: "",
      galleryImages: [""],
    },
  });

  const {
    fields: objectivesFields,
    append: addObjectives,
    remove: removeObjectives,
  } = useFieldArray({
    control,
    name: "objectives",
  });

  const {
    fields: featuresFields,
    append: addFeatures,
    remove: removeFeatures,
  } = useFieldArray({
    control,
    name: "features",
  });

  const {
    fields: successFields,
    append: addSuccess,
    remove: removeSuccess,
  } = useFieldArray({
    control,
    name: "success",
  });

  const {
    fields: requirementsFields,
    append: addRequirements,
    remove: removeRequirements,
  } = useFieldArray({
    control,
    name: "requirements",
  });

  const {
    fields: labFacilitiesFields,
    append: addLabFacilities,
    remove: removeLabFacilities,
  } = useFieldArray({
    control,
    name: "lab_facilities",
  });

  const {
    fields: courseOutlineFields,
    append: addCourseOutline,
    remove: removeCourseOutline,
  } = useFieldArray({
    control,
    name: "course_outline",
  });

  const {
    fields: galleryImagesFields,
    append: addGalleryImages,
    remove: removeGalleryImages,
  } = useFieldArray({
    control,
    name: "galleryImages",
  });

  const addSubject = (index) => {
    const courseOutline = getValues(`course_outline`);
    courseOutline[index].subjects.push("");
    setValue("course_outline", courseOutline);
  };

  const removeSubject = (courseIndex, subjectIndex) => {
    const courseOutline = getValues("course_outline");
    courseOutline[courseIndex].subjects.splice(subjectIndex, 1);
    setValue("course_outline", courseOutline);
  };

  useEffect(() => {
    if (courseOutlineFields.length === 0) {
      addCourseOutline({ semester: "", subjects: [""] });
    }
  }, [addCourseOutline, courseOutlineFields.length]);

  useEffect(() => {
    if (DepartmentData) {
      reset({
        departmentBanner: DepartmentData.departmentBanner,
        departmentName: DepartmentData.departmentName,
        aboutDepartment: DepartmentData.aboutDepartment,
        departmentInfo: {
          chief_instructor:
            DepartmentData.departmentInfo?.chief_instructor || "",
          current_students:
            DepartmentData.departmentInfo?.current_students || 0,
          passed_students: DepartmentData.departmentInfo?.passed_students || 0,
          job_placement: DepartmentData.departmentInfo?.job_placement || 0,
          total_teachers: DepartmentData.departmentInfo?.total_teachers || 0,
        },
        objectives: DepartmentData.objectives || [],
        features: DepartmentData.features || [],
        success: DepartmentData.success || [],
        requirements: DepartmentData.requirements || [],
        lab_facilities: DepartmentData.lab_facilities || [],
        qualifications: DepartmentData.qualifications || "",
        duration: DepartmentData.duration || "",
        course_outline: DepartmentData.course_outline || [],
        scholarship: {
          description: DepartmentData.scholarship?.description || "",
          eligibility: DepartmentData.scholarship?.eligibility || "",
        },
        bteb_thoughts: DepartmentData.bteb_thoughts || "",
        regulation: DepartmentData.regulation || "",
        galleryImages: DepartmentData.galleryImages || [],
      });
    }
  }, [DepartmentData, reset]);

  const onSubmit = async (data) => {
    try {
      // Make the PUT request to update the mentorship by ID
      await axiosPublic.put(`/Department/${DepartmentData._id}`, data);

      // Show a success alert
      Swal.fire({
        title: "Success!",
        text: "Mentorship updated successfully",
        icon: "success",
        confirmButtonText: "OK",
      });

      document.getElementById("Update_Department_Modal").close();
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
    <div className="modal-box bg-white max-w-[800px] p-0">
      <div className="flex justify-between items-center px-10">
        <h1 className="text-3xl font-semibold text-center mb-6">
          Add Department
        </h1>
        <button
          className="text-3xl font-bold hover:text-red-500"
          onClick={() =>
            document.getElementById("Update_Department_Modal").close()
          }
        >
          X
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="p-8">
        {/* Department Name */}
        <FormField
          label="Department Name"
          name="departmentName"
          register={register}
          validationRules={{
            required: "Department name is required",
          }}
          error={errors.departmentName}
        />

        {/* Department Banner URL */}
        <FormField
          label="Department Banner URL"
          name="departmentBanner"
          register={register}
          validationRules={{
            required: "Banner URL is required",
          }}
          error={errors.departmentBanner}
        />

        {/* Department Banner URL */}
        <FormField
          label="Diploma Name"
          name="diploma"
          register={register}
          validationRules={{
            required: "Diploma Name is required",
          }}
          error={errors.diploma}
        />

        {/* About Department */}
        <FormField
          label="About Department"
          name="aboutDepartment"
          isTextarea={true}
          register={register}
          validationRules={{
            required: "About Department is required",
          }}
          error={errors.aboutDepartment}
        />

        <div className="mb-6">
          <h2 className="font-medium mb-4">Department Info</h2>

          {/* Chief Instructor */}
          <FormField
            label="Chief Instructor"
            name="departmentInfo.chief_instructor"
            register={register}
            validationRules={{
              required: "Chief instructor name is required",
            }}
            error={errors?.departmentInfo?.chief_instructor}
          />

          <div className="grid grid-cols-2 gap-5">
            {/* Current Students */}
            <FormField
              label="Current Students"
              name="departmentInfo.current_students"
              type="number"
              register={register}
              validationRules={{
                required: "Number of current students is required",
                min: { value: 0, message: "Must be a positive number" },
              }}
              error={errors?.departmentInfo?.current_students}
            />

            {/* Passed Students */}
            <FormField
              label="Passed Students"
              name="departmentInfo.passed_students"
              type="number"
              register={register}
              validationRules={{
                required: "Number of passed students is required",
                min: { value: 0, message: "Must be a positive number" },
              }}
              error={errors?.departmentInfo?.passed_students}
            />

            {/* Job Placement */}
            <FormField
              label="Job Placement"
              name="departmentInfo.job_placement"
              type="number"
              register={register}
              validationRules={{
                required: "Number of job placements is required",
                min: { value: 0, message: "Must be a positive number" },
              }}
              error={errors?.departmentInfo?.job_placement}
            />

            {/* Total Teachers */}
            <FormField
              label="Total Teachers"
              name="departmentInfo.total_teachers"
              type="number"
              register={register}
              validationRules={{
                required: "Number of teachers is required",
                min: { value: 0, message: "Must be a positive number" },
              }}
              error={errors?.departmentInfo?.total_teachers}
            />
          </div>
        </div>

        {/* Render Field Arrays for Objectives, Features, Success, Requirements, Lab Facilities */}
        {renderFieldArray(
          objectivesFields,
          register,
          removeObjectives,
          addObjectives,
          "Objectives",
          "objectives"
        )}

        {renderFieldArray(
          featuresFields,
          register,
          removeFeatures,
          addFeatures,
          "Features",
          "features"
        )}

        {renderFieldArray(
          successFields,
          register,
          removeSuccess,
          addSuccess,
          "Success",
          "success"
        )}

        {renderFieldArray(
          requirementsFields,
          register,
          removeRequirements,
          addRequirements,
          "Requirements",
          "requirements"
        )}

        {renderFieldArray(
          labFacilitiesFields,
          register,
          removeLabFacilities,
          addLabFacilities,
          "Lab Facilities",
          "lab_facilities"
        )}

        {/* Qualifications */}
        <FormField
          label="Qualifications"
          name="qualifications"
          register={register}
          validationRules={{
            required: "Qualifications is required",
          }}
          error={errors.qualifications}
        />

        {/* Duration */}
        <FormField
          label="Duration"
          name="duration"
          register={register}
          validationRules={{
            required: "Duration is required",
          }}
          error={errors.duration}
        />
        {/* Course Outline */}
        <div className="mb-3">
          <label className="font-medium mb-1 block">Course Outline</label>
          {courseOutlineFields.map((item, courseIndex) => (
            <div
              key={item.id}
              className="mb-4 p-4 border border-gray-300 rounded"
            >
              <div className="flex items-center gap-2 mb-2">
                <input
                  type="text"
                  {...register(`course_outline.${courseIndex}.semester`, {
                    required: "Semester is required",
                  })}
                  placeholder="Semester"
                  className="border border-gray-300 px-4 py-3 w-full bg-white"
                />
                <button
                  type="button"
                  onClick={() => removeCourseOutline(courseIndex)}
                  className="px-3 py-2 bg-red-500 text-white rounded"
                >
                  Remove Semester
                </button>
              </div>
              <div>
                <label className="font-medium mb-1 block">Subjects</label>
                {item.subjects.map((_, subjectIndex) => (
                  <div
                    key={subjectIndex}
                    className="flex items-center gap-2 mt-2"
                  >
                    <input
                      type="text"
                      {...register(
                        `course_outline.${courseIndex}.subjects.${subjectIndex}`,
                        {
                          required: "Subject is required",
                        }
                      )}
                      placeholder={`Subject ${subjectIndex + 1}`}
                      className="border border-gray-300 px-4 py-3 w-full bg-white"
                    />
                    <button
                      type="button"
                      onClick={() => removeSubject(courseIndex, subjectIndex)}
                      className="px-3 py-2 bg-red-500 text-white rounded"
                    >
                      Remove Subject
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addSubject(courseIndex)}
                  className="px-4 py-2 bg-blue-500 text-white mt-2"
                >
                  Add Subject
                </button>
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={() => addCourseOutline({ semester: "", subjects: [""] })}
            className="px-4 py-2 bg-green-500 text-white w-60 mt-2"
          >
            Add New Semester
          </button>
        </div>

        {/* Gallery */}
        <div className="mb-3">
          <label className="font-medium mb-1 block">Gallery Images</label>
          {galleryImagesFields.map((item, index) => (
            <div key={item.id} className="flex mt-2">
              <input
                type="text"
                {...register(`galleryImages.${index}`, {
                  required: "Image URL is required",
                })}
                placeholder={`Gallery Image URL ${index + 1}`}
                className="border border-gray-300 px-4 py-3 w-full bg-white"
              />
              <button
                type="button"
                onClick={() => removeGalleryImages(index)}
                className="px-3 py-2 bg-red-500 text-white"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => addGalleryImages("")}
            className="px-4 py-2 bg-blue-500 text-white w-60 mt-2"
          >
            Add Gallery Image
          </button>
        </div>

        {/* Scholarship Description */}
        <FormField
          label="Scholarship Description"
          name="scholarship.description"
          isTextarea={true}
          register={register}
          validationRules={{
            required: "Scholarship Description is required",
          }}
          error={errors?.scholarship?.description}
        />

        {/* Scholarship Eligibility */}
        <FormField
          label="Scholarship Eligibility"
          name="scholarship.eligibility"
          isTextarea={true}
          register={register}
          validationRules={{
            required: "Scholarship Eligibility is required",
          }}
          error={errors?.scholarship?.eligibility}
        />

        {/* BTEB Thoughts */}
        <FormField
          label="BTEB Thoughts"
          name="bteb_thoughts"
          isTextarea={true}
          register={register}
          validationRules={{
            required: "BTEB Thoughts is required",
          }}
          error={errors?.bteb_thoughts}
        />

        {/* Regulation */}
        <FormField
          label="Regulation"
          name="regulation"
          register={register}
          validationRules={{
            required: "Regulation is required",
          }}
          error={errors?.regulation}
        />

        {/* Submit Button */}
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg"
          >
            Add Department
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateDepartment;
