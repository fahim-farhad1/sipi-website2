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
import Gallery from "../../Components/Gallary/Gallery";

const Academic = () => {
  const GalleryImages = [
    "https://i.ibb.co.com/P9Bn5dx/trainer10.jpg",
    "https://i.ibb.co.com/4N0nmWk/trainer9.jpg",
    "https://i.ibb.co.com/sFbg1GC/trainer8.jpg",
    "https://i.ibb.co.com/vzT51NW/trainer7.jpg",
    "https://i.ibb.co.com/wYMGHKh/trainer6.jpg",
    "https://i.ibb.co.com/qW0fPCJ/trainer5.jpg",
    "https://i.ibb.co.com/HptxfC4/trainer4.jpg",
    "https://i.ibb.co.com/gJYxGRR/trainer3.jpg",
    "https://i.ibb.co.com/c121D0Y/trainer1.jpg",
    "https://i.ibb.co.com/gR4tqQ6/trainer2.jpg",
    "https://i.ibb.co.com/2Y5tf5q/24.jpg",
    "https://i.ibb.co.com/tJZPZgw/23.jpg",
    "https://i.ibb.co.com/wQRQZVC/22.jpg",
    "https://i.ibb.co.com/tD69DLG/21.jpg",
    "https://i.ibb.co.com/phkgxpG/20.jpg",
    "https://i.ibb.co.com/0JfVKGP/19.jpg",
    "https://i.ibb.co.com/VCvZb0V/18.jpg",
    "https://i.ibb.co.com/Rhhm3sT/16.jpg",
    "https://i.ibb.co.com/7nr0MKb/17.jpg",
    "https://i.ibb.co.com/HH7nxPN/15.jpg",
    "https://i.ibb.co.com/mzJQ2KF/14.jpg",
    "https://i.ibb.co.com/yy81dMj/13.jpg",
    "https://i.ibb.co.com/GVft1yn/12.jpg",
    "https://i.ibb.co.com/B294FP3/11.jpg",
    "https://i.ibb.co.com/SR7rrn4/10.jpg",
    "https://i.ibb.co.com/MV6h0zR/9.jpg",
    "https://i.ibb.co.com/sK6c4Sg/8.jpg",
    "https://i.ibb.co.com/gd52G1n/7.jpg",
    "https://i.ibb.co.com/P6ZT3P6/6.jpg",
    "https://i.ibb.co.com/1RsfBYJ/4.jpg",
    "https://i.ibb.co.com/YNDv7GW/3.jpg",
    "https://i.ibb.co.com/fv6ZRKG/1.jpg",
  ];

  return (
    <div className="text-black">
      {/* Main Container */}
      <div className="gap-5">
        {/* Top Part */}
        <div className="max-w-[1200px] mx-auto px-5">
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
            aspects of computing...
          </p>

          {/* Top text-2 */}
          <p className="pt-6 text-[#7A7A7A] text-lg font-medium md:px-5 text-center md:text-left">
            In the advanced stages, the computer course delves into programming,
            web development, and data analysis...
          </p>
        </div>

        {/* Gallery */}
        <div className="my-32">
          <Gallery images={GalleryImages} />
        </div>

        {/* Banner */}
        <div className="pt-10 relative max-w-[1200px] mx-auto">
          <img
            src={BannerDefault}
            alt="Banner"
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
          />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white w-full sm:max-w-[900px] p-10 border border-gray-60">
            <p className="text-black text-2xl md:text-3xl font-semibold text-center">
              Graduate Areas of Study
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 pt-5 overflow-auto">
              {[
                "Business",
                "Engineering",
                "Health",
                "Science",
                "Arts",
                "Law",
                "Education",
                "Social Sciences",
                "Technology",
                "Environment",
              ].map((tag, index) => (
                <button
                  key={index}
                  className="flex items-center justify-between text-lg md:text-xl bg-[#f2F8F1] hover:text-green-500 transition-colors duration-700 px-5 py-2 rounded-lg"
                >
                  <span>{tag}</span>
                  <FaLongArrowAltRight className="ml-5" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Value Section */}
        <div className="pt-[400px] relative flex flex-col md:flex-row items-center md:items-start max-w-[1200px] mx-auto px-5">
          <div className="bg-[#F2F8F1] px-6 py-16 md:px-11 md:py-28 w-full md:w-[600px] rounded-lg text-center md:text-left">
            <p className="text-2xl md:text-3xl font-bold">Mission & Values</p>
            <p className="text-[#7A7A7A] text-base md:text-lg font-semibold mt-4 md:w-[300px] mx-auto md:mx-0">
              Lorem ipsum dolor sit amet consec teturac magna aliqua. Ut enim ad
              minim veniamqisit amet consectet adipis...
            </p>
            <p className="text-[#7A7A7A] text-base md:text-lg font-semibold mt-4 md:w-[300px] mx-auto md:mx-0">
              Lorem ipsum dolor sit amet consec teturac magna aliqua. Ut enim ad
              minim veniamqisit amet consectet adipis...
            </p>
            <p className="text-green-500 text-base md:text-lg font-semibold pt-5 cursor-pointer">
              Read More
            </p>
          </div>
          <img
            src={Default}
            alt="Default Image"
            className="mt-8 md:mt-0 md:absolute md:left-[480px] md:bottom-14 w-[280px] md:w-[400px] h-[250px] md:h-[380px] object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Bottom Part */}
      <div className="bg-[#2e465e] mt-28 py-10 text-center">
        <img src={school} alt="school" className="mx-auto" />
        <div>
          <p className="text-2xl text-[#B9B9BA] w-[90%] max-w-[800px] mx-auto mb-8">
            University Life Nurtures an Inclusive Campus Life Environment Where
            Students Grow Intellectually...
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
