import React from "react";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const AboutPrincipal = ({ principalData }) => {
  return (
    <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row my-20 px-4">
      {/* Left Section: Principal Image */}
      <div className="w-full md:w-1/2 md:border-r-4 border-orange-500 pb-4 md:pb-0 md:pr-4 flex justify-center">
        <img
          src={principalData?.image}
          alt={principalData?.name}
          className="w-full max-w-[400px] md:max-w-[500px] object-cover rounded-lg"
        />
      </div>

      {/* Right Section: About the Principal */}
      <div className="w-full md:w-1/2 md:pl-6 flex flex-col justify-center">
        <p className="text-3xl md:text-5xl text-black font-semibold mb-4">
          About Our Principal
        </p>
        <p className="text-gray-400 text-base md:text-lg leading-relaxed">
          {principalData?.description}
        </p>

        {/* Contact Information */}
        {/* <div className="mt-6 space-y-4 text-gray-800">
          <p className="flex items-center gap-3 text-lg">
            <FaPhone className="text-orange-500" />
            <span>{principalData?.contact.phone}</span>
          </p>
          <p className="flex items-center gap-3 text-lg">
            <MdEmail className="text-orange-500" />
            <span>{principalData?.contact.email}</span>
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default AboutPrincipal;
