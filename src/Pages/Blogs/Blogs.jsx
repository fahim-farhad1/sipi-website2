import React from "react";
import DepartmentBanner from "../../Components/Banners/DepartmentBanner";
import BlogBanner from "../../assets/Departments/image1.jpg";
import Blog from "../../Components/Blogs/Blog";
import fetchBlogs from "../../Hooks/fetchBlogs";
const Blogs = () => {
  const { data: blogs, content } = fetchBlogs();
  if (content) {
    return content;
  }
  return (
    <div>
        mar
      <DepartmentBanner Image={BlogBanner} />
      {/* blogs content  */}
      <div className="px-[112px] grid grid-cols-1 md:grid-cols-3 gap-5 pt-10 bg-campus-bg bg-cover bg-no-repeat bg-center">
        {blogs.map((blog, idx) => (
          <Blog key={idx} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
