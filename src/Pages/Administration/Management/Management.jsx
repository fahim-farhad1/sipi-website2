import React, { useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Shared/Loader/Loader";
import Default from "../../../assets/Default.png";
import DepartmentBanner from "../../../Components/Banners/DepartmentBanner";
import bannerImage from  "../../../assets/Departments/image1.jpg";

const Management = () => {
  const axiosPublic = useAxiosPublic();
  const [selectedManagement, setSelectedManagement] = useState(null);

  // Fetch Management Data
  const {
    data: ManagementData = [],
    isLoading: ManagementDataIsLoading,
    error: ManagementDataError,
  } = useQuery({
    queryKey: ["ManagementData"],
    queryFn: () => axiosPublic.get(`/Management`).then((res) => res.data),
  });

  // Loader State
  if (ManagementDataIsLoading) {
    return <Loader />;
  }

  // Error State
  if (ManagementDataError) {
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
    <div className="py-10 px-4 bg-gray-50">
      <div>
        <DepartmentBanner Image={bannerImage} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto mt-20">
        {ManagementData.map((member) => (
          <div
            key={member._id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full object-cover"
              onError={(e) => (e.target.src = Default)}
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-blue-600">{member.name}</h2>
              <p className="text-gray-700 text-sm">
                {member.designation} - {member.department}
              </p>
              <p className="mt-2 text-gray-600 text-sm line-clamp-3">
                {member.about_me}
              </p>
              {/* <div className="mt-4 text-right">
                <button
                  className="text-blue-500 hover:underline"
                  onClick={() => setSelectedManagement(member)}
                >
                  See More ...
                </button>
              </div> */}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedManagement && (
        <div className="fixed inset-0 bg-black text-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white h-[700px] overflow-auto rounded-lg max-w-[800px] p-5">
            <img
              src={selectedManagement.image || Default}
              alt={selectedManagement.name}
              className="w-full h-52 object-cover rounded-t-lg"
              onError={(e) => (e.target.src = Default)}
            />
            <h2 className="text-2xl font-bold text-blue-600 pt-5">
              {selectedManagement.name}
            </h2>
            <p className="text-lg font-bold mb-2">
              {selectedManagement.designation}
            </p>
            <p className="text-md mb-2">
              <strong>Department:</strong> {selectedManagement.department}
            </p>
            <p className="text-md mb-2">
              <strong>About Me:</strong> {selectedManagement.about_me}
            </p>
            <p className="text-md mb-2">
              <strong>Background:</strong> {selectedManagement.background}
            </p>
            <p className="text-md mb-2">
              <strong>Responsibilities:</strong>
              <ul className="list-disc ml-6">
                {selectedManagement.responsibilities?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </p>
            <p className="text-md mb-2">
              <strong>Achievements:</strong>
              <ul className="list-disc ml-6">
                {selectedManagement.achievements?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </p>
            <p className="text-md mb-4">
              <strong>More Info:</strong>{" "}
              {selectedManagement.more_info || "N/A"}
            </p>
            <button
              className="mt-4 px-6 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-400 transition duration-300"
              onClick={() => setSelectedManagement(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Management;
