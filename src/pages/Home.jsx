import React from 'react'
import Profile from '../assets/Profile.png' 
import Picture from '../assets/Picture.png'
import {FaFileDownload} from 'react-icons/fa';
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaFacebook,FaTwitter,FaLinkedin,
    FaGithub,FaArrowRight,FaCode,FaSortDown,FaSchool, FaHardHat,
    FaSortUp,FaNetworkWired,FaLock } 
    from 'react-icons/fa';
import { useState } from 'react'
import Resume from '../assets/resume.pdf'


//Navigation bar 
function NavigationBar() {
    return (
      <div className='bg-white fixed top-0 lg:w-[70%] xlg:w-[50%] m-auto'>
          <div className="nav-wrapper py-5 px-4 flex flex-col lg:flex-row justify-between nav">
              <div className="brand ">
                  <span className='font-bold cursor-pointer'>EdTech</span>
              </div>
              <div className="nav-menus">
                  <ul className='flex flex-col lg:flex-row gap-5 '>
                      <li><AnchorLink href="#home" className='font-semibold'>Home</AnchorLink></li>
                      <li><AnchorLink href="#skill" className='font-semibold'>Skill</AnchorLink></li>
                      <li><AnchorLink href="#services" className='font-semibold'>Services</AnchorLink></li>
                      <li><AnchorLink href="#portfolio" className='font-semibold'>Portfolio</AnchorLink></li>
                      <li><AnchorLink href="#contact" className='font-semibold'>Contact Me</AnchorLink></li>
                  </ul>
              </div>
          </div>
         
      </div>
    )
  }

//About page
function About() {
    return (
      <div className='min-h-screen pt-20' id='about'> 
          <div className="heading flex flex-col justify-center items-center hover:translate-x-2">
              <span className='text-3xl font-bold'>About Me</span>
              <span className='text-lg font-semibold text-gray-500'>My Introduction</span>
          </div>
  
          <div className="content flex flex-row  pt-20 px-10">
              <div className="image-card w-[350px] flex-1 hover:scale-110">
                  <img src={Picture} className='w-[350px] rounded-md'/>
              </div>
  
              <div className="text-section flex-1 justify-center">
                  <div className='hover:scale-105 cursor-pointer'>
                      <p>Web developer, with extensive knowledge and years of experience, 
                          working in web technologies and Ui / Ux design, delivering quality work
                          working in web technologies and Ui / Ux design, delivering quality work
                      </p>
                  </div>
  
                  <div className='flex flex-row space-x-16 pt-10'>
                      <div className='flex flex-col justify-center items-center hover:translate-x-2 cursor-pointer'>
                          <span className='text-2xl font-bold'>05+</span>
                          <span>Years</span>
                          <span>experience</span>
                      </div>
                      <div className='flex flex-col justify-center items-center hover:translate-x-2 cursor-pointer'>
                          <span className='text-2xl font-bold'>10+</span>
                          <span>Completed</span>
                          <span>projects</span>
                      </div>
                      <div className='flex flex-col justify-center items-center hover:translate-x-2 cursor-pointer'>
                          <span className='text-2xl font-bold'>02+</span>
                          <span>Companies</span>
                          <span>worked</span>
                      </div>
                  </div>
  
                  <a href={Resume}><div className='bg-yellow-600 text-blue-800 py-4 px-5 mt-10 rounded-lg w-[50%] flex flex-row justify-center space-x-3 ring-2 ring-blue-800 hover:scale-105 hover:translate-x-1 hover:bg-white hover:text-yellow-600 hover:ring-2 hover:ring-yellow-600'>
                      <button className='font-bold'>Download CV</button>
                      <FaFileDownload className='text-lg font-bold'/>
                  </div></a>
                  
              </div>
          </div>
      </div>
    )
  }

//Skills page
function Skill() {
    const [showSkill, setshowSkills]=useState(false)

    function onShowSkills(){
        setshowSkills(!showSkill);
    }

  return (
    <div className='pt-20 pb-20' id='skill'>
        <div className="heading flex flex-col justify-center items-center hover:scale-105 hover:translate-x-2 cursor-pointer">
            <span className='text-3xl font-bold'>Skills</span>
            <span className='text-lg font-semibold text-gray-500'>My technical level</span>
        </div>

        <div className='flex flex-row justify-around pt-10'>
        <div className="skill-section space-x-10">
            <div className="software-dev  ">
                <FaCode className='text-xl text-yellow-600 mb-3'/>
                <button  onClick={()=>onShowSkills()} className='flex justify-center items-center space-x-2'>
                {
                    showSkill ?
                    <FaSortUp className='text-xl text-yellow-600'/>
                    : 
                    <FaSortDown className='text-xl text-yellow-600'/>

                }
                <h3 className='text-2xl font-semibold text-gray-600'>Software Developer</h3>
                </button>
            </div>

           { showSkill && 
           <>
            <div className='ml-5'>
                <SkillSet heading={"Frontend Developer"}>
                    <ul>
                        
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Tailwind Css</li>
                        <li>Rust.lang</li>
                    </ul>
                </SkillSet>
            </div>

            <div className='ml-5'>
            <SkillSet heading={"Backend Developer"}>
                <ul>
                    
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Tailwind Css</li>
                    <li>Rust.lang</li>
                </ul>
            </SkillSet>
            </div>
            </>
            }

        </div>

        <div className="skill-section space-x-10">
            <div className="software-dev  ">
                <FaNetworkWired className='text-xl text-yellow-600 mb-3'/>
                <button  onClick={()=>onShowSkills()} className='flex justify-center items-center space-x-2'>
                {
                    showSkill ?
                    <FaSortUp className='text-xl text-yellow-600'/>
                    : 
                    <FaSortDown className='text-xl text-yellow-600'/>

                }
                <h3 className='text-2xl font-semibold text-gray-600'>Network Engineer</h3>
                </button>
            </div>

           { showSkill && 
           <>
            <div className='ml-5'>
                <SkillSet heading={"Office Networking"}>
                    <ul>
                        
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Tailwind Css</li>
                        <li>Rust.lang</li>
                    </ul>
                </SkillSet>
            </div>
            </>
            }

        </div>

        <div className="skill-section space-x-10">
            <div className="software-dev  ">
                <FaLock className='text-xl text-yellow-600 mb-3'/>
                <button  onClick={()=>onShowSkills()} className='flex justify-center items-center space-x-2'>
                {
                    showSkill ?
                    <FaSortUp className='text-xl text-yellow-600'/>
                    : 
                    <FaSortDown className='text-xl text-yellow-600'/>

                }
                <h3 className='text-2xl font-semibold text-gray-600'>Cyber Security Analist</h3>
                </button>
            </div>

           { showSkill && 
           <>
            <div className='ml-5'>
                <SkillSet heading={"SIEM Tool"}>
                    <ul>
                        
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Tailwind Css</li>
                        <li>Rust.lang</li>
                    </ul>
                </SkillSet>
            </div>
            </>
            }

        </div>
        </div>
       
    </div>
  )
}



function SkillSet({heading, children}) {
    const [showSkills, setShowSkills] = useState(false)
    return(
        <>
        
        <button onClick={()=>setShowSkills(!showSkills)} className="software-devision">
        <span>{}</span>
        <div className="flex space-x-2">
        <FaSortDown className='text-xl text-yellow-600'/>
        <span className='text-lg  text-gray-600'>{heading}</span>
        </div>
        </button>
       {
        showSkills && <div className='prose list-outside'>
        {children}
        </div>
       }
        </>

    )
}

//Qualification page
function Qualification() {
  return (
    <div className='min-h-screen pt-10' id='skill'>
        <div className="heading flex flex-col justify-center items-center hover:scale-105 cursor-pointer">
              <span className='text-3xl font-bold'>Qualification</span>
              <span className='text-lg font-semibold text-gray-500'>My Personal Journey</span>

              <FaHardHat/>
          </div>
    </div>
  )
}

//Services page
function Service() {
    return (
      <div className='min-h-screen pt-20' id='services'>
          <div className="heading flex flex-col justify-center items-center hover:scale-105 cursor-pointer">
                <span className='text-3xl font-bold'>Services</span>
                <span className='text-lg font-semibold text-gray-500'>What I offer</span>
            </div>
      </div>
    )
}

//Portfolio page
function Portfolio() {
    return (
        <div className='min-h-screen pt-20' id='portfolio'>
            <div className="heading flex flex-col justify-center items-center hover:scale-105 cursor-pointer">
                <span className='text-3xl font-bold'>Portfolio</span>
                <span className='text-lg font-semibold text-gray-500'>Most recent works</span>
            </div>
        </div>
    )
}

//Contact page
function Contact() {
    return (
      <div className='min-h-screen pt-20' id='contact'>
          <div className="heading flex flex-col justify-center items-center hover:scale-105 cursor-pointer">
                <span className='text-3xl font-bold'>Contact Me</span>
                <span className='text-lg font-semibold text-gray-500'>Get in touch</span>
            </div>
      </div>
    )
}
  
//Home page
function Home() {
  return (
    <>
 
    <div className=' min-h-screen pt-32 max-xl:pt-52 ' id='home'>
        <div className='flex flex-row gap-7 px-3'> 
            <div className="social-link-wrapper px-3 flex flex-col gap-8 items-center mt-16">
                <a href="" className='hover:translate-y-2'><FaFacebook className='text-2xl text-yellow-600'/></a>
                <a href="" className='hover:translate-y-2'><FaGithub className='text-2xl text-yellow-600'/></a>
                <a href="" className='hover:translate-y-2'><FaTwitter className='text-2xl text-yellow-600'/></a>
                <a href="" className='hover:translate-y-2'><FaLinkedin className='text-2xl text-yellow-600'/></a>
            </div>

            <div className='flex flex-col'>
                <div className="intro-text-wrapper flex flex-row ">
                    <div className='flex flex-col flex-1'>
                        <div className="name flex flex-col pb-4 hover:scale-105 cursor-pointer">
                            <span className='text-3xl font-bold pb-4 leading-6 tracking-wide'>Hi, I am</span> 
                            <span  className='text-3xl font-bold pb-4 leading-6 tracking-wide'>Edem Kwaku</span> 
                            <span  className='text-3xl font-bold pb-4 leading-6 tracking-wide'>Avorley</span>
                        </div>
                    
                        <span className='text-gray-500 text-lg font-semibold pb-3 hover:scale-105 cursor-pointer'>IT Professional</span>
                        <span className='text-gray-500 text-lg hover:scale-105 cursor-pointer'>
                            Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Sequi perspiciatis accusamus
                            soluta iure <br/>quaerat numquam  placeat maxime neque
                            adipisicing elit. Sequi perspiciatis accusamus
                            soluta  <br/>
                            adipisicing elit. Sequi perspiciatis accusamus
                          <br/>
                        </span>
                    </div>

                    <div className="profile-im pr-4 flex justify-center items-center flex-1 hover:scale-110">
                        <img src={Profile} alt="" className='lg:w-[400px] xl:w-[350px]' />
                    </div>
                </div>
                <AnchorLink href='#about' className='mt-10 xl:mt-10 max-xl:mt-20  w-[20%] gap-2 bg-yellow-600 flex justify-center items-center rounded-md ring-2 ring-blue-800 hover:-translate-y-3 hover:text-yellow-600 hover:bg-white hover:ring-yellow-600'>
                    <button className='py-4 text-lg font-bold '>About Me</button><FaArrowRight/>
                </AnchorLink>
            </div>
        </div>
    </div>
    </>
  )
}

function Footer() {
    return (
      <div className=''>
          <div className="py-10 bg-yellow-100">
                <h2 className='px-10'>Footer</h2>
            </div>
      </div>
    )
}
  

function Main() {
    return (
      <>
        <NavigationBar/>
        <Home/>
        <About/>
        <Skill/>
        <Qualification/>
        <Service/>
        <Portfolio/>
        <Contact/>
        <Footer/>
      </>
    )
  }
  
  export default Main