import React, { useEffect, useState } from 'react'
import CampusCard from './CampusCard'
import MiddleSectionTitle from '../ReuseableTitle/MiddleSectionTitle'



export default function CampusSecton() {
  const [campuses,setCampses]=useState([])
  useEffect(()=>{
    fetch("https://sipi-server.vercel.app/Campus")
    .then(res=>res.json())
    .then(data=>setCampses(data))
  },[])
  return (
    <div className='my-5'>
        <MiddleSectionTitle title="Check Out Our Campuses!" badge="OUR CAMPUSES" />
        {/* Campuses */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 py-5">
        {campuses?.map((campusdata) => <CampusCard key={campusdata._id} campusData={campusdata}/>)}
      </div>
    </div>
  )
}
