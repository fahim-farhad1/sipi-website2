import { FaArrowRightLong } from "react-icons/fa6";
import blogImage from "../../assets/Blog1.webp";
import TextLimit from "../TextLimit/TextLimit";

const Blog = () => {
//   const truncateText = (text, wordLimit) => {
//     const words = text.split(" ");
//     if (words.length > wordLimit) {
//       return words.slice(0, wordLimit).join(" ") + " ...";
//     }
//     return text;
//   };

  const blog = {
    title: "Implement AWS Academy in the Diploma Sector in Bangladesh",
    content:
      "The world is increasingly becoming digital, and cloud computing has emerged as a pivotal technology Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias itaque iure aspernatur perferendis, quam autem consequuntur nulla illum quidem quia!",
  };
  return (
    <div className="w-[400px] space-y-2 border bg-white pb-3">
      {/* Blog image */}
      <img className="w-[400px]" src={blogImage} alt="Blog" />
      <div className="px-2">
        <p className="font-semibold text-xl"><TextLimit text={blog.title} wordLimit={5} /></p>
        <p className="text-gray-600"><TextLimit text={blog.content} wordLimit={15} /></p>
        <span className="flex items-center gap-2 text-red-500">
          See More <FaArrowRightLong />
        </span>
      </div>
    </div>
  );
};

export default Blog;
