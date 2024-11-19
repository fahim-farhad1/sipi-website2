import React from 'react'

const ContactCard = ({image, map, location, name, number}) => {
  return (
    <div className='flex bg-green-600 gap-5 w-fit'>
     <div className=' text-white p-5 w-fit rounded-lg'>
     <p className='text-xl font-semibold'>{name}</p>
      <p className='text-md'>Address: {location}</p>
      <p className=''>Number: {number}</p>
     </div>
     <div>
        <img src={image} alt="" />
     </div>
    </div>
  )
}

export default ContactCard
