import { useState } from "react";
import school from "../../assets/school.png";
import fetchNotices from "../../Hooks/fetchNotices";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import AcademicComp from "./AcademicComp/AcademicComp";
import AllNotices from "./AllNotices/AllNotices";
import AllRoutines from "./AllRoutines/AllRoutines";

const Academic = () => {
  const { data: Notices, content } = fetchNotices();
  const [activeTab, setActiveTab] = useState("academic"); // Track the active tab

  // Render loading or error content if present
  if (content) {
    return content;
  }

  // Handle button click to change active tab
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="mt-[105px] text-black">
      <div className="flex flex-col md:flex-row max-w-[1200px] mx-auto">
        {/* Buttons */}
        <div className="md:w-2/5 space-y-2 mt-20 text-center md:text-left mx-5">
          <button
            className={`font-semibold text-2xl p-5 w-full md:w-4/5 text-left md:text-left ${
              activeTab === "academic"
                ? "bg-[#002147] text-white"
                : "bg-[#F2F8F1] hover:bg-[#002147] hover:text-white"
            } transition-colors duration-700`}
            onClick={() => handleTabClick("academic")}
          >
            Academic
          </button>
          <button
            className={`font-semibold text-2xl p-5 w-full md:w-4/5 text-left md:text-left ${
              activeTab === "notices"
                ? "bg-[#002147] text-white"
                : "bg-[#F2F8F1] hover:bg-[#002147] hover:text-white"
            } transition-colors duration-700`}
            onClick={() => handleTabClick("notices")}
          >
            All Notices
          </button>
          <button
            className={`font-semibold text-2xl p-5 w-full md:w-4/5 text-left md:text-left ${
              activeTab === "routines"
                ? "bg-[#002147] text-white"
                : "bg-[#F2F8F1] hover:bg-[#002147] hover:text-white"
            } transition-colors duration-700`}
            onClick={() => handleTabClick("routines")}
          >
            All Routines
          </button>
          <button
            className={`font-semibold text-2xl p-5 w-full md:w-4/5 text-left md:text-left ${
              activeTab === "results"
                ? "bg-[#002147] text-white"
                : "bg-[#F2F8F1] hover:bg-[#002147] hover:text-white"
            } transition-colors duration-700`}
            onClick={() => handleTabClick("results")}
          >
            Results
          </button>
        </div>

        {/* Content */}
        <div className="md:w-3/5 mt-20">
          {activeTab === "academic" && <AcademicComp />}
          {activeTab === "notices" && <AllNotices />}
          {activeTab === "routines" && <AllRoutines />}
          {activeTab === "results" && (
            <iframe
              src="https://btebresultszone.com/results"
              width="100%"
              height="500px"
              frameborder="0"
            ></iframe>
          )}
        </div>
      </div>

      {/* Bottom Part */}
      <div className="bg-[#2e465e] mt-28 py-20 text-center relative">
        <img
          src={school}
          alt="school"
          className="absolute -top-16 left-[850px]"
        />
        <div>
          <p className="text-2xl text-[#B9B9BA] w-[700px] mx-auto max-w-[800px] mb-8">
            University Life Nurtures an Inclusive Campus Life Environment Where
            Students Grow Intellectually and Engage in Meaningful Experiential
            Opportunities.
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-3">
            <p className="bg-[#073972] hover:bg-green-500 transition-colors duration-700 text-white px-4 py-4">
              <FaFacebookF className="text-xl" />
            </p>
            <p className="bg-[#073972] hover:bg-green-500 transition-colors duration-700 text-white px-4 py-4">
              <FaInstagram className="text-xl" />
            </p>
            <p className="bg-[#073972] hover:bg-green-500 transition-colors duration-700 text-white px-4 py-4">
              <FaTwitter className="text-xl" />
            </p>
            <p className="bg-[#073972] hover:bg-green-500 transition-colors duration-700 text-white px-4 py-4">
              <FaLinkedinIn className="text-xl" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academic;
