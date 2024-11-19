import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Academics = () => {
  return (
    <div className="bg-[#F2F8F1] py-20">
      <style>
        {`
          .hover-card {
            transition: all 0.3s ease-in-out;
          }
          .hover-card:hover {
            background-color: white;
          }
          .hover-arrow {
            transition: transform 0.2s ease-in-out;
          }
          .hover-card:hover .hover-arrow {
            transform: translateX(50%);
          }
        `}
      </style>
      <div className="max-w-[1200px] mx-auto">
        <p className="text-center text-5xl font-bold w-[800px] mx-auto text-black">
          Where Excellence Meets Opportunity
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
          {/* Academic Service Cards */}
          {[
            {
              img: "https://i.ibb.co.com/tYrLFQ7/icon2.png",
              title: "Education Services",
              description:
                "There are many variations of passages Lorem Ipsum available but the majority have suffered alteration in some form.",
            },
            {
              img: "https://i.ibb.co.com/nP4ykQ1/icon1.png",
              title: "International Hubs",
              description:
                "There are many variations of passages Lorem Ipsum available but the majority have suffered alteration in some form.",
            },
            {
              img: "https://i.ibb.co.com/58vZhp5/icon3.png",
              title: "Research Opportunities",
              description:
                "There are many variations of passages Lorem Ipsum available but the majority have suffered alteration in some form.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="hover-card  mx-auto px-8 py-10"
            >
              <img src={item.img} alt="" className="mx-auto" />
              <div className="mt-5">
                <p className="text-2xl text-center text-black font-semibold">
                  {item.title}
                </p>
                <p className="text-center text-lg pt-2">{item.description}</p>
                <div className="flex items-center justify-center gap-2 text-green-400 text-lg font-semibold mt-5">
                  <p className="relative overflow-hidden">Learn More</p>
                  <FaArrowRight className="hover-arrow relative" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Academics;
