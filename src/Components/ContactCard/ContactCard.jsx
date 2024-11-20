import { FaLocationArrow } from "react-icons/fa";
import { Link } from "react-router-dom";


const ContactCard = ({image,name, map, address,area,city,postalCode,country, mobileNumbers,emailAddress}) => {
  return (
    <div className='flex bg-white items-center gap-10'>
     <div className=' text-blue-700 px-5 rounded-lg w-[300px]'>
     <p className='text-2xl font-semibold'>{name}</p>
      <p className='text-md'><span className='text-lg font-semibold'>Campus Address:</span> {address}; {area}; {city}; {country}</p>
      <p className=''><span className='text-lg font-semibold'>Number:</span> {
        mobileNumbers.map(number => (
          <li>{number}</li>
        ))
      }</p>
      <p className=''><span className='text-lg font-semibold'>Email: </span><a href="mailto:info@sipi.edu.bd">info@sipi.edu.bd</a></p>
      <Link to={map}><button className='my-4 text-center bg-blue-600 text-white py-2 px-4 flex items-center gap-2'> <FaLocationArrow /> <span>Get Direction</span></button></Link>
     </div>
     <div>
        <img className='w-[300px] h-[350px]' src={image} alt="" />
     </div>
    
    </div>
  )
}

export default ContactCard
