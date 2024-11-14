import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import Loader from "../Shared/Loader/Loader";

const fetchTuitionFee = () => {
  const axiosPublic = useAxiosPublic();

  const { data, isLoading, error } = useQuery({
    queryKey: ["TuitionFeeData"],
    queryFn: () => axiosPublic.get(`/Tuition-Fee`).then((res) => res.data),
  });

  // Handle loading state
  if (isLoading) {
    return { data: null, content: <Loader /> };
  }

  // Handle error state
  if (error) {
    return {
      data: null,
      content: (
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
      ),
    };
  }

  // Return data and null for content if there’s no error or loading
  return { data, content: null };
};
export default fetchTuitionFee;
