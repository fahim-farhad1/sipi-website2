import { useState } from "react";
import school from "../../assets/school.png";
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
  const [activeTab, setActiveTab] = useState("academic"); // Track the active tab

  // Handle button click to change active tab
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className=" text-black">
      {/* Main Container */}
      <div className="flex flex-col md:flex-row max-w-[1200px] mx-auto gap-5">
        {/* Left Section (Buttons) */}
        <div className="w-full md:w-1/3 md:fixed mt-12 md:mt-0 h-full top-[180px] space-y-2 px-5">
          <button
            className={`font-semibold text-2xl p-5 w-full ${
              activeTab === "academic"
                ? "bg-[#002147] text-white"
                : "bg-[#F2F8F1] hover:bg-[#002147] hover:text-white"
            } transition-colors duration-700 md:w-[400px] text-left`}
            onClick={() => handleTabClick("academic")}
          >
            Academic
          </button>
          <button
            className={`font-semibold text-2xl p-5 w-full ${
              activeTab === "notices"
                ? "bg-[#002147] text-white"
                : "bg-[#F2F8F1] hover:bg-[#002147] hover:text-white"
            } transition-colors duration-700 md:w-[400px] text-left`}
            onClick={() => handleTabClick("notices")}
          >
            All Notices
          </button>
          <button
            className={`font-semibold text-2xl p-5 w-full ${
              activeTab === "routines"
                ? "bg-[#002147] text-white"
                : "bg-[#F2F8F1] hover:bg-[#002147] hover:text-white"
            } transition-colors duration-700 md:w-[400px] text-left`}
            onClick={() => handleTabClick("routines")}
          >
            All Routines
          </button>
          <button
            className={`font-semibold text-2xl p-5 w-full ${
              activeTab === "results"
                ? "bg-[#002147] text-white"
                : "bg-[#F2F8F1] hover:bg-[#002147] hover:text-white"
            } transition-colors duration-700 md:w-[400px] text-left`}
            onClick={() => handleTabClick("results")}
          >
            Results
          </button>
        </div>

        {/* Right Section (Content) */}
        <div className="w-full md:w-2/3 md:ml-auto md:pl-10 md:mt-[80px]">
          {activeTab === "academic" && <AcademicComp />}
          {activeTab === "notices" && <AllNotices />}
          {activeTab === "routines" && <AllRoutines />}
          {activeTab === "results" && (
            <iframe
              src="https://btebresultszone.com/results"
              width="100%"
              height="500px"
              frameBorder="0"
            ></iframe>
          )}
        </div>
      </div>

      {/* Bottom Part */}
      <div className="bg-[#2e465e] mt-28 py-10 text-center">
        {/* Image */}
        <img src={school} alt="school" className="mx-auto " />
        <div className="">
          <p className="text-2xl text-[#B9B9BA] w-[90%] max-w-[800px] mx-auto mb-8">
            University Life Nurtures an Inclusive Campus Life Environment Where
            Students Grow Intellectually and Engage in Meaningful Experiential
            Opportunities.
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-3 flex-wrap">
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
