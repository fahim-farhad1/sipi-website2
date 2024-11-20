import React from "react";

const ViewRoutine = ({ RoutineData }) => {
  // Add a check to ensure RoutineData is not null or undefined
  if (!RoutineData || !RoutineData.schedule) {
    return (
      <div className="modal-box bg-white max-w-[1000px]">
        <div className="flex justify-between items-center px-10">
          <h1 className="text-3xl font-semibold text-center mb-6">
            View Routine
          </h1>
          <button
            className="text-3xl font-bold hover:text-red-500"
            onClick={() =>
              document.getElementById("View_Modal_Routine").close()
            }
          >
            X
          </button>
        </div>
        <p className="text-center text-lg">No routine data available.</p>
      </div>
    );
  }

  const generateGrid = (schedule) => {
    const daysOfWeek = [
      "Saturday",
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
    ];

    const timeSlots = [
      ...new Set(
        schedule
          .flatMap((daySchedule) =>
            daySchedule.classes.map((classItem) => classItem.time)
          )
          .sort()
      ),
    ];

    let grid = Array(daysOfWeek.length)
      .fill()
      .map(() => Array(timeSlots.length).fill(""));

    schedule.forEach((daySchedule) => {
      const dayIndex = daysOfWeek.indexOf(daySchedule.day);
      daySchedule.classes.forEach((classItem) => {
        const timeIndex = timeSlots.indexOf(classItem.time);
        if (timeIndex !== -1 && dayIndex !== -1) {
          grid[dayIndex][timeIndex] = classItem.subject;
        }
      });
    });

    return { timeSlots, grid, daysOfWeek };
  };

  // Generate the grid for the single routine passed as a prop
  const { timeSlots, grid, daysOfWeek } = generateGrid(RoutineData.schedule);

  return (
    <div className="modal-box bg-white max-w-[1000px]">
      <div className="flex justify-between items-center px-10">
        <h1 className="text-3xl font-semibold text-center mb-6">
          View Routine
        </h1>
        <button
          className="text-3xl font-bold hover:text-red-500"
          onClick={() => document.getElementById("View_Modal_Routine").close()}
        >
          X
        </button>
      </div>

      <div>
        {/* Table of Time Slots */}
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Day</th>
              {timeSlots.map((time, idx) => (
                <th key={idx} className="border border-gray-300 p-2">
                  {time}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {grid.map((row, dayIndex) => (
              <tr key={dayIndex}>
                <td className="border border-gray-300 p-2 text-center">
                  {daysOfWeek[dayIndex]}
                </td>
                {row.map((cell, timeIndex) => (
                  <td
                    key={timeIndex}
                    className="border border-gray-300 p-2 text-center"
                  >
                    {cell || "No Class"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewRoutine;
