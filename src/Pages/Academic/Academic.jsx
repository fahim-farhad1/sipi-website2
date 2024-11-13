import { useQuery } from "@tanstack/react-query";
import Loader from "../../Components/Loader/Loader";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Academic = () => {
  const axiosPublic = useAxiosPublic();

  // Fetching AboutUsData
  const {
    data: AboutUsData = [],
    isLoading: AboutUsDataIsLoading,
    error: AboutUsDataError,
  } = useQuery({
    queryKey: ["AboutUsData"],
    queryFn: () => axiosPublic.get(`/AboutUs`).then((res) => res.data),
  });

  // Loading state
  if (AboutUsDataIsLoading) {
    return <Loader />;
  }

  // Error state
  if (AboutUsDataError) {
    return (
      <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-300 to-white">
        <p className="text-center text-red-500 font-bold text-3xl mb-8">
          Something went wrong. Please reload the page.
        </p>
        <button
          className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-400 transition duration-300"
          onClick={() => window.location.reload()}
        >
          Reload
        </button>
      </div>
    );
  }

  console.log(AboutUsData);
  
  return (
    <div>
      <p>This is Academic Page</p>
    </div>
  );
};

export default Academic;
