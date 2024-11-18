import React from 'react'

const ContactCard = ({image, map, location, name, number}) => {
  return (
    <div className='flex justify-between'>
     <div className='bg-green-600 text-white p-5 w-fit rounded-lg'>
     <p className='text-xl font-semibold'>{name}</p>
      <p className='text-md'>{location}</p>
      <p className=''>{number}</p>
     </div>
     <div>
        <img src={image} alt="" />
     </div>
    </div>
  )
}

export default ContactCard
