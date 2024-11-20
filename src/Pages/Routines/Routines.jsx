import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { jsPDF } from "jspdf";
import fetchRoutine from "../../Hooks/fetchRoutine";
import DepartmentBanner from "../../Components/Banners/DepartmentBanner";

const Routines = () => {
  const { data: Routine, content } = fetchRoutine();
  const [filteredRoutines, setFilteredRoutines] = useState([]);
  const { register, handleSubmit, watch } = useForm();
  const selectedSemester = watch("semester");
  const selectedDepartment = watch("department");
  const bannerImage =
    "https://i.ibb.co/0rqXzZ7/fa8ed7e9-0e83-462f-8c5d-13b06d25cef3.jpg";

  useEffect(() => {
    if (Routine) {
      let filteredData = [...Routine];

      if (selectedSemester) {
        filteredData = filteredData.filter(
          (routine) => routine.semester === parseInt(selectedSemester)
        );
      }

      if (selectedDepartment) {
        filteredData = filteredData.filter(
          (routine) => routine.department === selectedDepartment
        );
      }

      setFilteredRoutines(filteredData);
    }
  }, [Routine, selectedSemester, selectedDepartment]);

  if (content) {
    return content;
  }

  const departments = [
    ...new Set(Routine?.map((routine) => routine.department)),
  ];
  const semesters = [...new Set(Routine?.map((routine) => routine.semester))];

  const onSubmit = (data) => {
    console.log(data);
  };

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

    return { timeSlots, grid, daysOfWeek }; // Include daysOfWeek in the return value
  };

  const generatePDF = (routine) => {
    const { timeSlots, grid } = generateGrid(routine.schedule);

    const doc = new jsPDF();
    doc.setFontSize(16);

    // Title Section
    doc.setFont("helvetica", "bold");
    doc.text(
      `${routine.department} - ${routine.semester} (${routine.session} Session)`,
      10,
      10
    );
    doc.setFont("helvetica", "normal");
    doc.text(`Class Duration: ${routine["class-Duration"]}`, 10, 20);

    const daysOfWeek = [
      "Saturday",
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
    ];

    // Table Headers
    let y = 30;
    const headerHeight = 10;
    doc.setFontSize(12);
    doc.setTextColor(255, 255, 255); // White text for header
    doc.setFillColor(100, 100, 100); // Gray background for header

    const headerColumns = ["Time", ...daysOfWeek];
    const colWidths = [30, 40, 40, 40, 40, 40, 40]; // Adjust the widths for the columns

    // Draw the table headers with styling
    for (let i = 0; i < headerColumns.length; i++) {
      doc.rect(
        10 + colWidths.slice(0, i).reduce((a, b) => a + b, 0),
        y,
        colWidths[i],
        headerHeight,
        "FD"
      ); // Fills and draws borders
      doc.text(
        headerColumns[i],
        10 + colWidths.slice(0, i).reduce((a, b) => a + b, 0) + 5,
        y + 7
      ); // Adds text in the middle
    }

    y += headerHeight;

    // Render the grid (schedule) in PDF
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0); // Black text for the grid

    grid.forEach((row, rowIndex) => {
      const rowHeight = 10;
      let cellText = `${timeSlots[rowIndex] || "No Class"}`;

      // Drawing cells for each day of the week
      for (let colIndex = 0; colIndex < row.length; colIndex++) {
        const cellContent = row[colIndex] || "No Class";
        doc.rect(
          10 + colWidths.slice(0, colIndex + 1).reduce((a, b) => a + b, 0),
          y,
          colWidths[colIndex + 1],
          rowHeight
        ); // Cell border
        doc.text(
          cellContent,
          10 + colWidths.slice(0, colIndex + 1).reduce((a, b) => a + b, 0) + 5,
          y + 6
        ); // Adding cell content
      }

      y += rowHeight;
    });

    // Save the PDF
    doc.save(`${routine.department}-${routine.semester}routine.pdf`);
  };

  return (
    <div className="text-black">
      <DepartmentBanner Image={bannerImage} />

      <div className="max-w-[1200px] mx-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mb-5 max-w-[1200px] mx-auto mt-14 px-5"
        >
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 justify-between">
            {/* Department Section */}
            <div className="flex flex-col md:flex-row items-start md:items-center">
              <label
                htmlFor="department"
                className="block text-lg font-semibold mb-2 md:mb-0 mx-auto"
              >
                Department:
              </label>
              <select
                {...register("department")}
                className="p-3 border border-gray-400 md:ml-5 bg-white w-full md:w-[300px]"
              >
                <option value="">Select Department</option>
                {departments.map((department, index) => (
                  <option key={index} value={department}>
                    {department}
                  </option>
                ))}
              </select>
            </div>

            {/* Semester Section */}
            <div className="flex flex-col md:flex-row items-start md:items-center">
              <label
                htmlFor="semester"
                className="block text-lg font-semibold mb-2 md:mb-0 mx-auto"
              >
                Semester:
              </label>
              <select
                {...register("semester")}
                className="p-3 border border-gray-400 md:ml-5 bg-white w-full md:w-[300px]"
              >
                <option value="">Select Semester</option>
                {semesters.map((semester, index) => (
                  <option key={index} value={semester}>
                    {semester}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </form>

        <div className="px-5">
          {filteredRoutines.length > 0 ? (
            filteredRoutines.map((routine) => {
              const { timeSlots, grid, daysOfWeek } = generateGrid(
                routine.schedule
              );
              return (
                <div key={routine._id} className="mb-10">
                  {/* Routine Header */}
                  <div className="text-lg md:text-xl font-medium mb-4">
                    {routine.department} - {routine.semester} Semester (
                    {routine.session} Session)
                  </div>

                  {/* Routine Details */}
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 space-y-4 md:space-y-0">
                    <p className="text-sm md:text-lg">
                      Class Duration: {routine["class-Duration"]}
                    </p>
                    <button
                      onClick={() => generatePDF(routine)}
                      className="px-4 py-2 border border-blue-400 hover:bg-blue-400 text-black hover:text-white text-sm md:text-base"
                    >
                      Download PDF
                    </button>
                  </div>

                  {/* Responsive Table */}
                  <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border-collapse border border-gray-300">
                      <thead>
                        <tr>
                          <th className="border border-gray-300 p-2 text-sm md:text-base">
                            Day
                          </th>
                          {timeSlots.map((time, idx) => (
                            <th
                              key={idx}
                              className="border border-gray-300 p-2 text-sm md:text-base"
                            >
                              {time}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {grid.map((row, dayIndex) => (
                          <tr key={dayIndex}>
                            <td className="border border-gray-300 p-2 text-center text-sm md:text-base">
                              {daysOfWeek[dayIndex]}
                            </td>
                            {row.map((cell, timeIndex) => (
                              <td
                                key={timeIndex}
                                className="border border-gray-300 p-2 text-center text-sm md:text-base"
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
            })
          ) : (
            <p className="text-center text-lg">
              No routines found for the selected filters.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Routines;
