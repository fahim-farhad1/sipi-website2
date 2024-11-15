import fetchNotices from "../../../Hooks/fetchNotices";

const AllNotices = () => {
  const { data: Notices, content } = fetchNotices();

  // Render loading or error content if present
  if (content) {
    return content;
  }

  // If data is successfully fetched, render the notices
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6 text-center">All Notices</h1>
      {Notices && Notices.length > 0 ? (
        Notices.map((notice) => (
          <div key={notice._id} className="border-b py-4 bg-gray-100 px-5 mb-3 shadow-xl hover:shadow-2xl">
            <h2 className="text-2xl font-semibold">{notice.title}</h2>
            <p className="text-lg text-gray-700 mb-2">
              <strong>Department:</strong> {notice.department}
            </p>
            <p className="text-lg text-gray-700 mb-2">
              <strong>Authority Type:</strong> {notice.authority_type}
            </p>
            <p className="text-lg text-gray-700 mb-2">
              <strong>Date:</strong> {notice.date}
            </p>
            <p className="text-lg text-gray-700 mb-2">
              <strong>Details:</strong> {notice.details.content}
            </p>
            <a
              href={notice.details.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:underline"
            >
              Read more
            </a>
          </div>
        ))
      ) : (
        <p>No notices available at the moment.</p>
      )}
    </div>
  );
};

export default AllNotices;
