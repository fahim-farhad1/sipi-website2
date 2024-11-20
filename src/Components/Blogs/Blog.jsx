import { FaArrowRightLong } from "react-icons/fa6";
import blogImage from "../../assets/Blog1.webp";
import TextLimit from "../TextLimit/TextLimit";
import { Link } from "react-router-dom";

const Blog = ({blog}) => {
const {
    _id,
    title,
    authorName,
    publicationDate,
    category,
    tags,
    content,
    featuredImage,
    shortDescription,
    readingTime,
    authorProfile,
    profilePicture,
    comments,
    viewsCount,
  } = blog;

  return (
    <div className="w-[400px] space-y-2 border bg-white pb-3">
      {/* Blog image */}
      <img className="w-[400px]" src={featuredImage} alt="Blog" />
      <div className="px-2">
        <p className="font-semibold text-xl"><TextLimit text={title} wordLimit={5} /></p>
        <p className="text-gray-600"><TextLimit text={content} wordLimit={15} /></p>
       <Link to={`/Blog/${_id}`}> <span className="flex items-center gap-2 text-red-500">
          See More <FaArrowRightLong />
        </span></Link>
      </div>
    </div>
  );
};

export default Blog;
