import React from "react";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const InputField = ({
  label,
  name,
  type,
  register,
  validation,
  errors,
  placeholder,
  isSelect,
  options,
  isFile, // Add support for file input
  isTextArea, // Handle text area
}) => (
  <div className="py-2">
    <label className="block text-lg font-medium py-2">{label}</label>
    {isSelect ? (
      <select
        {...register(name, validation)}
        className="w-full p-2 py-3 rounded-xl border border-[#0060c0] bg-white"
        defaultValue=""
      >
        <option value="" disabled>
          Select {label}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    ) : isFile ? (
      <input
        {...register(name, validation)}
        type="file"
        className="w-full p-2 py-3 rounded-xl border border-[#0060c0] bg-white"
      />
    ) : isTextArea ? (
      <textarea
        {...register(name, validation)}
        className="w-full p-2 py-3 rounded-xl border border-[#0060c0] bg-white"
        placeholder={placeholder || ""}
      />
    ) : (
      <input
        {...register(name, validation)}
        type={type || "text"}
        className="w-full p-2 py-3 rounded-xl border border-[#0060c0] bg-white"
        placeholder={placeholder || ""}
      />
    )}
    {errors[name] && <p className="text-red-500">{errors[name]?.message}</p>}
  </div>
);

const Admission = () => {
  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({});

  const onSubmit = async (data) => {
    const structuredData = {
      fullName: data.fullName,
      fathersName: data.fathersName,
      mothersName: data.mothersName,
      dateOfBirth: data.dateOfBirth,
      email: data.email,
      address: data.address,
      mobileNumber: data.mobileNumber,
      guardiansMobile: data.guardiansMobile,
      minorityGroup: data.minorityGroup,
      freedomFighterChild: data.freedomFighterChild,
      admissionTechnology: data.admissionTechnology,

      examName: data.examName,
      passedYear: data.passedYear,
      division: data.division,
      board: data.board,
      sscRoll: data.sscRoll,
      sscRegistrationNumber: data.sscRegistrationNumber,
      gpa: data.gpa,
    };

    // Prepare FormData
    const formData = new FormData();

    // Append text data (non-file fields)
    Object.keys(structuredData).forEach((key) => {
      formData.append(key, structuredData[key]);
    });

    // Handle file fields separately
    if (data.marksheet?.[0]) {
      formData.append("marksheet", data.marksheet[0]);
    }
    if (data.studentImage?.[0]) {
      formData.append("studentImage", data.studentImage[0]);
    }
    if (data.additionalDocument2?.[0]) {
      formData.append("additionalDocument2", data.additionalDocument2[0]);
    }

    try {
      // Sending POST request to save the data
      const response = await axiosPublic.post("/Applicant", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Ensure that the content type is set to multipart/form-data
        },
      });

      if (response.data.insertedId) {
        // Show success alert
        Swal.fire({
          title: "Success!",
          text: "Teacher has been added successfully!",
          icon: "success",
          button: "OK",
        });
      }

      // Optionally reset form fields after submission
      // reset();
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
    <div className="max-w-[1200px] mx-auto p-8 text-black">
      <h1 className="text-5xl font-bold mb-6 text-center">Admission Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Personal Information Section */}
        <fieldset className="border p-4">
          <legend className="text-2xl font-semibold mb-4 text-center">
            Personal Information
          </legend>
          <div className="">
            <InputField
              label="Full Name"
              name="fullName"
              placeholder="Enter your full name"
              register={register}
              validation={{ required: "Full Name is required" }}
              errors={errors}
            />
            <InputField
              label="Father's Name"
              name="fathersName"
              placeholder="Enter father's name"
              register={register}
              validation={{ required: "Father's Name is required" }}
              errors={errors}
            />
            <InputField
              label="Mother's Name"
              name="mothersName"
              placeholder="Enter mother's name"
              register={register}
              validation={{ required: "Mother's Name is required" }}
              errors={errors}
            />
            <InputField
              label="Date of Birth"
              name="dateOfBirth"
              type="date"
              register={register}
              validation={{ required: "Date of Birth is required" }}
              errors={errors}
            />
            <InputField
              label="Email Address"
              name="email"
              type="email"
              placeholder="Enter email address"
              register={register}
              validation={{
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              }}
              errors={errors}
            />
            <InputField
              label="Permanent Address"
              name="address"
              placeholder="Enter your permanent address"
              register={register}
              validation={{ required: "Address is required" }}
              errors={errors}
              isTextArea={true} // Enables rendering as a textarea
            />

            <InputField
              label="Mobile Number"
              name="mobileNumber"
              placeholder="Enter mobile number"
              register={register}
              validation={{ required: "Mobile Number is required" }}
              errors={errors}
            />
            <InputField
              label="Guardian's Mobile Number"
              name="guardiansMobile"
              placeholder="Enter guardian's mobile number"
              register={register}
              validation={{
                required: "Guardian's Mobile Number is required",
              }}
              errors={errors}
            />
            <InputField
              label="Minority Group"
              name="minorityGroup"
              register={register}
              validation={{
                required: "Please select if you are from a minority group",
              }}
              errors={errors}
              isSelect={true}
              options={["Yes", "No"]}
            />
            <InputField
              label="Child of a Freedom Fighter"
              name="freedomFighterChild"
              register={register}
              validation={{
                required:
                  "Please select if you are a child of a freedom fighter",
              }}
              errors={errors}
              isSelect={true}
              options={["Yes", "No"]}
            />
            <InputField
              label="Technology You Want to Admit"
              name="admissionTechnology"
              register={register}
              validation={{ required: "Please select a technology" }}
              errors={errors}
              isSelect={true}
              options={[
                "Computer",
                "Graphics",
                "Civil",
                "Electrical",
                "Mechanical",
                "Architecture",
                "Biotechnology",
                "Chemical Engineering",
                "Textile",
                "Environmental Engineering",
                "Mining",
                "Automobile",
              ]}
            />
          </div>
        </fieldset>

        {/* Academic Information Section */}
        <fieldset className="border mt-10 p-4">
          <legend className="text-2xl font-semibold mb-4 text-center">
            Academic Information
          </legend>
          <div>
            <InputField
              label="Name of Exam"
              name="examName"
              register={register}
              validation={{ required: "Exam Name is required" }}
              errors={errors}
              isSelect={true}
              options={["SSC", "HSC", "Vocational", "Dhakil"]}
            />

            <InputField
              label="Passed Year"
              name="passedYear"
              type="number"
              placeholder="Enter passed year"
              register={register}
              validation={{ required: "Passed Year is required" }}
              errors={errors}
            />
            <InputField
              label="Division"
              name="division"
              placeholder="e.x Science, Arts, Commerce"
              register={register}
              validation={{ required: "Division is required" }}
              errors={errors}
            />
            <InputField
              label="Board"
              name="board"
              register={register}
              validation={{ required: "Board is required" }}
              errors={errors}
              isSelect={true}
              options={[
                "Dhaka",
                "Comilla",
                "Chittagong",
                "Rajshahi",
                "Khulna",
                "Barishal",
                "Sylhet",
                "Rangpur",
                "Mymensingh",
                "Dinajpur",
                "Jessore",
                "Pabna",
                "Madrasah Education Board",
                "Technical Education Board",
              ]}
            />

            <InputField
              label="SSC Roll"
              name="sscRoll"
              placeholder="Enter SSC roll number"
              register={register}
              validation={{ required: "SSC Roll is required" }}
              errors={errors}
            />
            <InputField
              label="SSC Registration Number"
              name="sscRegistrationNumber"
              placeholder="Enter SSC registration number"
              register={register}
              validation={{ required: "SSC Registration Number is required" }}
              errors={errors}
            />
            <InputField
              label="GPA"
              name="gpa"
              type="float"
              placeholder="Enter GPA"
              register={register}
              validation={{ required: "GPA is required" }}
              errors={errors}
            />
          </div>
        </fieldset>

        {/* Marksheets File Input */}
        <InputField
          label="Upload Marksheets"
          name="marksheet"
          register={register}
          validation={{ required: "Marksheets are required" }}
          errors={errors}
          isFile={true}
        />

        {/* Student Image File Input */}
        <InputField
          label="Student Image"
          name="studentImage"
          register={register}
          validation={{ required: "Student Image is required" }}
          errors={errors}
          isFile={true}
        />

        {/* Additional Document 2 File Input */}
        <InputField
          label="Upload Additional Document 2"
          name="additionalDocument2"
          register={register}
          validation={{ required: "Additional Document 2 is required" }}
          errors={errors}
          isFile={true}
        />

        {/* Applicant Approval Checkbox */}
        <div className="flex items-center">
          <input
            {...register("approval", {
              required: "You must approve to proceed",
            })}
            type="checkbox"
            className="mr-2"
          />
          <label>I confirm that the information provided is accurate</label>
        </div>
        {errors.approval && (
          <p className="text-red-500">{errors.approval.message}</p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white py-3 px-10 rounded hover:bg-blue-600 my-5"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Admission;
