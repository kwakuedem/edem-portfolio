import React from 'react'
import Profile from '../assets/Profile.png' 
import { FaFacebook,FaTwitter,FaLinkedin,FaGithub,FaArrowRight } from 'react-icons/fa';

function Home() {
  return (
    <div className='flex flex-row gap-6 px-3 min-h-screen pt-36 xl:pt-52'>
         <div className="social-link-wrapper px-3 flex flex-col gap-8 items-center mt-16">
            <a href=""><FaFacebook className='text-3xl text-purple-900'/></a>
            <a href=""><FaGithub className='text-3xl text-purple-900'/></a>
            <a href=""><FaTwitter className='text-3xl text-purple-900'/></a>
            <a href=""><FaLinkedin className='text-3xl text-purple-900'/></a>
        </div>

        <div className="intro-text-wrapper flex flex-col">
            <div className="name flex flex-col pb-4">
                <span className='text-4xl font-bold pb-4 leading-8 tracking-wide'>Hi, I am</span> 
                <span  className='text-4xl font-bold pb-4 leading-8 tracking-wide'>Edem Kwaku</span> 
                <span  className='text-4xl font-bold pb-4 leading-8 tracking-wide'>Avorley</span>
            </div>
           
            <span className='text-gray-500 text-lg font-semibold pb-3'>IT Professional</span>
            <span className='text-gray-500 text-lg'>
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Sequi perspiciatis accusamus
                soluta iure <br/>quaerat numquam  placeat maxime neque
                 voluptatum officiis impedit rem<br/> blanditiis totam,
                ab et sunt fugiat assumenda harum?</span>

            <span className='mt-10 xl:mt-20  w-56 gap-3 bg-yellow-600 flex justify-center items-center rounded-md'>
                <button className='bg-yellow-600 py-4 text-lg font-bold '>Contact Me</button><FaArrowRight/>
            </span>
               
        </div>
        <div className="profile-im pr-4">
            <img src={Profile} alt="" className='lg:w-[600px] xl:w-[400px]' />
        </div>

    
    </div>
  )
}

export default Home