import school from "../../assets/school.png";
import Default from "../../assets/Default.png";
import BannerDefault from "../../assets/BannerDefault.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaLongArrowAltRight,
  FaTwitter,
} from "react-icons/fa";

const Academic = () => {
  return (
    <div className=" text-black">
      {/* Main Container */}
      <div className="flex flex-col md:flex-row max-w-[1200px] mx-auto gap-5">
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
            students with essential skills in both theoretical and practical
            aspects of computing. It covers foundational concepts such as
            computer hardware, software applications, programming basics, and
            data management. The course begins with an introduction to computer
            systems, familiarizing students with operating systems, file
            management, and essential applications like word processing,
            spreadsheets, and presentation software.
          </p>

          {/* Top text-2 */}
          <p className="pt-6 text-[#7A7A7A] text-lg font-medium md:px-5 text-center md:text-left">
            In the advanced stages, the computer course delves into programming,
            web development, and data analysis, allowing students to develop
            highly sought-after skills. Participants learn to write code in
            popular programming languages, build simple websites, and work with
            databases to handle and analyze data effectively.
          </p>

          {/* Images */}
          <div className="pt-8 flex flex-col md:flex-row gap-5 items-center">
            {/* Img group 1 */}
            <div className="justify-center grid grid-cols-4 gap-5">
              <img
                src={Default}
                alt="Default Image"
                className="w-[300px] h-[250px]"
              />
              <img
                src={Default}
                alt="Default Image"
                className="w-[700px] h-[250px]"
              />
              <img
                src={Default}
                alt="Default Image"
                className="w-[300px] h-[250px] "
              />
              <img
                src={Default}
                alt="Default Image"
                className="w-[700px] h-[250px]"
              />
              <img
                src={Default}
                alt="Default Image"
                className="w-[300px] h-[250px] "
              />
              <img
                src={Default}
                alt="Default Image"
                className="w-[700px] h-[250px]"
              />
            </div>
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
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white  w-[900px] p-10 border border-gray-60">
              <p className="text-black text-2xl md:text-3xl font-semibold text-center">
                Graduate Areas of Study
              </p>

              {/* Tags */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 pt-5">
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
          <div className="pt-[400px] relative flex flex-col md:flex-row items-center md:items-start">
            <div className="bg-[#F2F8F1] px-6 py-16 md:px-11 md:py-28 w-full md:w-[600px] rounded-lg text-center md:text-left">
              <p className="text-2xl md:text-3xl font-bold">Mission & Values</p>
              <p className="text-[#7A7A7A] text-base md:text-lg font-semibold mt-4 md:w-[300px] md:mx-0">
                Lorem ipsum dolor sit amet consec teturac magna aliqua. Ut enim
                ad minim ven iamqisit amet consectet adipis.
              </p>
              <p className="text-[#7A7A7A] text-base md:text-lg font-semibold mt-4 md:w-[300px] mx-auto md:mx-0">
                Lorem ipsum dolor sit amet consec teturac magna aliqua. Ut enim
                ad minim ven iamqisit amet consectet adipis.
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
