import React from 'react'
import LeftTitle from '../ReuseableTitle/leftTitle'

const galleryImages = [
  'https://www.sipi.edu.bd/img/lab8.jpg', // Replace with actual image URLs
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuinrf9ZVg8OWJGHcbsyi7_HQFiVIMcJNp9A&s',
  'https://www.sipi.edu.bd/img/lab7.jpg',
  'https://www.sipi.edu.bd/img/lab6.jpg',
  'https://www.sipi.edu.bd/img/lab1.jpg',
  'https://www.sipi.edu.bd/img/lab11.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXgjmWM2EBpiosV6eDsusnPw1QC-k1aXU8MYsHxn9d3EM8LWqXNPa2cnhMiHP-oLw4Dm4&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXaTA4FE24FzTmM5O0SIuw02jUw6C4vZeh2TBsrMTox-JkNj_GuT1FwNBX3ZNZX10t0c4&usqp=CAU',
];

export default function LabFacilitiesSection() {
  return (
    <div>
        <LeftTitle badge={"Campus Life"} title={"Our Lab Facilities"} />
        {/* img gellery */}
        

<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://www.sipi.edu.bd/img/lab8.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuinrf9ZVg8OWJGHcbsyi7_HQFiVIMcJNp9A&s" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://www.sipi.edu.bd/img/lab7.jpg" alt=""/>
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://www.sipi.edu.bd/img/lab1.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://www.sipi.edu.bd/img/lab11.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXaTA4FE24FzTmM5O0SIuw02jUw6C4vZeh2TBsrMTox-JkNj_GuT1FwNBX3ZNZX10t0c4&usqp=CAU" alt=""/>
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://www.sipi.edu.bd/img/lab7.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXgjmWM2EBpiosV6eDsusnPw1QC-k1aXU8MYsHxn9d3EM8LWqXNPa2cnhMiHP-oLw4Dm4&usqp=CAU" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXgjmWM2EBpiosV6eDsusnPw1QC-k1aXU8MYsHxn9d3EM8LWqXNPa2cnhMiHP-oLw4Dm4&usqp=CAU" alt=""/>
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7ipL8NFO_HgayqyqirzL72hB_gY8lj6UVKqHWTGoyOfRrcogpLAItdSHxfQP7XuZKX_Y&usqp=CAU" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://www.sipi.edu.bd/img/lab6.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSfz3MzTeTobhhX0g9um_PXyArYaREXSrT0aY4rmoqx3ihVEqjSUj3lS2s1VFhDj0zOKU&usqp=CAU" alt=""/>
        </div>
    </div>
</div>

    </div>
  )
}
