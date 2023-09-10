import React from 'react'
import Picture from '../assets/Picture.png'
import {FaFileDownload} from 'react-icons/fa';
function About() {
  return (
    <div className='min-h-screen pt-10'> 
        <div className="heading flex flex-col justify-center items-center">
            <span className='text-3xl font-bold'>About Me</span>
            <span className='text-lg font-semibold text-gray-500'>My Introduction</span>
        </div>

        <div className="content flex flex-row  pt-10 px-10">
            <div className="image-card w-[350px] flex-1">
                <img src={Picture} className='w-[350px] rounded-md'/>
            </div>

            <div className="text-section flex-1 justify-center">
                <div>
                    <p>Web developer, with extensive knowledge and years of experience, 
                        working in web technologies and Ui / Ux design, delivering quality work
                        working in web technologies and Ui / Ux design, delivering quality work
                    </p>
                </div>

                <div className='flex flex-row space-x-16 pt-10'>
                    <div className='flex flex-col justify-center items-center'>
                        <span className='text-2xl font-bold'>05+</span>
                        <span>Years</span>
                        <span>experience</span>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <span className='text-2xl font-bold'>10+</span>
                        <span>Completed</span>
                        <span>projects</span>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <span className='text-2xl font-bold'>02+</span>
                        <span>Companies</span>
                        <span>worked</span>
                    </div>
                </div>

                <div className='bg-yellow-600 py-4 px-5 mt-10 rounded-lg w-[50%] flex flex-row justify-center space-x-3'>
                    <button className='font-bold'>Download CV</button>
                    <FaFileDownload className='text-lg font-bold'/>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default About