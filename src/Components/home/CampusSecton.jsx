import React, { useEffect, useState } from 'react'
import LeftTitle from '../ReuseableTitle/leftTitle'
import CampusCard from './CampusCard'



export default function CampusSecton() {
  const [campuses,setCampses]=useState([])
  useEffect(()=>{
    fetch("https://sipi-server.vercel.app/Campus")
    .then(res=>res.json())
    .then(data=>setCampses(data))
  },[])
  return (
    <div className='my-5'>
        <LeftTitle title="Check Out Our Campuses!" badge="OUR CAMPUSES" />
        {/* Campuses */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        {campuses?.map((campus) => <CampusCard key={campus._id} campus={campus}/>)}
      </div>
    </div>
  )
}
