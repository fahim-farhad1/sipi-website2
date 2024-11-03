import React from 'react';
const LeftTitle = ({title,badge}) => {
    return (
        <div className='ml-4 my-5'>
            <p className='text-primary font-semibold capitalize text-[18px] border-b-orange-500 border-dotted'>{badge}</p>
            <h2 className='text-[52px] font-semibold text-madBlack'>{title}</h2>
        </div>
    );
};

export default LeftTitle;