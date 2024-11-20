import React from "react";
import DepartmentBanner from "../../Components/Banners/DepartmentBanner";
import BlogBanner from "../../assets/Departments/image1.jpg";
import Blog from "../../Components/Blogs/Blog";
const Blogs = () => {
  return (
    <div>
      <DepartmentBanner Image={BlogBanner} />
      {/* blogs content  */}
      <div className="px-[112px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 pt-10 bg-campus-bg bg-cover bg-no-repeat bg-center">
        <Blog />
      </div>
    </div>
  );
};

export default Blogs;
