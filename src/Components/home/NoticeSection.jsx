import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LeftTitle from '../ReuseableTitle/leftTitle';
import NoticeCard from './NoticeCard';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';



export default function NoticeSection() {
    const [notices,setNotices]=useState([])
    useEffect(()=>{
        fetch("https://sipi-server.vercel.app/Notices")
        .then(res=>res.json())
        .then(data=>setNotices(data))
    },[])
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2, // Show 2 slides on large screens
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 768, // For small screens
            settings: {
              slidesToShow: 1, // Show 1 slide
            },
          },
        ],
      };
  return (
    <section className="py-12 bg-gray-50">
    {/* section title */}
        <LeftTitle badge={"Notices"} title={"Digital Notices Board"} />

    <div className=" px-6 lg:px-8">
      <Slider {...settings}>
        {notices?.map((notice) => <NoticeCard key={notice._id} notice={notice} />)}
      </Slider>
    </div>
    <p className='pt-3 flex items-center text-primary justify-center mt-[30px]'><span className=' px-4 rounded flex items-center border-2'><Link className='text-md' >Show All</Link> <FaLongArrowAltRight className='ml-2 my-5'/></span></p>
  </section>
  )
}
