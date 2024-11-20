import DepartmentBanner from "../../Components/Banners/DepartmentBanner";
import ContactCard from "../../Components/ContactCard/ContactCard";
import fetchCampus from "../../Hooks/fetchCampus";
import image from '../../assets/Departments/Computer/Department-of-Computer-Science.jpg'


const ContactUs = () => {
  const { data: Campus, content } = fetchCampus();
  if (content) {
    return content;
  }
  console.log(Campus[0])
  return (
    <div className="">
      {/* Contact page Banner */}
      <DepartmentBanner Image={image} />
      <div className="py-10 w-full px-32 space-y-5 bg-campus-bg bg-cover bg-no-repeat bg-center grid grid-cols-2 gap-5">
      {Campus.map((campus, idx) => (
        <ContactCard
          key={idx}
          image={campus.campusImg}
          map={campus.googleMapsLink}  address={campus.campusAddress.address} area={campus.campusAddress.area} city={campus.campusAddress.city} postalCode={campus.campusAddress.postalCode} country={campus.campusAddress.country}  mobileNumbers={campus.mobileNumbers} emailAddress={campus.emailAddress} name={campus.campus}
        />
      ))}
    </div>
    </div>
  );
};

export default ContactUs;
