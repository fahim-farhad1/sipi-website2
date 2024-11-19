import DepartmentBanner from "../../Components/Banners/DepartmentBanner";
import ContactCard from "../../Components/ContactCard/ContactCard";
import fetchCampus from "../../Hooks/fetchCampus";

const ContactUs = () => {
  const { data: Campus, content } = fetchCampus();
  if (content) {
    return content;
  }
  console.log(Campus[0])
  return (
    <div>
      {/* Contact page Banner */}
      <DepartmentBanner />
      <div className="space-y-5">
        {Campus.map((campus, idx) => (
          <ContactCard key={idx} image={campus.campus_image} map={campus.google_maps} location={campus.location} name={campus.name} number={campus.number} />
        ))}
      </div>
    </div>
  );
};

export default ContactUs;
