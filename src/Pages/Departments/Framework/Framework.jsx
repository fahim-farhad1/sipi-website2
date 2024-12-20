import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Shared/Loader/Loader";
import { useParams } from "react-router-dom";
import Gallery from "../../../Components/Gallary/Gallery";
import DepartmentBanner from "../../../Components/Banners/DepartmentBanner";
import MiddleSectionTitle from "../../../Components/ReuseableTitle/MiddleSectionTitle";

const Banner = () => {
  const axiosPublic = useAxiosPublic();
  const { department } = useParams();

  // Fetching DepartmentData
  const {
    data: Department = [],
    isLoading: DepartmentDataIsLoading,
    error: DepartmentDataError,
  } = useQuery({
    queryKey: ["DepartmentData", department],
    queryFn: () =>
      axiosPublic
        .get(`/Department?departmentName=${department}`)
        .then((res) => res.data),
    enabled: !!department,
  });

  // Fetching RoutineData
  const {
    data: Routine = [],
    isLoading: RoutineDataIsLoading,
    error: RoutineDataError,
  } = useQuery({
    queryKey: ["RoutineData", department],
    queryFn: () =>
      axiosPublic
        .get(`/Routine?department=${department}`)
        .then((res) => res.data),
    enabled: !!department,
  });

  // Fetching Tuition-FeeData
  const {
    data: TuitionFee = [],
    isLoading: TuitionFeeDataIsLoading,
    error: TuitionFeeDataError,
  } = useQuery({
    queryKey: ["TuitionFeeData", department],
    queryFn: () =>
      axiosPublic
        .get(`/Tuition-Fee?department=${department}`)
        .then((res) => res.data),
    enabled: !!department,
  });

  // Error handling
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

  const splitText = (text) => {
    const words = text.split(" ");
    const chunks = [];

    for (let i = 0; i < words.length; i += 100) {
      chunks.push(words.slice(i, i + 100).join(" "));
    }

    return chunks;
  };

  return (
    <div className="mt-[100px]">
      {/* Banner */}
      <DepartmentBanner Image={Department.departmentBanner} />

      {/* Content */}
      <div className=" text-black">
        {/* Top part */}
        <div className="flex flex-col md:flex-row justify-between mt-11 max-w-[1200px] mx-auto space-y-5 px-2">
          {/* Left part */}
          <div className="w-full md:w-[700px]">
            <h2 className="text-black font-bold text-3xl md:text-5xl text-center md:text-left">
              {Department.diploma}
            </h2>

            {/* About */}
            <div id="About" className="mt-10 md:mx-5 text-center md:text-left">
              <h2 className="text-xl font-semibold">
                About {Department.diploma}
              </h2>

              <div className="space-y-1 pt-5 leading-relaxed">
                {splitText(Department.aboutDepartment).map((chunk, index) => (
                  <p key={index} className="text-gray-700 mb-[4px]">
                    {chunk}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Right Part */}
          <div className="w-full md:w-[400px] text-white">
            {/* Info Part */}
            <div className="bg-blue-500 py-10">
              <h3 className="text-2xl font-bold text-center mb-6">
                Department Overview
              </h3>

              {/* Chief Instructor */}
              <div className="flex justify-between items-center text-lg font-medium px-4 mb-6">
                <p>Chief Instructor:</p>
                <span>
                  {Department.departmentInfo?.chief_instructor || "N/A"}
                </span>
              </div>

              {/* Current Students */}
              <div className="flex justify-between items-center text-lg font-medium border-t border-white py-4 px-4">
                <p>Current Students:</p>
                <span>
                  {Department.departmentInfo?.current_students || "N/A"}
                </span>
              </div>

              {/* Total Teachers */}
              <div className="flex justify-between items-center text-lg font-medium border-t border-white py-4 px-4">
                <p>Total Teachers:</p>
                <span>
                  {Department.departmentInfo?.total_teachers || "N/A"}
                </span>
              </div>

              {/* Job Placements */}
              <div className="flex justify-between items-center text-lg font-medium border-t border-white py-4 px-4">
                <p>Job Placements:</p>
                <span>{Department.departmentInfo?.job_placement || "N/A"}</span>
              </div>

              {/* Passed Students */}
              <div className="flex justify-between items-center text-lg font-medium border-t border-white py-4 px-4">
                <p>Passed Students:</p>
                <span>
                  {Department.departmentInfo?.passed_students || "N/A"}
                </span>
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

        {/* Objectives */}
        <div className="mt-10 max-w-[1200px] mx-auto px-2">
          <h2 className="text-xl font-semibold">Our Objectives</h2>
          <ul className=" pl-2 pt-2 space-y-3 ">
            {Department.objectives.map((objective, index) => (
              <li key={index} className="flex py-2 items-center">
                <FaArrowRight className="mr-3" />
                {objective}
              </li>
            ))}
          </ul>
        </div>

        {/* Features */}
        <div className="mt-10  max-w-[1200px] mx-auto px-2">
          <h2 className="text-xl font-semibold">Features</h2>
          <ul className=" pl-2 pt-2 space-y-3 ">
            {Department.features.map((feature, index) => (
              <li key={index} className="flex py-2 items-center">
                <FaArrowRight className="mr-3" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Success */}
        <div className="mt-10 max-w-[1200px] mx-auto px-2">
          <h2 className="text-xl font-semibold">Our Success</h2>
          <ul className=" pl-2 pt-2 space-y-3 ">
            {Department.success.map((successItem, index) => (
              <li key={index} className="flex py-2 items-center">
                <FaArrowRight className="mr-3" />
                {successItem}
              </li>
            ))}
          </ul>
        </div>

        {/* Requirements */}
        <div className="mt-10 max-w-[1200px] mx-auto px-2">
          <h2 className="text-xl font-semibold">Admission Requirements</h2>
          <ul className=" pl-2 pt-2 space-y-3 ">
            {Department.requirements.map((requirement, index) => (
              <li key={index} className="flex py-2 items-center">
                <FaArrowRight className="mr-3" />
                {requirement}
              </li>
            ))}
          </ul>
        </div>

        {/* lab_facilities */}
        <div className="mt-10 max-w-[1200px] mx-auto px-2">
          <h2 className="text-xl font-semibold">Lab facilities</h2>
          <ul className=" pl-2 pt-2 space-y-3 ">
            {Department.lab_facilities.map((facilities, index) => (
              <li key={index} className="flex py-2 items-center">
                <FaArrowRight className="mr-3" />
                {facilities}
              </li>
            ))}
          </ul>
        </div>

        {/* Qualifications, Duration */}
        <div className="mt-10 max-w-[1200px] mx-auto px-2">
          <div className="text-lg ">
            <p className="font-semibold ">Qualifications: </p>
            <span className="ml-5">{Department.qualifications}</span>
          </div>
          <div className="text-lg flex flex-col md:flex-row">
            <p className="font-semibold ">Duration: </p>
            <span className="ml-5">{Department.duration}</span>
          </div>
        </div>

        {/* Course Outline */}
        <div className="mt-10 bg-sky-200 py-5 px-1">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-lg md:text-xl font-semibold">
              Course Outline - Regulation ( {Department.regulation} )
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-5">
              {Department.course_outline.map((semester, index) => (
                <div
                  key={index}
                  className="mt-4 border border-gray-100 p-3 transition-transform transform hover:scale-105 shadow-md hover:shadow-lg bg-white rounded-lg"
                >
                  <h3 className="text-lg font-semibold">{semester.semester}</h3>
                  <ul className="list-disc pl-5 space-y-2 mt-4">
                    {semester.subjects.map((subject, idx) => (
                      <li key={idx}>{subject}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scholarship */}
        <div className="mt-10 max-w-[1200px] mx-auto px-1">
          <h2 className="text-2xl md:text-xl font-semibold">Scholarships</h2>

          {/* Scholarship Description */}
          <div className="pt-5 space-y-3 leading-relaxed">
            <p className="text-gray-700">
              {Department.scholarship.description}
            </p>
            <p className="text-gray-700">
              <strong>Eligibility:</strong> {Department.scholarship.eligibility}
            </p>
          </div>

          {/* Scholarship Money for Each Semester */}
          <div className="pt-5 space-y-3">
            <h3 className="text-lg font-semibold">
              Scholarship Money per Semester
            </h3>

            {/* Grid Layout for Scholarships */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
        <div className="mt-10 max-w-[1200px] mx-auto px-2">
          <h2 className="text-xl font-semibold">BTEB Thoughts</h2>
          <p className="text-gray-700 mt-2 leading-relaxed text-lg">
            {Department.bteb_thoughts}
          </p>
        </div>

        {/* Routine */}
        <div id="Routine" className="mt-5 max-w-[1200px] mx-auto">
          <p className="text-2xl font-bold">Routine</p>
          <div>
            {Routine.length > 0 ? (
              Routine.map((routine) => {
                const { timeSlots, grid, daysOfWeek } = generateGrid(
                  routine.schedule
                ); // Destructure daysOfWeek
                return (
                  <div key={routine._id} className="mb-10">
                    {/* Accordion Section for Each Routine */}
                    <div className="collapse collapse-arrow overflow-scroll md:overflow-hidden border border-gray-300">
                      <input
                        type="radio"
                        name="my-accordion-2"
                        defaultChecked={false} // Adjust this if needed
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
                                Day
                              </th>
                              {timeSlots.map((time, idx) => (
                                <th
                                  key={idx}
                                  className="border border-gray-300 p-2"
                                >
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
                  </div>
                );
              })
            ) : (
              <p>No routines found for the selected filters.</p>
            )}
          </div>
        </div>

        {/* Fee */}
        <div id="Fee" className="bg-gray-100 py-5 ">
          <div className="max-w-[1200px] mx-auto">
            <p className="text-3xl font-bold text-center text-gray-800 mb-6">
              Tuition Fee Details
            </p>
            <div>
              {TuitionFee.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-2">
                  {TuitionFee.map((feeData) => (
                    <div
                      key={feeData._id}
                      className="md:mb-8 p-6 border border-gray-300 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      {/* Header with semester and session */}
                      <div className="mb-4">
                        <p className="text-xl font-semibold text-gray-900">
                          Semester: {feeData.semester} - Session:{" "}
                          {feeData.session}
                        </p>
                        <p className="text-lg text-orange-500 italic">
                          Department: {feeData.department}
                        </p>
                      </div>

                      {/* Fee Details Section */}
                      <div className="mt-4">
                        <p className="text-xl font-bold text-gray-700 mb-2">
                          Fee Breakdown:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                          <li className="text-lg text-gray-800">
                            Fee Amount:{" "}
                            <span className="font-semibold text-blue-600">
                              {feeData.feeDetails.feeAmount} BDT
                            </span>
                          </li>
                          <li className="text-lg text-gray-800">
                            Monthly Fee:{" "}
                            <span className="font-semibold text-blue-600">
                              {feeData.feeDetails.monthlyFee} BDT
                            </span>
                          </li>
                          <li className="text-lg text-gray-800">
                            Mid-Term Exam Fee:{" "}
                            <span className="font-semibold text-blue-600">
                              {feeData.feeDetails.midTermExamFee} BDT
                            </span>
                          </li>
                          <li className="text-lg text-gray-800">
                            Final Exam Fee:{" "}
                            <span className="font-semibold text-blue-600">
                              {feeData.feeDetails.finalExamFee} BDT
                            </span>
                          </li>
                          <li className="text-lg text-gray-800">
                            Board Exam Fee:{" "}
                            <span className="font-semibold text-blue-600">
                              {feeData.feeDetails.boardExamFee} BDT
                            </span>
                          </li>
                        </ul>
                      </div>

                      {/* Action Buttons */}
                      <div className="mt-4">
                        <button className="px-6 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300">
                          Download Fee Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-gray-500 text-lg">
                  No tuition fee data available.
                </p>
              )}
            </div>
          </div>
        </div>

              <MiddleSectionTitle badge={"Departments Gallery"} title={'The Memory of Students'} />
        <Gallery images={Department.galleryImages}></Gallery>
      </div>
    </div>
  );
};

export default Banner;
