import React from "react";

const ViewApplicant = ({ applicantData }) => {
  if (!applicantData) {
    return <div>No data available</div>; // Handle case where no data is passed
  }

  return (
    <div className="modal-box bg-white max-w-[1000px] p-0 ">
      <div className="flex justify-between items-center border-b border-gray-300 px-10">
        <h1 className="text-3xl font-semibold text-center mb-6">
          View Applicant
        </h1>
        <button
          className="text-3xl font-bold hover:text-red-500"
          onClick={() =>
            document.getElementById("View_Modal_Applicant").close()
          }
        >
          X
        </button>
      </div>

      {/* Applicant Data Section */}
      <div className="px-10 py-6">
        <div className=" space-y-2">
          <div className="p-4 bg-gray-100 rounded-md text-lg flex justify-between">
            <strong className="block text-gray-700">Full Name:</strong>
            <span className="text-gray-900">{applicantData.fullName}</span>
          </div>
          <div className="p-4 bg-gray-100 rounded-md text-lg flex justify-between">
            <strong className="block text-gray-700">Father's Name:</strong>
            <span className="text-gray-900">{applicantData.fathersName}</span>
          </div>
          <div className="p-4 bg-gray-100 rounded-md text-lg flex justify-between">
            <strong className="block text-gray-700">Mother's Name:</strong>
            <span className="text-gray-900">{applicantData.mothersName}</span>
          </div>
          <div className="p-4 bg-gray-100 rounded-md text-lg flex justify-between">
            <strong className="block text-gray-700">Date of Birth:</strong>
            <span className="text-gray-900">{applicantData.dateOfBirth}</span>
          </div>
          <div className="p-4 bg-gray-100 rounded-md text-lg flex justify-between">
            <strong className="block text-gray-700">Email:</strong>
            <span className="text-gray-900">{applicantData.email}</span>
          </div>
          <div className="p-4 bg-gray-100 rounded-md text-lg flex justify-between">
            <strong className="block text-gray-700">Address:</strong>
            <span className="text-gray-900">{applicantData.address}</span>
          </div>
          <div className="p-4 bg-gray-100 rounded-md text-lg flex justify-between">
            <strong className="block text-gray-700">Mobile Number:</strong>
            <span className="text-gray-900">{applicantData.mobileNumber}</span>
          </div>
          <div className="p-4 bg-gray-100 rounded-md text-lg flex justify-between">
            <strong className="block text-gray-700">Guardian's Mobile:</strong>
            <span className="text-gray-900">
              {applicantData.guardiansMobile}
            </span>
          </div>
          <div className="p-4 bg-gray-100 rounded-md text-lg flex justify-between">
            <strong className="block text-gray-700">Minority Group:</strong>
            <span className="text-gray-900">{applicantData.minorityGroup}</span>
          </div>
          <div className="p-4 bg-gray-100 rounded-md text-lg flex justify-between">
            <strong className="block text-gray-700">
              Freedom Fighter's Child:
            </strong>
            <span className="text-gray-900">
              {applicantData.freedomFighterChild}
            </span>
          </div>
          <div className="p-4 bg-gray-100 rounded-md text-lg flex justify-between">
            <strong className="block text-gray-700">
              Admission Technology:
            </strong>
            <span className="text-gray-900">
              {applicantData.admissionTechnology}
            </span>
          </div>
          <div className="p-4 bg-gray-100 rounded-md text-lg flex justify-between">
            <strong className="block text-gray-700">Exam Name:</strong>
            <span className="text-gray-900">{applicantData.examName}</span>
          </div>
          <div className="p-4 bg-gray-100 rounded-md text-lg flex justify-between">
            <strong className="block text-gray-700">Passed Year:</strong>
            <span className="text-gray-900">{applicantData.passedYear}</span>
          </div>
          <div className="p-4 bg-gray-100 rounded-md text-lg flex justify-between">
            <strong className="block text-gray-700">Division:</strong>
            <span className="text-gray-900">{applicantData.division}</span>
          </div>
          <div className="p-4 bg-gray-100 rounded-md text-lg flex justify-between">
            <strong className="block text-gray-700">Board:</strong>
            <span className="text-gray-900">{applicantData.board}</span>
          </div>
          <div className="p-4 bg-gray-100 rounded-md text-lg flex justify-between">
            <strong className="block text-gray-700">SSC Roll:</strong>
            <span className="text-gray-900">{applicantData.sscRoll}</span>
          </div>
          <div className="p-4 bg-gray-100 rounded-md text-lg flex justify-between">
            <strong className="block text-gray-700">
              SSC Registration Number:
            </strong>
            <span className="text-gray-900">
              {applicantData.sscRegistrationNumber}
            </span>
          </div>
          <div className="p-4 bg-gray-100 rounded-md text-lg flex justify-between">
            <strong className="block text-gray-700">GPA:</strong>
            <span className="text-gray-900">{applicantData.gpa}</span>
          </div>
          <div className="p-4 bg-gray-100 rounded-md text-lg flex justify-between">
            <strong className="block text-gray-700">Applicant Status:</strong>
            <span className="text-gray-900">
              {applicantData.applicantStatus}
            </span>
          </div>
          <div className="p-4 bg-gray-100 rounded-md text-lg flex justify-between">
            <strong className="block text-gray-700">Applied Date:</strong>
            <span className="text-gray-900">{applicantData.appliedDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewApplicant;
