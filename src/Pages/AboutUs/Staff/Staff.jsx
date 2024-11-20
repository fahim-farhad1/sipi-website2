import React from "react";
import { IoIosSchool } from "react-icons/io";
import MiddleSectionTitle from "../../../Components/ReuseableTitle/MiddleSectionTitle";

const Staff = () => {
  const staffData = [
    {
      id: 1,
      description:
        "The mission of Shyamoli Ideal Polytechnic Institute, SIPI is to produce highly skilled manpower. This mission is achieved by imparting high quality professional education and training so that individuals can achieve their intellectual, social and personal potentials.SIPI is committed to developing human capital by sharpening creative thinking. In addition to creation and dissemination of technical knowledge, its mission includes promotion of humanism and peace through education. As a social institution, SIPI endeavors to induce changes for betterment of the society as a whole through public services, and through promotion of ethical behavior and social justice.",
      imageUrl: "https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/359498202_227805510171975_2892005065445949765_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHFDcOCmgInQh0DIO0qTA-y2inAX1Z6vU7aKcBfVnq9Tj1IpSgLNiu9IxoIYtTjOlGn0x0C6YT79UDOyEJgFzre&_nc_ohc=-kO_TvuVpXMQ7kNvgF7gMv4&_nc_zt=23&_nc_ht=scontent.fdac138-2.fna&_nc_gid=As3IueLgeY-zuI0mfD38LAQ&oh=00_AYAUQGzUArpsApBpqXh_SZiRyjjp5JumVicsXaoiWZhwmg&oe=6743F37E",
      designation: "Mission Statement",
    },
    {
      id: 2,
      description:
       "Our vision at Shyamoli Ideal Polytechnic Institute (SIPI) is to become a nationally and internationally recognized center of excellence in technical education. We aspire to be a leading institution that produces graduates who are sought after by employers and esteemed for their contributions to society. SIPI will continually adapt to emerging technologies and industry trends, ensuring our students are well-prepared for the challenges and opportunities of the future. We envision a future where SIPI is a symbol of innovation, integrity, and excellence in technical education, fostering the growth of individuals and the prosperity of the communities we serve.",
      imageUrl: "https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/336013488_1403701233698997_5015314225001068684_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEYIYwENx4vhHE9araJ6BK0pTihPLpl5IelOKE8umXkh7sGoAhupKgBgKwlVh12aM7pSmZ13RVS-nzyvbd3VEHT&_nc_ohc=TXM3tJpbQwMQ7kNvgERBc9v&_nc_zt=23&_nc_ht=scontent.fdac138-1.fna&_nc_gid=AazoLXEnDnBMb5agfKSSPdP&oh=00_AYCw5ALezeWdZoGMO9OiIhr1ZYdO7HtoDe39DGXl2fPuAA&oe=6743F062",
      designation: "Vision Statement",
    }
  ];
  return (
    <div className="max-w-[1200px] mx-auto">
      <MiddleSectionTitle badge={"Mission and Vision Statements - SIPI"} />
      {staffData.map((staff, index) => (
        <div
          key={staff.id}
          className={`flex flex-col md:flex-row items-center mb-10 md:mb-0 gap-5 md:gap-0 ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >
          {/* Left (Text) */}
          <div className="w-full md:w-1/2 px-4 md:px-10 text-black">
            <div className="flex text-2xl items-center font-semibold gap-5">
              <IoIosSchool className="text-green-600" />
              {staff.designation}
            </div>
            <p className="text-lg leading-relaxed">{staff.description}</p>
          </div>
          {/* Right (Image) */}
          <div className="w-full md:w-1/2">
            <img
              src={staff.imageUrl}
              alt={staff.name}
              className="w-[400px] h-[500px]"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Staff;
