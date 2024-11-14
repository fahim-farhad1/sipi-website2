import fetchRoutine from "../../Hooks/fetchRoutine";

const AboutUs = () => {
  const { data: HomeBanners, content } = fetchRoutine();

  // Render loading or error content if present
  if (content) {
    return content;
  }

  // If data is successfully fetched, render the About Us content
  console.log(HomeBanners);
  return (
    <div>
      <p>This is About Us page </p>
    </div>
  );
};

export default AboutUs;
