import React from 'react'

function NavigationBar() {
  return (
    <div className='bg-white fixed top-0 lg:w-[70%] xlg:w-[50%] m-auto'>
        <div className="nav-wrapper py-5 px-4 flex flex-col lg:flex-row justify-between nav">
            <div className="brand ">
                <span className='font-bold cursor-pointer'>EdTech</span>
            </div>
            <div className="nav-menus">
                <ul className='flex flex-col lg:flex-row gap-5 '>
                    <li><a href="" className='font-semibold'>Home</a></li>
                    <li><a href="" className='font-semibold'>Skill</a></li>
                    <li><a href="" className='font-semibold'>Services</a></li>
                    <li><a href="" className='font-semibold'>Portfolio</a></li>
                    <li><a href="" className='font-semibold'>Contact Me</a></li>
                </ul>
            </div>
        </div>
       
    </div>
  )
}

export default NavigationBar