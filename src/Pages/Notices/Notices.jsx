import { CiCalendarDate } from "react-icons/ci";
import { MdAdminPanelSettings } from "react-icons/md";
import { FcDepartment } from "react-icons/fc";
import { useState } from "react";
import fetchNotices from "../../Hooks/fetchNotices";

const Notices = () => {
  const { data: Notices, content } = fetchNotices();
  const [selectedNotice, setSelectedNotice] = useState(null); // State to store the selected notice for modal

  // Render loading or error content if present
  if (content) {
    return content;
  }

  // Sort notices by date (newest first)
  const sortedNotices = Notices
    ? Notices.sort((a, b) => new Date(b.date) - new Date(a.date))
    : [];

  // Function to open modal and set selected notice
  const handleReadMoreClick = (notice) => {
    setSelectedNotice(notice);
    const modal = document.getElementById("my_modal_1");
    if (modal) {
      modal.showModal(); // Open the modal
    }
  };

  // Function to get a preview of the first 20-50 words of the content
  const getContentPreview = (content, wordLimit = 50) => {
    const words = content.split(" ");
    if (words.length <= wordLimit) {
      return content;
    }
    return words.slice(0, wordLimit).join(" ") + "..."; // Return preview followed by "..."
  };

  // If data is successfully fetched, render the notices
  return (
    <div className="container mx-auto px-4 mt-32 max-w-[1200px] text-black">
      <h1 className="text-4xl font-bold mb-6 text-center">All Notices</h1>
      {sortedNotices && sortedNotices.length > 0 ? (
        sortedNotices.map((notice) => (
          <div
            key={notice._id}
            className="border-b py-4 bg-gray-100 px-5 mb-3 shadow-xl hover:shadow-2xl md:py-6 md:px-10 lg:px-20"
          >
            <h2 className="text-2xl font-semibold">{notice.title}</h2>
            <div className="flex flex-col md:flex-row justify-between items-center mb-2 py-3">
              <p className="text-lg text-gray-700 flex items-center mb-2 md:mb-0">
                <FcDepartment className="mr-2 text-2xl" />
                {notice.department}
              </p>
              <p className="text-lg text-gray-700 flex items-center mb-2 md:mb-0">
                <MdAdminPanelSettings className="mr-2 text-2xl" />
                {notice.authority_type}
              </p>
              <p className="text-lg text-gray-700 flex items-center">
                <CiCalendarDate className="mr-2 text-2xl" />
                {notice.date}
              </p>
            </div>

            {/* Preview of the notice content */}
            <p className="text-gray-700">
              {getContentPreview(notice.details.content, 30)}
            </p>

            {/* Read more link */}
            <a
              onClick={() => handleReadMoreClick(notice)} // Handle the click event
              className="text-green-500 hover:underline"
            >
              Read more
            </a>
          </div>
        ))
      ) : (
        <p>No notices available at the moment.</p>
      )}

      {/* Modal */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box bg-white max-w-[800px] p-6">
          {selectedNotice ? (
            <>
              <h3 className="font-bold text-lg">
                {selectedNotice.details.title}
              </h3>
              <div className="flex flex-col md:flex-row justify-between items-center mb-2 py-3">
                <p className="text-lg text-gray-700 flex items-center mb-2 md:mb-0">
                  <FcDepartment className="mr-2 text-2xl" />
                  {selectedNotice.department}
                </p>
                <p className="text-lg text-gray-700 flex items-center mb-2 md:mb-0">
                  <MdAdminPanelSettings className="mr-2 text-2xl" />
                  {selectedNotice.authority_type}
                </p>
                <p className="text-lg text-gray-700 flex items-center">
                  <CiCalendarDate className="mr-2 text-2xl" />
                  {selectedNotice.date}
                </p>
              </div>

              <p className="py-4">{selectedNotice.details.content}</p>
              <a
                href={selectedNotice.details.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:underline"
              >
                View Full Document
              </a>
            </>
          ) : (
            <p>Loading...</p>
          )}

          <div className="modal-action">
            <form method="dialog">
              <button className="px-10 py-3 border border-blue-400 hover:bg-blue-400 hover:text-white font-semibold">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Notices;
