import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { jsPDF } from "jspdf";
import fetchRoutine from "../../Hooks/fetchRoutine";

const AllRoutines = () => {
  const { data: Routine, content } = fetchRoutine();

  const [filteredRoutines, setFilteredRoutines] = useState([]);
  const { register, handleSubmit, watch } = useForm();

  const selectedSemester = watch("semester");
  const selectedDepartment = watch("department");

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

    let grid = Array(timeSlots.length)
      .fill()
      .map(() => Array(daysOfWeek.length).fill(""));

    schedule.forEach((daySchedule) => {
      const dayIndex = daysOfWeek.indexOf(daySchedule.day);
      daySchedule.classes.forEach((classItem) => {
        const timeIndex = timeSlots.indexOf(classItem.time);
        if (timeIndex !== -1 && dayIndex !== -1) {
          grid[timeIndex][dayIndex] = classItem.subject;
        }
      });
    });

    return { timeSlots, grid };
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
    <div className="border border-gray-100 p-5">
      <p className="text-2xl font-bold">Routines</p>

      <form onSubmit={handleSubmit(onSubmit)} className="mb-5">
        <div className="flex space-x-4">
          <div className="flex items-center">
            <label htmlFor="department" className="block text-lg font-semibold">
              Department :
            </label>
            <select
              {...register("department")}
              className="p-3   border border-gray-400 ml-5 bg-white"
            >
              <option value="">Select Department</option>
              {departments.map((department, index) => (
                <option key={index} value={department}>
                  {department}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center">
            <label htmlFor="semester" className="block text-lg font-semibold">
              Semester :
            </label>
            <select
              {...register("semester")}
              className="p-3   border border-gray-400 ml-5 bg-white"
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

      <div>
        {filteredRoutines.length > 0 ? (
          filteredRoutines.map((routine) => {
            const { timeSlots, grid } = generateGrid(routine.schedule);
            return (
              <div key={routine._id} className="mb-10">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">
                    {routine.department} - {routine.semester} ({routine.session}{" "}
                    Session)
                  </h2>
                  {/* Download PDF Button */}
                  <button
                    onClick={() => generatePDF(routine)}
                    className="px-4 py-2 border border-blue-400 hover:bg-blue-400 text-black hover:text-white"
                  >
                    Download PDF
                  </button>
                </div>
                <p className="text-lg">
                  Class Duration: {routine["class-Duration"]}
                </p>

                <div className="mt-5">
                  <table className="min-w-full table-auto border-collapse border border-gray-300">
                    <thead>
                      <tr>
                        <th className="border border-gray-300 p-2">Time</th>
                        {[
                          "Saturday",
                          "Sunday",
                          "Monday",
                          "Tuesday",
                          "Wednesday",
                          "Thursday",
                        ].map((day, idx) => (
                          <th key={idx} className="border border-gray-300 p-2">
                            {day}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {grid.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                          <td className="border border-gray-300 p-2">
                            {timeSlots[rowIndex] || "No Class"}
                          </td>
                          {row.map((cell, colIndex) => (
                            <td
                              key={colIndex}
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
          })
        ) : (
          <p>No routines found for the selected filters.</p>
        )}
      </div>
    </div>
  );
};

export default AllRoutines;
