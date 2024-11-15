import Default from "../../../assets/Default.png";
import BannerDefault from "../../../assets/BannerDefault.png";
import { FaLongArrowAltRight } from "react-icons/fa";

const AcademicComp = () => {
  return (
    <div>
      {/* Top Part */}
      <div className="flex flex-col md:flex-row items-center gap-5 w-full">
        <p className="text-[128px] font-semibold">12+</p>
        <p className="text-3xl md:text-5xl font-semibold text-center md:text-left">
          BTEB Affiliated Courses
        </p>
      </div>

      {/* Top text-1 */}
      <p className="pt-12 text-[#7A7A7A] text-lg font-medium md:px-5 text-center md:text-left">
        The computer course offered at our institute is designed to equip
        students with essential skills in both theoretical and practical aspects
        of computing. It covers foundational concepts such as computer hardware,
        software applications, programming basics, and data management. The
        course begins with an introduction to computer systems, familiarizing
        students with operating systems, file management, and essential
        applications like word processing, spreadsheets, and presentation
        software.
      </p>

      {/* Top text-2 */}
      <p className="pt-6 text-[#7A7A7A] text-lg font-medium md:px-5 text-center md:text-left">
        In the advanced stages, the computer course delves into programming, web
        development, and data analysis, allowing students to develop highly
        sought-after skills. Participants learn to write code in popular
        programming languages, build simple websites, and work with databases to
        handle and analyze data effectively. 
      </p>

      {/* Images */}
      <div className="pt-8 flex flex-col md:flex-row gap-5 items-center">
        {/* Img group 1 */}
        <div className="relative flex justify-center">
          <img
            src={Default}
            alt="Default Image"
            className="w-60 h-[250px] object-cover mx-auto"
          />
          <img
            src={Default}
            alt="Default Image"
            className="w-60 h-[250px] absolute top-44 left-11 object-cover mx-auto"
            style={{ marginTop: "-40px" }} // Adjust this value to control overlap
          />
        </div>

        <img
          src={Default}
          alt="Default Image"
          className="w-60 h-[250px] object-cover mx-auto"
        />

        {/* Img group 2 */}
        <div className="relative flex justify-center">
          <img
            src={Default}
            alt="Default Image"
            className="w-60 h-[250px] object-cover mx-auto"
          />
          <img
            src={Default}
            alt="Default Image"
            className="w-60 h-[250px] absolute top-44 left-11 object-cover mx-auto"
            style={{ marginTop: "-40px" }} // Adjust this value to control overlap
          />
        </div>
      </div>

      {/* Degree Level */}
      <div className="pt-48">
        <h5 className="text-4xl font-bold text-center md:text-left">
          Degree Level
        </h5>

        {/* Mid text-1 */}
        <p className="pt-6 text-[#7A7A7A] text-lg font-medium md:px-5 text-center md:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tem incid idunt ut labore et dolore magna aliqua. Ut enim ad
          minim ven iam quis nostrud xerci tation ulla mco laboris nisi ut Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem
          incid idunt ut labore
        </p>

        {/* Mid text-2 */}
        <p className="pt-6 text-[#7A7A7A] text-lg font-medium md:px-5 text-center md:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tem incid idunt ut labore et dolorem gna aliqua. Ut enim ad
          minim ven iam quis nostrud xerci.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row gap-5 px-5 pt-5">
        <button className="text-xl font-semibold bg-[#F2f8f1] hover:text-green-500 transition-colors duration-700 w-full md:w-80 h-40 rounded-lg">
          Graduate
        </button>
        <button className="text-xl font-semibold bg-[#F2f8f1] hover:text-green-500 transition-colors duration-700 w-full md:w-80 h-40 rounded-lg">
          Online Education
        </button>
        <button className="text-xl font-semibold bg-[#F2f8f1] hover:text-green-500 transition-colors duration-700 w-full md:w-80 h-40 rounded-lg">
          Undergraduate
        </button>
      </div>

      {/* Banner */}
      <div className="pt-10 relative">
        {/* Banner Image */}
        <img
          src={BannerDefault}
          alt="Banner"
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
        />

        {/* Overlayed Section */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white w-[90%] sm:w-[80%] md:w-[600px] px-10 md:px-20 py-10 md:py-16 rounded-lg shadow-lg">
          <p className="text-black text-2xl md:text-3xl font-semibold text-center">
            Graduate Areas of Study
          </p>

          {/* Tags */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-5">
            <button className="flex items-center justify-between text-lg md:text-xl bg-[#f2F8F1] hover:text-green-500 transition-colors duration-700 px-5 py-2 rounded-lg">
              <span>Business</span>
              <FaLongArrowAltRight className="ml-5" />
            </button>
            <button className="flex items-center justify-between text-lg md:text-xl bg-[#f2F8F1] hover:text-green-500 transition-colors duration-700 px-5 py-2 rounded-lg">
              <span>Business</span>
              <FaLongArrowAltRight className="ml-5" />
            </button>
            <button className="flex items-center justify-between text-lg md:text-xl bg-[#f2F8F1] hover:text-green-500 transition-colors duration-700 px-5 py-2 rounded-lg">
              <span>Business</span>
              <FaLongArrowAltRight className="ml-5" />
            </button>
            <button className="flex items-center justify-between text-lg md:text-xl bg-[#f2F8F1] hover:text-green-500 transition-colors duration-700 px-5 py-2 rounded-lg">
              <span>Business</span>
              <FaLongArrowAltRight className="ml-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Value Section */}
      <div className="pt-40 relative flex flex-col md:flex-row items-center md:items-start">
        <div className="bg-[#F2F8F1] px-6 py-16 md:px-11 md:py-28 w-full md:w-[600px] rounded-lg text-center md:text-left">
          <p className="text-2xl md:text-3xl font-bold">Mission & Values</p>
          <p className="text-[#7A7A7A] text-base md:text-lg font-semibold mt-4 md:w-[300px] mx-auto md:mx-0">
            Lorem ipsum dolor sit amet consec teturac magna aliqua. Ut enim ad
            minim ven iamqisit amet consectet adipis.
          </p>
          <p className="text-[#7A7A7A] text-base md:text-lg font-semibold mt-4 md:w-[300px] mx-auto md:mx-0">
            Lorem ipsum dolor sit amet consec teturac magna aliqua. Ut enim ad
            minim ven iamqisit amet consectet adipis.
          </p>
          <p className="text-green-500 text-base md:text-lg font-semibold pt-5 cursor-pointer">
            Read More
          </p>
        </div>

        {/* Image positioned over content */}
        <img
          src={Default}
          alt="Default Image"
          className="mt-8 md:mt-0 md:absolute md:left-[480px] md:bottom-14 w-[280px] md:w-[400px] h-[250px] md:h-[380px] object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default AcademicComp;
