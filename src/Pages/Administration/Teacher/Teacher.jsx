import React, { useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Shared/Loader/Loader";
import Default from "../../../assets/Default.png";
import DepartmentBanner from "../../../Components/Banners/DepartmentBanner";
import { useParams } from "react-router-dom";

const Teacher = () => {
  const axiosPublic = useAxiosPublic();
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  // Fetch Teacher Data
  const {
    data: TeachersData = [],
    isLoading: TeachersDataIsLoading,
    error: TeachersDataError,
  } = useQuery({
    queryKey: ["TeachersData"],
    queryFn: () => axiosPublic.get(`/Teachers`).then((res) => res.data),
  });

  // Sort Teachers by Designation Priority
  const designationOrder = [
    "Chief Instructor",
    "Senior Instructor",
    "Junior Instructor",
    "New Instructor",
    "Intern",
  ];

  const sortedTeachers = [...TeachersData].sort((a, b) => {
    const orderA =
      designationOrder.indexOf(a.designation) !== -1
        ? designationOrder.indexOf(a.designation)
        : Infinity;
    const orderB =
      designationOrder.indexOf(b.designation) !== -1
        ? designationOrder.indexOf(b.designation)
        : Infinity;
    return orderA - orderB;
  });

  // Group Teachers by Department
  const groupedTeachers = sortedTeachers.reduce((groups, teacher) => {
    const department = teacher.department || "Others";
    if (!groups[department]) {
      groups[department] = [];
    }
    groups[department].push(teacher);
    return groups;
  }, {});

  // Loader State
  if (TeachersDataIsLoading) {
    return <Loader />;
  }

  // Error State
  if (TeachersDataError) {
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
    <div className="py-5 text-gray-800">
      <DepartmentBanner />
      <div className="mt-10">
        <h1 className="text-center font-bold text-4xl text-blue-600 mb-12">
          Meet Our Teachers
        </h1>
        <div className="max-w-[1200px] mx-auto">
          {Object.entries(groupedTeachers).map(([department, teachers]) => (
            <div key={department} className="mb-12">
              <h2 className="text-3xl font-semibold text-blue-500 border-b-4 border-blue-300 pb-2 mb-6">
                {department}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
                {teachers.map((teacher) => (
                  <div
                    key={teacher._id}
                    className="shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-bl from-slate-200 to-white"
                  >
                    <img
                      src={teacher.image || Default}
                      alt={teacher.name}
                      className="w-full h-52 object-cover rounded-t-lg"
                      onError={(e) => (e.target.src = Default)}
                    />
                    <div className="p-5">
                      <h3 className="text-xl font-bold text-gray-800">
                        {teacher.name}
                      </h3>
                      <p className="text-md text-gray-600">
                        {teacher.designation}
                      </p>
                      <p className="pt-2">
                        <strong>Department:</strong>{" "}
                        {teacher.department || "N/A"}
                      </p>
                      <p className="pt-2">
                        <strong>Subjects:</strong>{" "}
                        {teacher.subjects_taught?.length > 0
                          ? teacher.subjects_taught.join(", ")
                          : "N/A"}
                      </p>
                      <p className="pt-2">
                        <strong>Awards:</strong>{" "}
                        {teacher.awards?.length > 0
                          ? teacher.awards.join(", ")
                          : "N/A"}
                      </p>
                      <div className="mt-4 text-right">
                        <button
                          className="text-blue-500 hover:underline"
                          onClick={() => setSelectedTeacher(teacher)}
                        >
                          See More ...
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedTeacher && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg max-w-[800px] p-5">
            <img
              src={selectedTeacher.image || Default}
              alt={selectedTeacher.name}
              className="w-full h-52 object-cover rounded-t-lg"
              onError={(e) => (e.target.src = Default)}
            />
            <h2 className="text-2xl font-bold text-blue-600 pt-5">
              {selectedTeacher.name}
            </h2>
            <p className="text-lg font-bold mb-2">
              {selectedTeacher.designation}
            </p>
            <p className="text-md mb-2">
              <strong>Department:</strong> <p>{selectedTeacher.department}</p>
            </p>
            <p className="text-md mb-2 ">
              <strong>About Me:</strong>{" "}
              <p>{selectedTeacher.about_me || "N/A"}</p>
            </p>
            <p className="text-md mb-2">
              <strong>Background:</strong> {selectedTeacher.background || "N/A"}
            </p>
            <p className="text-md mb-2">
              <strong>Subjects Taught:</strong>{" "}
              {selectedTeacher.subjects_taught?.length > 0
                ? selectedTeacher.subjects_taught.join(", ")
                : "N/A"}
            </p>
            <p className="text-md mb-2">
              <strong>Awards:</strong>{" "}
              {selectedTeacher.awards?.length > 0
                ? selectedTeacher.awards.join(", ")
                : "N/A"}
            </p>
            <p className="text-md mb-2">
              <strong>Award Date:</strong> {selectedTeacher.award_date || "N/A"}
            </p>
            <p className="text-md mb-2">
              <strong>Notable Contributions:</strong>{" "}
              {selectedTeacher.notable_contributions?.length > 0
                ? selectedTeacher.notable_contributions.join(", ")
                : "N/A"}
            </p>
            <p className="text-md mb-4">
              <strong>More Info:</strong> {selectedTeacher.more_info || "N/A"}
            </p>
            <button
              className="mt-4 px-6 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-400 transition duration-300"
              onClick={() => setSelectedTeacher(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Teacher;
