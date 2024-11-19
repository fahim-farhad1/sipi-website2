import React from "react";
import DepartmentBanner from "../../../Components/Banners/DepartmentBanner";
import Gallery from "../../../Components/Gallary/Gallery";
import { FaArrowRight } from "react-icons/fa";

const ViewDepartment = ({ DepartmentData }) => {
  const splitText = (text) => {
    if (!text) return []; // Return empty array if text is undefined or empty

    const words = text.split(" ");
    const chunks = [];

    for (let i = 0; i < words.length; i += 100) {
      chunks.push(words.slice(i, i + 100).join(" "));
    }

    return chunks;
  };

  return (
    <div className="modal-box bg-white max-w-[1000px]">
        
      <div className="flex justify-between items-center px-10">
        <h1 className="text-3xl font-semibold text-center mb-6">
          View Department
        </h1>
        <button
          className="text-3xl font-bold hover:text-red-500"
          onClick={() =>
            document.getElementById("View_Modal_Department").close()
          }
        >
          X
        </button>
      </div>

      <div>
        {/* Banner */}
        <DepartmentBanner Image={DepartmentData?.departmentBanner} />

        {/* Content */}
        <div className=" text-black">
          {/* Top part */}
          <div className="flex justify-between mt-11 max-w-[1200px] mx-auto">
            {/* Left part */}
            <div className="w-[700px]">
              {/* Name */}
              <h2 className="text-black font-bold text-3xl md:text-5xl text-center md:text-left">
                {DepartmentData?.diploma}
              </h2>

              {/* About */}
              <div id="About" className="mt-10 mx-5 md:mx-0">
                <h2 className="text-xl font-semibold">
                  About {DepartmentData?.diploma}
                </h2>
                <div className="space-y-1 pt-5 leading-relaxed">
                  {splitText(DepartmentData?.aboutDepartment || "").map(
                    (chunk, index) => (
                      <p key={index} className="text-gray-700 mb-[4px]">
                        {chunk}
                      </p>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Right Part */}
            <div className="w-[400px] text-white">
              {/* Info Part */}
              <div className="bg-blue-500 py-10">
                <h3 className="text-2xl font-bold text-center mb-6">
                  Department Overview
                </h3>

                {/* Chief Instructor */}
                <div className="flex justify-between items-center text-lg font-medium px-4 mb-6">
                  <p>Chief Instructor:</p>
                  <span>
                    {DepartmentData?.departmentInfo?.chief_instructor || "N/A"}
                  </span>
                </div>

                {/* Current Students */}
                <div className="flex justify-between items-center text-lg font-medium border-t border-white py-4 px-4">
                  <p>Current Students:</p>
                  <span>
                    {DepartmentData?.departmentInfo?.current_students || "N/A"}
                  </span>
                </div>

                {/* Total Teachers */}
                <div className="flex justify-between items-center text-lg font-medium border-t border-white py-4 px-4">
                  <p>Total Teachers:</p>
                  <span>
                    {DepartmentData?.departmentInfo?.total_teachers || "N/A"}
                  </span>
                </div>

                {/* Job Placements */}
                <div className="flex justify-between items-center text-lg font-medium border-t border-white py-4 px-4">
                  <p>Job Placements:</p>
                  <span>
                    {DepartmentData?.departmentInfo?.job_placement || "N/A"}
                  </span>
                </div>

                {/* Passed Students */}
                <div className="flex justify-between items-center text-lg font-medium border-t border-white py-4 px-4">
                  <p>Passed Students:</p>
                  <span>
                    {DepartmentData?.departmentInfo?.passed_students || "N/A"}
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
          <div className="mt-10 max-w-[1200px] mx-auto">
            <h2 className="text-xl font-semibold">Our Objectives</h2>
            <ul className=" pl-2 pt-2 space-y-3 ">
              {DepartmentData?.objectives.map((objective, index) => (
                <li key={index} className="flex py-2 items-center">
                  <FaArrowRight className="mr-3" />
                  {objective}
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div className="mt-10  max-w-[1200px] mx-auto">
            <h2 className="text-xl font-semibold">Features</h2>
            <ul className=" pl-2 pt-2 space-y-3 ">
              {DepartmentData?.features.map((feature, index) => (
                <li key={index} className="flex py-2 items-center">
                  <FaArrowRight className="mr-3" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Success */}
          <div className="mt-10 max-w-[1200px] mx-auto">
            <h2 className="text-xl font-semibold">Our Success</h2>
            <ul className=" pl-2 pt-2 space-y-3 ">
              {DepartmentData?.success.map((successItem, index) => (
                <li key={index} className="flex py-2 items-center">
                  <FaArrowRight className="mr-3" />
                  {successItem}
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div className="mt-10 max-w-[1200px] mx-auto">
            <h2 className="text-xl font-semibold">Admission Requirements</h2>
            <ul className=" pl-2 pt-2 space-y-3 ">
              {DepartmentData?.requirements.map((requirement, index) => (
                <li key={index} className="flex py-2 items-center">
                  <FaArrowRight className="mr-3" />
                  {requirement}
                </li>
              ))}
            </ul>
          </div>

          {/* lab_facilities */}
          <div className="mt-10 max-w-[1200px] mx-auto">
            <h2 className="text-xl font-semibold">Lab facilities</h2>
            <ul className=" pl-2 pt-2 space-y-3 ">
              {DepartmentData?.lab_facilities.map((facilities, index) => (
                <li key={index} className="flex py-2 items-center">
                  <FaArrowRight className="mr-3" />
                  {facilities}
                </li>
              ))}
            </ul>
          </div>

          {/* Qualifications, Duration */}
          <div className="mt-10 max-w-[1200px] mx-auto">
            <div className="text-lg ">
              <p className="font-semibold ">Qualifications: </p>
              <span className="ml-5">{DepartmentData?.qualifications}</span>
            </div>
            <div className="text-lg flex flex-col md:flex-row">
              <p className="font-semibold ">Duration: </p>
              <span className="ml-5">{DepartmentData?.duration}</span>
            </div>
          </div>

          {/* Course Outline */}
          <div id="Course" className="mt-10 bg-sky-200 py-5">
            <div className="max-w-[1200px] mx-auto">
              <h2 className="text-xl font-semibold">
                Course Outline - Regulation ( {DepartmentData?.regulation} )
              </h2>
              <div className="grid grid-cols-2 gap-4 pt-5">
                {DepartmentData?.course_outline.map((semester, index) => (
                  <div
                    key={index}
                    className="mt-4 border border-gray-100 p-3 transition-transform transform hover:scale-105 shadow-md hover:shadow-lg bg-white rounded-lg"
                  >
                    <h3 className="text-lg font-semibold">
                      {semester.semester}
                    </h3>
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
          <div id="Scholarship" className="mt-10 max-w-[1200px] mx-auto">
            <h2 className="text-xl font-semibold">Scholarships</h2>

            {/* Scholarship Description */}
            <div className="pt-5 space-y-3">
              <p className="text-gray-700">
                {DepartmentData?.scholarship.description}
              </p>
              <p className="text-gray-700">
                <strong>Eligibility:</strong>{" "}
                {DepartmentData?.scholarship.eligibility}
              </p>
            </div>

            {/* Scholarship Money for Each Semester */}
            <div className="pt-5 space-y-3">
              <h3 className="text-lg font-semibold">
                Scholarship Money per Semester
              </h3>

              {/* Grid Layout for Scholarships */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {DepartmentData?.course_outline.map((semester, index) => {
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
          <div className="mt-10 max-w-[1200px] mx-auto">
            <h2 className="text-xl font-semibold">BTEB Thoughts</h2>
            <p className="text-gray-700 mt-2 leading-relaxed text-lg">
              {DepartmentData?.bteb_thoughts}
            </p>
          </div>

          <p className="text-center text-3xl font-semibold py-5">Gallery</p>
          <Gallery
            images={
              Array.isArray(DepartmentData?.galleryImages)
                ? DepartmentData?.galleryImages
                : []
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ViewDepartment;
