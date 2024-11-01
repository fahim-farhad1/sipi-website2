import React from 'react';

const MiddleSectionTitle = ({title,badge}) => {
    return (
        <div className='w-[80%] mx-auto my-5 text-center'>
            <p className='text-primary font-semibold capitalize text-[18px]'>{badge}</p>
            <h2 className='text-[52px] font-semibold text-madBlack'>{title}</h2>
        </div>
    );
};

export default MiddleSectionTitle;