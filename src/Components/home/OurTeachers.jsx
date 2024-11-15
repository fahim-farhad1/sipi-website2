import React, { useEffect, useState } from 'react'
import MiddleSectionTitle from '../ReuseableTitle/MiddleSectionTitle'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; // Import slick-carousel CSS
import 'slick-carousel/slick/slick-theme.css'; // Import slick-carousel theme CSS
import TeacherCard from './TeacherCard';




export default function OurTeachers() {  
        const settings = {
          autoplay: true, // Auto scroll through slides
          autoplaySpeed: 1000, // Time in ms between slides
          arrows: true,
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          
          responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 640, settings: { slidesToShow: 1 } },
          ],
        };
  return (
    <div className='mt-[60px]'>
        <MiddleSectionTitle badge="TEACHERS" title="Meet Our Teachers"/>

        {/* slider */}
                <Slider {...settings}>
                {teachers?.map((teacher) => <TeacherCard key={teacher._id} teacher={teacher} />)}
            </Slider>
    </div>
  )
}
