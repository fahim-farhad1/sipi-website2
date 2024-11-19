import React from "react";

const Banner = () => {
  return (
    <div className="relative ">
      {/* Image */}
      <img
        src={"https://i.ibb.co/ZBFLMk0/dsgadsgbdb.jpg"}
        alt={"Banner"}
        className="w-full h-[400px] object-cover"
      />

      {/* About */}
      <div className="absolute -bottom-28 left-[300px] bg-green-400 text-white py-10 px-16 w-[40%]">
        <p className="text-5xl font-semibold mb-4 ">About Us</p>
        <p className="text-lg font-semibold">
          Clgun University is more than just a place of learning; it's a place
          where dreams take flight, where ideas flourish, and where you'll find
          the support and...
        </p>
      </div>
    </div>
  );
};

export default Banner;
