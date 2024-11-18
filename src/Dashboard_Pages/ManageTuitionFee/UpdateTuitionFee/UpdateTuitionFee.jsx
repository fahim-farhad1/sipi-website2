import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const UpdateTuitionFee = ({ TuitionFeeData, refetch }) => {
  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  React.useEffect(() => {
    if (TuitionFeeData) {
      reset({
        semester: TuitionFeeData.semester,
        department: TuitionFeeData.department,
        session: TuitionFeeData.session,
        feeAmount: TuitionFeeData.feeDetails?.feeAmount || "",
        monthlyFee: TuitionFeeData.feeDetails?.monthlyFee || "",
        midTermExamFee: TuitionFeeData.feeDetails?.midTermExamFee || "",
        finalExamFee: TuitionFeeData.feeDetails?.finalExamFee || "",
        boardExamFee: TuitionFeeData.feeDetails?.boardExamFee || "",
      });
    }
  }, [TuitionFeeData, reset]);

  const onSubmit = async (data) => {
    try {
      const formattedData = {
        semester: data.semester,
        department: data.department,
        session: data.session,
        feeDetails: {
          feeAmount: data.feeAmount,
          monthlyFee: data.monthlyFee,
          midTermExamFee: data.midTermExamFee,
          finalExamFee: data.finalExamFee,
          boardExamFee: data.boardExamFee,
        },
      };

      await axiosPublic.put(
        `/Tuition-Fee/${TuitionFeeData._id}`,
        formattedData
      );

      Swal.fire({
        title: "Success!",
        text: "Tuition fee updated successfully.",
        icon: "success",
        confirmButtonText: "OK",
      });

      document.getElementById("Update_TuitionFee_Modal").close();
      refetch();
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text:
          error.response?.data?.message ||
          "Failed to update tuition fee. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
      console.error("Error updating tuition fee:", error);
    }
  };
  return (
    <div className="modal-box bg-white max-w-[800px] p-0">
      <div className="flex justify-between items-center px-10">
        <h1 className="text-3xl font-semibold text-center mb-6">
          Update Tuition Fee
        </h1>
        <button
          className="text-3xl font-bold hover:text-red-500"
          onClick={() =>
            document.getElementById("Update_TuitionFee_Modal").close()
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
            {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
              <option key={sem} value={sem}>
                {sem}
              </option>
            ))}
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
            placeholder="e.g., Computer"
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
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-400 transition"
          >
            Update Tuition Fee
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateTuitionFee;
