import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const MiddleSectionTitle = ({title,badge}) => {
    return (
        <div className='md:w-[80%] mx-auto my-5 text-center'>
            <p className='text-primary flex items-center justify-center font-semibold capitalize text-[13px] md:text-[18px] decoration-dotted'><FaGraduationCap className='mr-2' /> {badge}</p>
            <h2 className='text-[24px] md:text-[38px] font-semibold text-madBlack'>{title}</h2>
        </div>
    );
};

export default MiddleSectionTitle;