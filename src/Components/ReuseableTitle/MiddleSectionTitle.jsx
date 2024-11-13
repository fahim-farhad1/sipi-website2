import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const MiddleSectionTitle = ({title,badge}) => {
    return (
        <div className='w-[80%] mx-auto my-5 text-center'>
            <p className='text-primary font-semibold capitalize text-[22px] flex items-center justify-center'><FaGraduationCap className='pr-3 text-[40px]'/> {badge}</p>
            <h2 className='text-[52px] font-semibold text-madBlack'>{title}</h2>
        </div>
    );
};

export default MiddleSectionTitle;