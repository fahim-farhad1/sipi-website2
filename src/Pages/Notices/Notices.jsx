import { CiCalendarDate } from "react-icons/ci";
import { MdAdminPanelSettings } from "react-icons/md";
import { FcDepartment } from "react-icons/fc";
import { useState } from "react";
import fetchNotices from "../../Hooks/fetchNotices";
import DepartmentBanner from "../../Components/Banners/DepartmentBanner";
import bannerImage from "../../assets/NOTICEBANNER.jpg"
const Notices = () => {
  const { data: Notices, content } = fetchNotices();
  const [selectedNotice, setSelectedNotice] = useState(null);

  if (content) {
    return content;
  }

  const sortedNotices = Notices
    ? Notices.sort((a, b) => new Date(b.date) - new Date(a.date))
    : [];

  const handleReadMoreClick = (notice) => {
    setSelectedNotice(notice);
    const modal = document.getElementById("my_modal_1");
    if (modal) {
      modal.showModal();
    }
  };

  const getContentPreview = (content, wordLimit = 30) => {
    const words = content.split(" ");
    if (words.length <= wordLimit) {
      return content;
    }
    return words.slice(0, wordLimit).join(" ") + "...";
  };

  return (
    <div className="text-black">
      <DepartmentBanner Image={bannerImage} />
      <div className="mx-auto px-4 mt-20 max-w-[1200px]">
        {sortedNotices && sortedNotices.length > 0 ? (
          sortedNotices.map((notice) => (
            <div
              key={notice._id}
              className="border-b py-4 bg-gray-100 px-5 mb-3 shadow-lg hover:shadow-2xl md:py-6 md:px-8 lg:px-10 rounded-lg"
            >
              <h2 className="text-xl font-semibold md:text-2xl">
                {notice.title}
              </h2>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 mt-2 gap-3">
                <p className="text-sm md:text-lg text-gray-700 flex items-center">
                  <FcDepartment className="mr-2 text-lg md:text-2xl" />
                  {notice.department}
                </p>
                <p className="text-sm md:text-lg text-gray-700 flex items-center">
                  <MdAdminPanelSettings className="mr-2 text-lg md:text-2xl" />
                  {notice.authority_type}
                </p>
                <p className="text-sm md:text-lg text-gray-700 flex items-center">
                  <CiCalendarDate className="mr-2 text-lg md:text-2xl" />
                  {notice.date}
                </p>
              </div>
              <p className="text-gray-700 text-sm md:text-base">
                {getContentPreview(notice.details.content, 30)}
              </p>
              <button
                onClick={() => handleReadMoreClick(notice)}
                className="mt-2 text-green-500 hover:underline text-sm md:text-base"
              >
                Read more
              </button>
            </div>
          ))
        ) : (
          <p className="text-center">No notices available at the moment.</p>
        )}
      </div>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box bg-white max-w-[90%] md:max-w-[800px] p-4 md:p-6">
          {selectedNotice ? (
            <>
              <h3 className="font-bold text-lg md:text-xl">
                {selectedNotice.details.title}
              </h3>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 mb-4">
                <p className="text-sm md:text-lg text-gray-700 flex items-center">
                  <FcDepartment className="mr-2 text-lg md:text-2xl" />
                  {selectedNotice.department}
                </p>
                <p className="text-sm md:text-lg text-gray-700 flex items-center">
                  <MdAdminPanelSettings className="mr-2 text-lg md:text-2xl" />
                  {selectedNotice.authority_type}
                </p>
                <p className="text-sm md:text-lg text-gray-700 flex items-center">
                  <CiCalendarDate className="mr-2 text-lg md:text-2xl" />
                  {selectedNotice.date}
                </p>
              </div>
              <p className="py-4 text-sm md:text-base">
                {selectedNotice.details.content}
              </p>
              <a
                href={selectedNotice.details.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:underline text-sm md:text-base"
              >
                View Full Document
              </a>
            </>
          ) : (
            <p>Loading...</p>
          )}
          <div className="modal-action">
            <form method="dialog">
              <button className="px-4 py-2 border border-blue-400 hover:bg-blue-400 hover:text-white font-semibold text-sm md:text-base">
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
