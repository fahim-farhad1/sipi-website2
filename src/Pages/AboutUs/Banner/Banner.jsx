import React from "react";

const Banner = ({ BannerData }) => {
  return (
    <div className="relative ">
      {/* Image */}
      <img
        src={BannerData?.image}
        alt={BannerData?.title}
        className="w-full h-[300px] md:h-[400px] object-cover"
      />

      {/* About */}
      <div className="md:absolute -bottom-28 left-[300px] bg-green-400 text-white md:py-10 p-4 md:px-16 w-full md:w-[40%]">
        <p className="text-5xl font-semibold mb-4 ">{BannerData?.title}</p>
        <p className="text-lg font-semibold">{BannerData?.description}</p>
      </div>
    </div>
  );
};

export default Banner;
