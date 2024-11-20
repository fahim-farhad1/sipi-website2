import React from "react";

const ViewManagement = ({ managementData }) => {
  return (
    <div className="modal-box bg-white max-w-[1000px] p-0 ">
      <div className="flex justify-between items-center border-b border-gray-300 px-10">
        <h1 className="text-3xl font-semibold text-center mb-6">
          View Management
        </h1>
        <button
          className="text-3xl font-bold hover:text-red-500"
          onClick={() =>
            document.getElementById("View_Modal_Management").close()
          }
        >
          X
        </button>
      </div>

      <div className="flex py-5 px-10 gap-5">
        <img
          src={managementData?.image}
          alt={managementData?.name}
          className="w-full h-56 object-cover rounded-md mb-4"
        />
        <div className="space-y-2">
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
        </div>
      </div>
    </div>
  );
};

export default ViewManagement;
