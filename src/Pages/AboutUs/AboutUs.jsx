import AboutPrincipal from "./AboutPrincipal/AboutPrincipal";
import AboutUniversity from "./AboutUniversity/AboutUniversity";
import Academics from "./Academics/Academics";
import Banner from "./Banner/Banner";
import Staff from "./Staff/Staff";

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <Banner></Banner>
      <AboutUniversity></AboutUniversity>
      <AboutPrincipal></AboutPrincipal>
      <Academics></Academics>
      <Staff></Staff>
    </div>
  );
};

export default AboutUs;
