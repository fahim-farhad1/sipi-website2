import React, { useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const AddRoutine = ({ refetch }) => {
  const axiosPublic = useAxiosPublic();

  const { register, handleSubmit, control, setValue, reset } = useForm({
    defaultValues: {
      department: "",
      semester: "",
      session: "",
      classDuration: "",
      schedule: [
        { day: "Saturday", classes: [{ time: "", subject: "" }] },
        { day: "Sunday", classes: [{ time: "", subject: "" }] },
        { day: "Monday", classes: [{ time: "", subject: "" }] },
        { day: "Tuesday", classes: [{ time: "", subject: "" }] },
        { day: "Wednesday", classes: [{ time: "", subject: "" }] },
        { day: "Thursday", classes: [{ time: "", subject: "" }] },
      ],
    },
  });

  const { fields: scheduleFields } = useFieldArray({
    control,
    name: "schedule",
  });

  const onSubmit = async (data) => {
    console.log("Routine submitted:", data);
    try {
      // Sending POST request to save teacher data
      const response = await axiosPublic.post("/Routine", data);

      if (response.data.insertedId) {
        // Show success alert
        Swal.fire({
          title: "Success!",
          text: "Routine has been added successfully!",
          icon: "success",
          button: "OK",
        });
      }

      // Close the modal after success
      document.getElementById("Add_Routine_Modal").close();

      // Trigger refetch and reset actions
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
    <div className="modal-box bg-white max-w-[1000px] p-0 ">
      <div className="flex justify-between items-center border-b border-gray-300 px-10">
        <h1 className="text-3xl font-semibold text-center mb-6">Add Routine</h1>
        <button
          className="text-3xl font-bold hover:text-red-500"
          onClick={() => document.getElementById("Add_Routine_Modal").close()}
        >
          X
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
        {/* Department */}
        <div>
          <label className="block font-medium mb-1">Department</label>
          <input
            type="text"
            {...register("department")}
            className="border border-gray-300 px-4 py-2 w-full bg-white"
          />
        </div>

        {/* Semester */}
        <div>
          <label className="block font-medium mb-1">Semester</label>
          <input
            type="number"
            {...register("semester")}
            className="border border-gray-300 px-4 py-2 w-full bg-white"
          />
        </div>

        {/* Session */}
        <div>
          <label className="block font-medium mb-1">Session</label>
          <input
            type="text"
            {...register("session")}
            className="border border-gray-300 px-4 py-2 w-full bg-white"
          />
        </div>

        {/* Class Duration */}
        <div>
          <label className="block font-medium mb-1">Class Duration</label>
          <input
            type="text"
            {...register("class-Duration")}
            className="border border-gray-300 px-4 py-2 w-full bg-white"
          />
        </div>

        {/* Schedule */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Schedule</h2>
          {scheduleFields.map((daySchedule, dayIndex) => {
            const {
              fields: classFields,
              append,
              remove,
            } = useFieldArray({
              control,
              name: `schedule.${dayIndex}.classes`,
            });

            return (
              <div key={daySchedule.id} className="mb-4">
                <h3 className="font-medium">{daySchedule.day}</h3>
                {classFields.map((classItem, classIndex) => (
                  <div key={classItem.id} className="space-y-2 mb-2">
                    <div className="flex space-x-4 items-center">
                      <input
                        type="text"
                        {...register(
                          `schedule.${dayIndex}.classes.${classIndex}.time`
                        )}
                        placeholder="e.g. 9:00 AM - 9:50 AM"
                        className="border border-gray-300 px-4 py-2 w-1/2 bg-white"
                      />
                      <input
                        type="text"
                        {...register(
                          `schedule.${dayIndex}.classes.${classIndex}.subject`
                        )}
                        placeholder="Class Subject"
                        className="border border-gray-300 px-4 py-2 w-1/2 bg-white"
                      />
                      <button
                        type="button"
                        onClick={() => remove(classIndex)}
                        className="bg-red-500 hover:bg-red-700 py-2 px-4 text-white"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => append({ time: "", subject: "" })}
                  className="bg-blue-500 hover:bg-blue-700 text-white px-5 py-2"
                >
                  Add Class
                </button>
              </div>
            );
          })}
        </div>

        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white font-semibold g w-full"
        >
          Add Routine
        </button>
      </form>
    </div>
  );
};

export default AddRoutine;
