import React from "react";

const AboutUniversity = () => {
  return (
    <div className="mt-[200px] max-w-[1200px] mx-auto flex">
      <div className="w-1/2">
        <p className="text-black font-semibold text-3xl">
          About Our University
        </p>
        <p className="text-black font-semibold text-5xl pt-5">
          A Station of Engineering Education
        </p>
        <p className="pt-5 text-lg">
          Shyamoli Ideal Polytechnic Institute is dedicated to advancing
          education and research, producing skilled diploma engineers for
          national and global needs. With a commitment to excellence, it aims to
          shape a new era in engineering education, preparing graduates to excel
          in professional opportunities while embracing future challenges with
          unwavering determination.
        </p>
      </div>
      <div className="w-2/2 flex gap-2">
        <img src={"https://i.ibb.co.com/dmHjmtz/Camp01.jpg"} alt="" className="w-[300px]" />
        <img src={"https://i.ibb.co.com/WvKwD6M/Camp02.jpg"} alt="" className="w-[300px]" />
      </div>
    </div>
  );
};

export default AboutUniversity;
``