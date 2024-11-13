import React from 'react'
import { FaAward } from 'react-icons/fa';

export default function TeacherCard({teacher}) {
    console.log(teacher)
    const {name,image,department,designation,awards}=teacher;
    const qr = "https://i.ibb.co.com/zRmKWvP/Untitled-1.png"
  return (
    <div className="">
                                <div className="bg-white  overflow-hidden">
                              
                                <div className="p-4">
                                <div className='w-96 h-[380px] px-4 md:px-8 py-4 bg-primary/5  rounded-xl border-gray/10 border hover:shadow-xl relative'>
                                <div className='flex justify-between'>
                                    <img className='w-[100px] h-[100px] rounded-full' src={image} alt="" />
                                    <img className='w-[70px] h-[70px] rounded-md mt-4 shadow-lg border-gray/10 border' src={qr} alt="" />
                                </div>
                                <div className='my-5'>
                                    <h4 className='text-2xl font-semibold text-primary'>{name}</h4>
                                    <p className='text-gray text-[14px] md:text-[16px]'>{department}</p>
                                    <p className='text-gray text-[14px] md:text-[16px]'>{designation}</p>
                                </div>
                                {/* award */}
                                <div>
                                    <h4 className='text-[20px] flex items-center text-primary font-bold'> Award</h4>
                                    {
                                        awards.map(award=><p className='flex items-center'><FaAward className='text-yellow pr-2 text-[20px]' />{award}</p>)
                                    }
                                </div>
                            </div>
                    </div>
                    </div>
                </div>
  )
}
