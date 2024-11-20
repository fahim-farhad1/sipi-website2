import React from "react";

const ViewBlogs = ({ blogsData }) => {
  return (
    <div className="modal-box bg-white max-w-[1000px] p-0 ">
      <div className="flex justify-between items-center border-b border-gray-300 px-10">
        <h1 className="text-3xl font-semibold text-center mb-6">View Blogs</h1>
        <button
          className="text-3xl font-bold hover:text-red-500"
          onClick={() => document.getElementById("View_Modal_Blogs").close()}
        >
          X
        </button>
      </div>
      {/* Blog Content */}
      <div className="px-10 py-6">
        <div className="flex items-center space-x-4">
          {/* Author Profile */}
          <img
            src={blogsData?.authorProfile.profilePicture}
            alt={blogsData?.authorName}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <p className="text-lg font-semibold">{blogsData?.authorName}</p>
            <p className="text-sm text-gray-500">
              {blogsData?.publicationDate}
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-semibold my-4">{blogsData?.title}</h2>
        <div className="text-sm text-gray-600 mb-4">
          <span className="bg-gray-200 px-2 py-1 rounded-full text-xs text-gray-700 mr-2">
            {blogsData?.category}
          </span>
          {blogsData?.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-100 px-2 py-1 rounded-full text-xs text-blue-600 mr-2"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mb-6">
          <img
            src={blogsData?.featuredImage}
            alt={blogsData?.title}
            className="w-full h-80 object-cover rounded-lg"
          />
        </div>

        <p className="text-gray-800">{blogsData?.content}</p>

        <div className="my-6">
          <p className="font-semibold">
            Reading Time: {blogsData?.readingTime}
          </p>
          <p className="font-semibold">Views: {blogsData?.viewsCount}</p>
        </div>

        {/* Author Bio */}
        <div className="mt-6 border-t border-gray-300 pt-6">
          <p className="font-semibold">About the Author</p>
          <p>{blogsData?.authorProfile.bio}</p>
        </div>

        {/* Comments Section */}
        <div className="mt-8">
          <h3 className="font-semibold mb-4">Comments</h3>
          {blogsData?.comments.length > 0 ? (
            blogsData?.comments.map((comment, index) => (
              <div key={index} className="border-b py-4">
                <p className="font-semibold">{comment.user}</p>
                <p className="text-sm text-gray-500">{comment.date}</p>
                <p>{comment.comment}</p>
              </div>
            ))
          ) : (
            <p>No comments yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewBlogs;
