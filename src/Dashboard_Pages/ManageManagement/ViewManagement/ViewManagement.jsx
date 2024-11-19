import React from "react";

const ViewManagement = ({ managementData }) => {
  return (
    <div className="modal-box bg-white space-y-3">
      <img
        src={managementData?.image}
        alt={managementData?.name}
        className="w-full h-56 object-cover rounded-md mb-4"
      />
      <h3 className="text-2xl font-semibold">{managementData?.name}</h3>
      <p className="text-gray-500">{managementData?.designation}</p>
      <p>
        <strong>Department:</strong> {managementData?.department}
      </p>
      <p>
        <strong>Email:</strong> {managementData?.email}
      </p>
      <p>
        <strong>Phone:</strong> {managementData?.phone}
      </p>
      <p>
        <strong>About Me:</strong> {managementData?.about_me}
      </p>
      <p>
        <strong>Background:</strong> {managementData?.background}
      </p>
      <p>
        <strong>Responsibilities:</strong>{" "}
        <ul className="list-disc pl-5">
          {managementData?.responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      </p>
      <p>
        <strong>Achievements:</strong>{" "}
        <ul className="list-disc pl-5">
          {managementData?.achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </p>
      <p>
        <strong>More Info:</strong> {managementData?.more_info}
      </p>
      <button
        className="mt-4 btn btn-primary"
        onClick={() => document.getElementById("View_Modal_Management").close()}
      >
        Close
      </button>
    </div>
  );
};

export default ViewManagement;
