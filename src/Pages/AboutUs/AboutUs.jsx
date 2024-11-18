import fetchRoutine from "../../Hooks/fetchRoutine";
import { useState } from "react";
import About from "./About/About";
import Campus from "./Campus/Campus";
import Hero from "./Hero/Hero";
import Programs from "./Programs/Programs";
import Testimonials from "./Testimonials/Testimonials";
import Title from "./Title/Title";
import VideoPlayer from "./Video player/VideoPlayer";

const AboutUs = () => {
  const [playState, setPlaystate] = useState(false);
  return (
    <div>
      <Hero />
      <div className="container">
        <Title subTitle="OUR PROGRAM " title="What We Offer" />
        <Programs />
        <About setPlaystate={setPlaystate} />
        <Title subTitle="Gallary " title="Campus Photos" />
        <Campus />
        <Title subTitle="TESTIMONIALS " title="What Student Says" />
        <Testimonials />
      </div>
      <VideoPlayer playState={playState} setPlaystate={setPlaystate} />
    </div>
  );
};

export default AboutUs;
