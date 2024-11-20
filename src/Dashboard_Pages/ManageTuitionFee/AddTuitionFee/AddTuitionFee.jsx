import React from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddTuitionFee = ({ refetch }) => {
  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const structuredData = {
      semester: parseInt(data.semester, 10),
      department: data.department,
      session: data.session,
      feeDetails: {
        feeAmount: parseFloat(data.feeAmount),
        monthlyFee: parseFloat(data.monthlyFee),
        midTermExamFee: parseFloat(data.midTermExamFee),
        finalExamFee: parseFloat(data.finalExamFee),
        boardExamFee: parseFloat(data.boardExamFee),
      },
    };

    try {
      // Send POST request
      const response = await axiosPublic.post("/Tuition-Fee", structuredData);
      if (response.data.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "Tuition Fee has been added successfully!",
          icon: "success",
        });
        document.getElementById("Add_TuitionFee_Modal").close();
        refetch();
        reset();
      }
    } catch (error) {
      console.error("Error adding tuition fee:", error);
      Swal.fire({
        title: "Error!",
        text: "Failed to add the tuition fee. Please try again.",
        icon: "error",
      });
    }
  };

  return (
    <div className="modal-box bg-white max-w-[1000px] p-0 ">
      <div className="flex justify-between items-center border-b border-gray-300 px-10">
        <h1 className="text-3xl font-semibold text-center mb-6">
          Add Tuition Fee
        </h1>
        <button
          className="text-3xl font-bold hover:text-red-500"
          onClick={() =>
            document.getElementById("Add_TuitionFee_Modal").close()
          }
        >
          X
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
        {/* Semester */}
        <div>
          <label className="block font-medium mb-1">Semester</label>
          <select
            {...register("semester", { required: "Semester is required" })}
            className="border border-gray-300 px-4 py-2 w-full bg-white"
          >
            <option value="">Select Semester</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            {/* Add more semesters if needed */}
          </select>
          {errors.semester && (
            <p className="text-red-500 text-sm">{errors.semester.message}</p>
          )}
        </div>

        {/* Department */}
        <div>
          <label className="block font-medium mb-1">Department</label>
          <input
            type="text"
            {...register("department", { required: "Department is required" })}
            placeholder="Computer"
            className="border border-gray-300 px-4 py-2 w-full bg-white"
          />
          {errors.department && (
            <p className="text-red-500 text-sm">{errors.department.message}</p>
          )}
        </div>

        {/* Session */}
        <div>
          <label className="block font-medium mb-1">Session</label>
          <input
            type="text"
            {...register("session", { required: "Session is required" })}
            placeholder="e.g., 2024-2025"
            className="border border-gray-300 px-4 py-2 w-full bg-white"
          />
          {errors.session && (
            <p className="text-red-500 text-sm">{errors.session.message}</p>
          )}
        </div>

        {/* Fee Details */}
        <div>
          <label className="block font-medium mb-1">Fee Amount</label>
          <input
            type="number"
            {...register("feeAmount", { required: "Fee Amount is required" })}
            placeholder="Total Fee"
            className="border border-gray-300 px-4 py-2 w-full bg-white"
          />
          {errors.feeAmount && (
            <p className="text-red-500 text-sm">{errors.feeAmount.message}</p>
          )}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Monthly Fee</label>
            <input
              type="number"
              {...register("monthlyFee", {
                required: "Monthly Fee is required",
              })}
              placeholder="e.g., 200"
              className="border border-gray-300 px-4 py-2 w-full bg-white"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Midterm Exam Fee</label>
            <input
              type="number"
              {...register("midTermExamFee", {
                required: "Midterm Exam Fee is required",
              })}
              placeholder="e.g., 100"
              className="border border-gray-300 px-4 py-2 w-full bg-white"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Final Exam Fee</label>
            <input
              type="number"
              {...register("finalExamFee", {
                required: "Final Exam Fee is required",
              })}
              placeholder="e.g., 200"
              className="border border-gray-300 px-4 py-2 w-full bg-white"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Board Exam Fee</label>
            <input
              type="number"
              {...register("boardExamFee", {
                required: "Board Exam Fee is required",
              })}
              placeholder="e.g., 250"
              className="border border-gray-300 px-4 py-2 w-full bg-white"
            />
          </div>
        </div>

        {/* Submit Button */}

        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white font-semibold g w-full"
        >
          Add Tuition Fee
        </button>
      </form>
    </div>
  );
};

export default AddTuitionFee;
