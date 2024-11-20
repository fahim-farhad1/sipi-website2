import React from "react";

const AboutUniversity = ({ aboutUniversityData }) => {
  return (
    <div className="mt-[50px] md:mt-[200px] max-w-[1200px] mx-auto flex flex-col md:flex-row gap-10 px-4">
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <p className="text-black font-semibold text-3xl">
          {aboutUniversityData?.title}
        </p>
        <p className="text-black font-semibold text-4xl pt-5">
          {aboutUniversityData?.subtitle}
        </p>
        <p className="pt-5 text-lg">{aboutUniversityData?.description}</p>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex flex-col sm:flex-row gap-4">
        {aboutUniversityData?.images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="w-full sm:w-[300px] h-auto object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default AboutUniversity;
