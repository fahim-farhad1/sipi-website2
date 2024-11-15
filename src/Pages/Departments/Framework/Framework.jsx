import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Shared/Loader/Loader";

const Banner = () => {
  const axiosPublic = useAxiosPublic();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Fetching DepartmentData
  const {
    data: Department = [],
    isLoading: DepartmentDataIsLoading,
    error: DepartmentDataError,
  } = useQuery({
    queryKey: ["DepartmentData"],
    queryFn: () =>
      axiosPublic
        .get(`/Department?departmentName=Computer`)
        .then((res) => res.data),
  });

  // Fetching RoutineData
  const {
    data: Routine = [],
    isLoading: RoutineDataIsLoading,
    error: RoutineDataError,
  } = useQuery({
    queryKey: ["RoutineData"],
    queryFn: () =>
      axiosPublic.get(`/Routine?department=Computer`).then((res) => res.data),
  });

  // Fetching Tuition-FeeData
  const {
    data: TuitionFee = [],
    isLoading: TuitionFeeDataIsLoading,
    error: TuitionFeeDataError,
  } = useQuery({
    queryKey: ["TuitionFeeData"],
    queryFn: () =>
      axiosPublic
        .get(`/Tuition-Fee?department=Computer`)
        .then((res) => res.data),
  });

  // Access the banners (if any) and other content
  console.log(TuitionFee);
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

  const banners = Department?.banner_images || [];

  const handlePrevious = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? banners.length - 1 : prevIndex - 1
        );
        setIsAnimating(false);
      }, 500);
    }
  };

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === banners.length - 1 ? 0 : prevIndex + 1
        );
        setIsAnimating(false);
      }, 500);
    }
  };

  // Error state
  if (
    DepartmentDataIsLoading ||
    RoutineDataIsLoading ||
    TuitionFeeDataIsLoading
  ) {
    return <Loader />;
  }

  if (DepartmentDataError || RoutineDataError || TuitionFeeDataError) {
    return (
      <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-300 to-white">
        <p className="text-center text-red-500 font-bold text-3xl mb-8">
          Something went wrong. Please reload the page.
        </p>
        <button
          className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-400 transition duration-300"
          onClick={() => window.location.reload()}
        >
          Reload
        </button>
      </div>
    );
  }

  return (
    <div className="mt-[100px]">
      {/* Banner */}
      <div className="relative w-full overflow-hidden ">
        <div
          className={`w-full transition-opacity duration-500 ${
            isAnimating ? "opacity-0" : "opacity-100"
          }`}
        >
          <img
            src={banners[currentIndex]}
            alt={`Banner ${currentIndex + 1}`}
            className="w-full h-56 md:h-[700px]"
          />
        </div>

        {/* Navigation Arrows */}
        <button
          className="absolute top-1/2 left-4 bg-black/50 text-white p-5 rounded-full hover:bg-black"
          onClick={handlePrevious}
        >
          <FaChevronLeft />
        </button>

        <button
          className="absolute top-1/2 right-4 bg-black/50 text-white p-5 rounded-full hover:bg-black"
          onClick={handleNext}
        >
          <FaChevronRight />
        </button>
      </div>

      <div className="max-w-[1200px] mx-auto flex flex-col-reverse md:flex-row mt-10 gap-10">
        {/* Left Part */}
        <div className="w-full md:w-2/3 text-black">
          {/* Name */}
          <h2 className="text-black font-bold text-3xl md:text-5xl text-center md:text-left">
            {Department.diploma}
          </h2>

          {/* About */}
          <div className="mt-10 mx-5 md:mx-0">
            <h2 className="text-xl font-semibold">
              About {Department.diploma}
            </h2>
            <div className="space-y-5 pt-5 leading-relaxed">
              {Department.about.map((paragraph, index) => (
                <p key={index} className="text-gray-700">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Objectives */}
          <div className="mt-10 mx-5 md:mx-0">
            <h2 className="text-xl font-semibold">Our Objectives</h2>
            <ul className="list-disc pl-5 pt-5 space-y-3 text-gray-700">
              {Department.objectives.map((objective, index) => (
                <li key={index}>{objective}</li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div className="mt-10 mx-5 md:mx-0">
            <h2 className="text-xl font-semibold">Features</h2>
            <ul className="list-disc pl-5 pt-5 space-y-3 text-gray-700">
              {Department.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Success */}
          <div className="mt-10 mx-5 md:mx-0">
            <h2 className="text-xl font-semibold">Our Success</h2>
            <ul className="list-disc pl-5 pt-5 space-y-3 text-gray-700">
              {Department.success.map((successItem, index) => (
                <li key={index}>{successItem}</li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div className="mt-10 mx-5 md:mx-0">
            <h2 className="text-xl font-semibold">Admission Requirements</h2>
            <ul className="list-disc pl-5 pt-5 space-y-3 text-gray-700">
              {Department.requirements.map((requirement, index) => (
                <li key={index}>{requirement}</li>
              ))}
            </ul>
          </div>

          {/* lab_facilities */}
          <div className="mt-10 mx-5 md:mx-0">
            <h2 className="text-xl font-semibold">Lab facilities</h2>
            <ul className="list-disc pl-5 pt-5 space-y-3 text-gray-700">
              {Department.lab_facilities.map((facilities, index) => (
                <li key={index}>{facilities}</li>
              ))}
            </ul>
          </div>

          {/* Qualifications, Duration */}
          <div className="mt-10 mx-5 md:mx-0">
            <div className="text-lg flex flex-col md:flex-row">
              <p className="font-semibold ">Qualifications: </p>
              <span className="ml-5">{Department.qualifications}</span>
            </div>
            <div className="text-lg flex flex-col md:flex-row">
              <p className="font-semibold ">Duration: </p>
              <span className="ml-5">{Department.duration}</span>
            </div>
          </div>

          {/* Course Outline */}
          <div className="mt-10 mx-5 md:mx-0">
            <h2 className="text-xl font-semibold">Course Outline</h2>
            <div className="space-y-5 pt-5 grid grid-cols-2 gap-4">
              {Department.course_outline.map((semester, index) => (
                <div key={index} className="mt-4 border border-gray-100 p-3">
                  <h3 className="text-lg font-semibold">{semester.semester}</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700 mt-4">
                    {semester.subjects.map((subject, idx) => (
                      <li key={idx}>{subject}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Scholarship */}
          <div className="mt-10 mx-5 md:mx-0">
            <h2 className="text-xl font-semibold">Scholarships</h2>

            {/* Scholarship Description */}
            <div className="pt-5 space-y-3">
              <p className="text-gray-700">
                {Department.scholarship.description}
              </p>
              <p className="text-gray-700">
                <strong>Eligibility:</strong>{" "}
                {Department.scholarship.eligibility}
              </p>
            </div>

            {/* Scholarship Money for Each Semester */}
            <div className="pt-5 space-y-3">
              <h3 className="text-lg font-semibold">
                Scholarship Money per Semester
              </h3>

              {/* Grid Layout for Scholarships */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {Department.course_outline.map((semester, index) => {
                  // Generate scholarship money for each semester (example values)
                  const scholarshipMoney = `$${(index + 1) * 1000}`; // Example: $1000 for Semester 1, $2000 for Semester 2, etc.
                  return (
                    <div
                      key={index}
                      className="p-4 border rounded-lg shadow-lg text-center bg-gray-100 hover:sh"
                    >
                      <h4 className="text-md font-semibold">
                        {semester.semester}
                      </h4>
                      <p className="text-xl font-bold text-green-600">
                        {scholarshipMoney}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* BTEB Thoughts Section */}
          <div className="mt-10 mx-5 md:mx-0">
            <h2 className="text-xl font-semibold">BTEB Thoughts</h2>
            <p className="text-gray-700 mt-2 leading-relaxed text-lg">
              {Department.bteb_thoughts}
            </p>
          </div>

          {/* Routine */}
          <div className="mt-5">
            <p className="text-2xl font-bold">Routine</p>
            <div>
              {Routine.length > 0 ? (
                Routine.map((routine) => {
                  const { timeSlots, grid } = generateGrid(routine.schedule);
                  return (
                    <div key={routine._id} className="mb-10">
                      {/* Accordion Section for Each Routine */}
                      <div className="collapse collapse-arrow ">
                        <input
                          type="radio"
                          name="my-accordion-2"
                          defaultChecked={false} // You can make this dynamic if you need the first item to be open by default
                        />
                        <div className="collapse-title text-xl font-medium">
                          {routine.department} - {routine.semester} Semester (
                          {routine.session} Session)
                        </div>
                        <div className="collapse-content">
                          {/* Routine Info */}
                          <div className="flex justify-between items-center mb-4">
                            <p className="text-lg">
                              Class Duration: {routine["class-Duration"]}
                            </p>
                            {/* Download PDF Button */}
                            <button
                              onClick={() => generatePDF(routine)}
                              className="px-4 py-2 border border-blue-400 hover:bg-blue-400 text-black hover:text-white"
                            >
                              Download PDF
                            </button>
                          </div>

                          {/* Table of Time Slots */}
                          <table className="min-w-full table-auto border-collapse border border-gray-300">
                            <thead>
                              <tr>
                                <th className="border border-gray-300 p-2">
                                  Time
                                </th>
                                {[
                                  "Saturday",
                                  "Sunday",
                                  "Monday",
                                  "Tuesday",
                                  "Wednesday",
                                  "Thursday",
                                ].map((day, idx) => (
                                  <th
                                    key={idx}
                                    className="border border-gray-300 p-2"
                                  >
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
                    </div>
                  );
                })
              ) : (
                <p>No routines found for the selected filters.</p>
              )}
            </div>
          </div>
        </div>

        {/* Right part */}
        <div className="w-full md:w-1/3 text-white ">
          {/* Department Stats */}
          <div className="py-10 mt-6 bg-blue-500 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-center mb-6">
              Department Overview
            </h3>

            {/* Chief Instructor */}
            <div className="flex justify-between items-center text-lg font-medium px-4 mb-6">
              <p>Chief Instructor:</p>
              <span>{Department.count?.chief_instructor || "N/A"}</span>
            </div>

            {/* Current Students */}
            <div className="flex justify-between items-center text-lg font-medium border-t border-white py-4 px-4">
              <p>Current Students:</p>
              <span>{Department.count?.current_students || "N/A"}</span>
            </div>

            {/* Total Teachers */}
            <div className="flex justify-between items-center text-lg font-medium border-t border-white py-4 px-4">
              <p>Total Teachers:</p>
              <span>{Department.count?.total_teachers || "N/A"}</span>
            </div>

            {/* Job Placements */}
            <div className="flex justify-between items-center text-lg font-medium border-t border-white py-4 px-4">
              <p>Job Placements:</p>
              <span>{Department.count?.job_placement || "N/A"}</span>
            </div>

            {/* Passed Students */}
            <div className="flex justify-between items-center text-lg font-medium border-t border-white py-4 px-4">
              <p>Passed Students:</p>
              <span>{Department.count?.passed_students || "N/A"}</span>
            </div>

            {/* Apply Now Button */}
            <div className="mt-8 flex justify-center">
              <button className="bg-red-600 hover:bg-red-700 text-white text-lg font-semibold px-16 py-3 rounded-lg shadow-md transition-all">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;