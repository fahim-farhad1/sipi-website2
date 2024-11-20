import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function NoticeCard({notice}) {
    const {title,date,department,details,authority_type}=notice;
    console.log(notice)
  return (
    <div  className="pr-4">
    <div className="my-5 bg-white border-2 border-primary/40 rounded-lg shadow-lg p-6 hover:shadow-xl transition">
      {/* Notice Title */}
      <h3 className="text-xl font-semibold  text-primary">{title}</h3>
      <p className='text-primary mb-2'>Authority: {authority_type}</p>

      {/* Notice Details */}
      <div className="text-gray-700 text-sm space-y-2">
        <p className='text-gray-dark'>{date}</p>
        <p className='text-gray-dark'>{department}</p>
        <p>{details.content.slice(0,200)}...</p>
        <p className='pt-3 flex items-center text-primary'><Link className='text-md' to={"https://docs.google.com/document/d/19jChl3vII_HZWaj_IPDB8ScN3y0qZS0fy6dECQpfPVA/edit?tab=t.0"}>View More</Link> <FaLongArrowAltRight className='ml-2 my-5'/></p>
      </div>
    </div>
    
  </div>
  )
}
