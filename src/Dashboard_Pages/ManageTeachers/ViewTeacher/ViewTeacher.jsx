import React from "react";

const ViewTeacher = ({ teacherData }) => {
  return (
    <div className="modal-box bg-white max-w-[1000px] p-0 ">
      <div className="flex justify-between items-center border-b border-gray-300 px-10">
        <h1 className="text-3xl font-semibold text-center mb-6">
          View Teacher
        </h1>
        <button
          className="text-3xl font-bold hover:text-red-500"
          onClick={() => document.getElementById("View_Modal_Teacher").close()}
        >
          X
        </button>
      </div>

      <div className="flex py-5 px-10 gap-5">
        <img
          src={teacherData?.image}
          alt={teacherData?.name}
          className="w-full h-56 object-cover rounded-md mb-4"
        />
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold">{teacherData?.name}</h3>
          <p className="text-gray-500">{teacherData?.designation}</p>
          <p>
            <strong>Department:</strong> {teacherData?.department}
          </p>
          <p>
            <strong>Subjects Taught:</strong>{" "}
            {teacherData?.subjects_taught.join(", ")}
          </p>
          <p>
            <strong>Awards:</strong> {teacherData?.awards.join(", ")}
          </p>
          <p>
            <strong>About Me:</strong> {teacherData?.about_me}
          </p>
          <p>
            <strong>Background:</strong> {teacherData?.background}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewTeacher;
