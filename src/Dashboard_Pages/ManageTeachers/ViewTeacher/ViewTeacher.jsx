import React from "react";

const ViewTeacher = ({ teacherData }) => {
  return (
    <div className="modal-box bg-white space-y-3">
      <img
        src={teacherData?.image}
        alt={teacherData?.name}
        className="w-full h-56 object-cover rounded-md mb-4"
      />
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
      <button
        className="mt-4 btn btn-primary"
        onClick={() => document.getElementById("View_Modal_Teacher").close()}
      >
        Close
      </button>
    </div>
  );
};

export default ViewTeacher;
