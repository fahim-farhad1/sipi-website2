import React from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Loader from "../../Shared/Loader/Loader";
import { useQuery } from "@tanstack/react-query";

const ManageCampus = () => {
  const axiosPublic = useAxiosPublic();

  // Fetch Campus Data
  const {
    data: CampusData = [],
    isLoading: CampusDataIsLoading,
    error: CampusDataError,
    refetch,
  } = useQuery({
    queryKey: ["CampusData"],
    queryFn: () => axiosPublic.get("/Campus").then((res) => res.data),
  });

  // Loader State
  if (CampusDataIsLoading) {
    return <Loader />;
  }

  // Error State
  if (CampusDataError) {
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
    <div className="bg-gray-200 min-h-screen p-6">
      {/* Top Section */}
      <div className="flex justify-between border-b-2 border-gray-600 p-6 items-center mb-6">
        <p className="text-3xl font-semibold text-center">Manage Campus</p>
        <button
          className="border border-green-500 px-8 py-3 font-semibold hover:bg-green-500 hover:text-white"
          onClick={() =>
            document.getElementById("Add_Campus_Modal").showModal()
          }
        >
          + Add Campus
        </button>
      </div>

      {/* Display Campus Data as Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CampusData.map((campus) => (
          <div
            key={campus._id}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col"
          >
            {/* Campus Image */}
            <img
              src={campus.campusImg}
              alt={`Image of ${campus.campus}`}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />

            {/* Campus Name */}
            <h2 className="text-2xl font-semibold text-gray-800">
              {campus.campus}
            </h2>

            {/* Campus Address */}
            <p className="text-gray-600 mt-2">
              {campus.campusAddress.address}, {campus.campusAddress.area},{" "}
              {campus.campusAddress.city} - {campus.campusAddress.postalCode},{" "}
              {campus.campusAddress.country}
            </p>

            {/* Email Address */}
            <p className="text-gray-600 mt-2">
              <strong>Email:</strong> {campus.emailAddress}
            </p>

            {/* Mobile Numbers (display as list) */}
            <div className="text-gray-600 mt-2">
              <strong>Mobile:</strong>
              <ul className="list-disc pl-6">
                {campus.mobileNumbers.map((number, index) => (
                  <li key={index}>{number}</li>
                ))}
              </ul>
            </div>

            {/* Google Maps Link */}
            <p className="text-gray-600 mt-2">
              <strong>Google Maps Link:</strong>
              <a
                href={campus.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View on Google Maps
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageCampus;
