import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const MiddleSectionTitle = ({title,badge}) => {
    return (
        <div className='w-[80%] mx-auto my-5 text-center'>
            <p className='text-primary font-semibold capitalize text-[14px] md:text-[18px] underline decoration-dotted'>{badge}</p>
            <h2 className='text-[24px] md:text-[38px] font-semibold text-madBlack'>{title}</h2>
        </div>
    );
};

export default MiddleSectionTitle;