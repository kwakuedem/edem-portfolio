import React from 'react'
import Profile from '../assets/Profile.png' 
import { FaFacebook,FaTwitter,FaLinkedin,FaGithub,FaArrowRight } from 'react-icons/fa';

function Home() {
  return (
    <div className=' min-h-screen pt-32 max-xl:pt-52'>
        <div className='flex flex-row gap-7 px-3'> 
            <div className="social-link-wrapper px-3 flex flex-col gap-8 items-center mt-16">
                <a href=""><FaFacebook className='text-2xl text-yellow-600'/></a>
                <a href=""><FaGithub className='text-2xl text-yellow-600'/></a>
                <a href=""><FaTwitter className='text-2xl text-yellow-600'/></a>
                <a href=""><FaLinkedin className='text-2xl text-yellow-600'/></a>
            </div>

            <div className='flex flex-col'>
                <div className="intro-text-wrapper flex flex-row ">
                    <div className='flex flex-col flex-1'>
                        <div className="name flex flex-col pb-4">
                            <span className='text-3xl font-bold pb-4 leading-8 tracking-wide'>Hi, I am</span> 
                            <span  className='text-3xl font-bold pb-4 leading-8 tracking-wide'>Edem Kwaku</span> 
                            <span  className='text-3xl font-bold pb-4 leading-8 tracking-wide'>Avorley</span>
                        </div>
                    
                        <span className='text-gray-500 text-lg font-semibold pb-3'>IT Professional</span>
                        <span className='text-gray-500 text-lg'>
                            Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Sequi perspiciatis accusamus
                            soluta iure <br/>quaerat numquam  placeat maxime neque
                            adipisicing elit. Sequi perspiciatis accusamus
                            soluta  <br/>
                            adipisicing elit. Sequi perspiciatis accusamus
                          <br/>
                        </span>
                    </div>

                    <div className="profile-im pr-4 flex justify-center items-center flex-1">
                        <img src={Profile} alt="" className='lg:w-[400px] xl:w-[350px]' />
                    </div>
                </div>
                <div className='mt-10 xl:mt-10 max-xl:mt-20  w-56 gap-3 bg-yellow-600 flex justify-center items-center rounded-md'>
                    <button className='bg-yellow-600 py-4 text-lg font-bold '>About Me</button><FaArrowRight/>
                </div>
            </div>
           
            
        </div>
    </div>
  )
}

export default Home