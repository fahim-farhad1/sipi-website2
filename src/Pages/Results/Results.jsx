import React from "react";
import DepartmentBanner from "../../Components/Banners/DepartmentBanner";

const Results = () => {
  const bannerImage =
    "https://i.ibb.co/0rqXzZ7/fa8ed7e9-0e83-462f-8c5d-13b06d25cef3.jpg";

  return (
    <div>
      <DepartmentBanner Image={bannerImage} />
      <div className="max-w-[1200px] mx-auto mt-12">
        <iframe
          src="https://btebresultszone.com/results"
          width="100%"
          className="h-screen"
        ></iframe>
      </div>
    </div>
  );
};

export default Results;
