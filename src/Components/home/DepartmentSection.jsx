import React, { useEffect, useState } from 'react';
import LeftTitle from '../ReuseableTitle/leftTitle';
import DepartmentCard from './DepartmentCard';

const DepartmentSection = () => {
  const [deparments,setDeparments]=useState()
  useEffect(()=>{
    fetch("https://sipi-server.vercel.app/Department")
    .then(res=>res.json())
    .then(data=>setDeparments(data))
  },[])
    return (
        <div className='py-5'>
            <LeftTitle badge="Our Cources" title="BTEB Affiliated Courses"/>

            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              
            {deparments?.map(deparmentData => <DepartmentCard key={deparmentData?._id} deparmentData={deparmentData} />)}
            </div>

        </div>
    );
};

export default DepartmentSection;