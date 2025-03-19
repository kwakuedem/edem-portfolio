import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { Fade, Slide } from "react-awesome-reveal";

import Profile from "../assets/Profile.png";
import Picture from "../assets/Picture.png";
import PortfolioIcon from "../assets/PortfolioIcon.png";
import HomeIcon from "../assets/HomeIcon.png";
import ServiceIcon from "../assets/ServiceIcon.png";
import SkillIcon from "../assets/SkillIcon.png";
import ContactIcon from "../assets/ContactIcon.png";
import Cap from "../assets/Cap.png";
import Work from "../assets/Work.png";

import { FaFileDownload } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";

import {
  MdOutlineEmail,
  MdMenu,
  MdOutlineSecurity,
  MdOutlineLocationOn,
  MdOutlineHardware,
} from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaArrowRight,
  FaSortDown,
  FaHardHat,
  FaLaptopCode,
  FaSortUp,
  FaNetworkWired,
  FaFile,
  FaCalendar,
} from "react-icons/fa";
import { useState } from "react";
import SkillSet from "../components/SkillSet";
import PorfolioItems from "../components/PorfolioItems";


//Navigation bar
function NavigationBar() {
  const [showMenu, setShowMenu] = useState(false);

  function onShowMenu() {
    setShowMenu(!showMenu);
  }



  function Menu() {
    return (
      
      <div className="w-full h-full  z-20 fixed top-0">
        <div className=' absolute inset-0 bg-gray-100 opacity-70' onClick={() => onShowMenu()}/>
        <div className='absolute transition duration-300 ease-in-out w-[60%] bg-yellow-300 flex py-10 flex-col h-full text-white items-center'>
           <div className="flex h-20 w-20 items-center justify-center">
              <img src={Picture} className='rounded-full w-24 h-20' alt=""  />
            </div>
          <div className="bg-yellow-300 w-full h-full pt-4">
          <div className='nav-menus py-3 flex flex-col w-full gap-4'>
              <div className='flex items-center gap-4 px-3'>
              <img src={HomeIcon} className='w-6 h-6' alt=""  />
                  <AnchorLink href="#home">
                   <span className="font-medium text-lg cursor-pointer text-blue-600 pt-4">
                     Home
                  </span>
              </AnchorLink>
              </div>
             
              <div className='flex items-center gap-4 px-3'>
                  <img src={SkillIcon} className='w-6 h-6' alt=""  />
                  <AnchorLink href="#skill">
                   <span className="font-medium text-lg cursor-pointer text-blue-600 pt-4">
                     Skills
                  </span>
              </AnchorLink>
              </div>

               <div className='flex items-center gap-4 px-3'>
                  <img src={ServiceIcon} className='w-6 h-6' alt=""  />
                  <AnchorLink href="#services">
                   <span className="font-medium text-lg cursor-pointer text-blue-600 pt-4">
                     Services
                  </span>
              </AnchorLink>
              </div>
              <div className='flex items-center gap-4 px-3'>
                  <img src={PortfolioIcon} className='w-6 h-6' alt=""  />
                  <AnchorLink href="#portfolio">
                   <span className="font-medium text-lg cursor-pointer text-blue-600 pt-4">
                     Portfolio
                  </span>
              </AnchorLink>
              </div>
              <div className='flex items-center gap-4 px-3'>
                  <img src={ContactIcon} className='w-6 h-6' alt=""  />
                  <AnchorLink href="#contact">
                   <span className="font-medium text-lg cursor-pointer text-blue-600 pt-4">
                     Contact Me
                  </span>
              </AnchorLink>
              </div>
          </div>
          <hr className='text-green-800 w-full mt-4'/>
          
          <div className="px-4 py-3">
            <p className="text-blue-600 font-medium text-xl py-2">Follow Me</p>
            <div className=" social-links flex gap-x-6 lg:gap-x-4 py-3">
              <a
                  href="https://web.facebook.com/edem.kwaku.581"
                  target="_blank" rel="noopener noreferrer"
                   className="hover:translate-y-2"
                >
                  <FaFacebook className="text-2xl text-blue-600" />
              </a>
           
              <a
                href="https://github.com/kwakuedem"
                target="_blank" rel="noopener noreferrer"
                className=" hover:translate-y-2"
              >
                <FaGithub className="text-2xl text-blue-600" />
              </a>
              <a
                href="https://twitter.com/edemkwaku4"
                 target="_blank" rel="noopener noreferrer"
                className ="hover:translate-y-2"
              >
                <FaTwitter className="text-2xl text-blue-600" />
              </a>
              <a
                href="https://www.linkedin.com/in/edem-kwaku-avorley-b1ab48232" 
                 target="_blank" rel="noopener noreferrer"
                className="hover:translate-y-2"
              >
                <FaLinkedin className="text-2xl text-blue-600" />
            </a>
            </div>
          </div>
         
      </div>
      <hr className='text-green-800 w-full'/>   
      <footer className="bg-blue-600 w-full py-5 flex items-center justify-center">
        <p>Developed with <span className="text-red-600 text-2xl p-3">&hearts;</span> By Edem</p>
      </footer>
  </div>
   </div>
    );
  }
  return (
    <>
      <div className="bg-white px-2 md:pr-8 md:pl-10 lg:px-20 sticky py-4 z-10 w-full top-0 flex items-center justify-between xl:w-[80%] m-auto">
        {/* Brand Name */}
        <div className="brand flex items-center">
          <span className="font-semibold cursor-pointer shadow-sm px-2 text-yellow-500">
            EDEM KWAKU
          </span>
        </div>

        {/* Navigation Menu - Hidden on mobile, visible on larger screens */}
        <div className="nav-menus hidden lg:flex lg:flex-1 lg:justify-end py-3 items-center gap-6">
          <AnchorLink href="#home">
            <span className="font-semibold  cursor-pointer text-blue-800">
              HOME
            </span>
          </AnchorLink>

          <AnchorLink href="#about">
            <span className="font-semibold  cursor-pointer text-blue-800">
              ABOUT ME
            </span>
          </AnchorLink>

          <AnchorLink href="#skill">
            <span className="font-semibold  cursor-pointer text-blue-800">
              SKILLS
            </span>
          </AnchorLink>

          <AnchorLink href="#services">
            <span className="font-semibold  cursor-pointer text-blue-800">
              SERVICES
            </span>
          </AnchorLink>

          <AnchorLink href="#portfolio">
            <span className="font-semibold  cursor-pointer text-blue-800">
              PORTFOLIO
            </span>
          </AnchorLink>

          <AnchorLink href="#contact">
            <span className="font-semibold  cursor-pointer text-blue-800">
              CONTACT ME
            </span>
          </AnchorLink>
        </div>

        {/* Mobile Menu Icon - Hidden on large screens */}
        <div
          className="px-3 mr-5 bg-yellow-500 flex lg:hidden py-1 cursor-pointer shadow-lg shadow-gray-300 rounded-md"
          onClick={() => onShowMenu()}
        >
          <MdMenu className="text-blue-800 text-2xl font-bold" />
        </div>
      </div>



      {showMenu && Menu()}
    </>
  );
}

//About page
function About() {
  const [showMore, setShowMore] = useState(false);
  return (
    <div
      className="bg-white pb-10 pt-3 md:pt-0 lg:pt-20 lg:px-20  2xl:w-[80%] m-auto"
      id="about"
    >
      <div className="heading flex flex-col justify-center items-center hover:translate-x-2">
        <span className="text-xl md:text-3xl font-bold text-blue-900 opacity-80">
          About Me
        </span>
        <span className="text-xl md:text-2xl font-bold  opacity-80 ">
          Who I Am
        </span>
      </div>

      

      <div className="content flex flex-col md:flex-row pt-10 lg:pt-20 lg:px-10">
        <Fade direction="right" duration={2000}>
          <div className="flex justify-center item-center">
            <div className="image-card w-full md:w-[350px] flex lg:flex-1 justify-center items-center lg:hover:scale-110">
              <img src={Picture} className="w-[90%] md:w-[60%] lg:w-[350px] rounded-md" />
            </div>
          </div>
        </Fade>

        <div className="text-section flex-1 justify-center pt-6 md:pt-0">
          <div className="cursor-pointer w-[90%] m-auto md:m-0 md:w-full lg:pt-6 md:px-10 lg:px-8">
            <Fade direction="right" duration={2000}>
              <p className=" md:text-lg text-gray-500">
                I’m Edem Kwaku Avorley, an experienced Cybersecurity Analyst, 
                Network Administrator, IT Support Engineer, and Full-Stack Developer 
                with a passion for building secure and scalable IT solutions. M
                y journey into technology started with a deep curiosity about how networks, 
                systems, and applications function, leading me to specialize in multiple areas of IT.
              </p>

              <div className="md:hidden bg-white">
              {showMore && (
          <>
            <div className="cursor-pointer">
              <h3 className=" font-bold text-lg text-gray-500 pt-3 pb-2">Education & Certifications</h3>
              <p className="text-gray-500">I hold a Bachelor of Technology in ICT and an HND in ICT from Ho Technical University, 
                as well as a Diploma in Network Administration & Engineering from GCOM Academy. 
                I’ve also earned globally recognized certifications, including:
              </p>
              <p className="flex flex-col py-2 pl-2">
                <li className="text-gray-500">ISC² Certified in Cybersecurity (CC)</li>
                <li className="text-gray-500">Google Cybersecurity Certificate</li>
                <li className="text-gray-500">Google IT Support Specialist Certificate</li>
              </p>
            </div>

            <div className="cursor-pointer">
              <h3 className=" font-bold text-lg text-gray-500 pt-3 pb-2">Technical Expertise</h3>
              <p className="text-gray-500">I have hands-on experience in:</p>
              <p className="flex flex-col py-2 pl-2">
                <li className="text-gray-500">Cybersecurity & Network Administration</li>
                <li className="text-gray-500">IT Support & Troubleshooting</li>
                <li className="text-gray-500">System Administration (Linux & Windows Servers)</li>
                <li className="text-gray-500">Web Development (Laravel, React, Inertia.js)</li>
                <li className="text-gray-500">Ethical Hacking</li>
              </p>
            </div>

            <div className="cursor-pointer">
              <h3 className=" font-bold text-lg text-gray-500 pt-3 pb-2">Professional Experience</h3>
              <p className="text-gray-500">I completed my national service at the Electricity Company of Ghana, Ho Regional Office,
                where I provided IT support, managed networks, and ensured system efficiency. Over the years, 
                I have worked on multiple projects, helping businesses and institutions improve their IT infrastructure and security.
              </p>
            </div>

            <div className=" cursor-pointer">
              <h3 className=" font-bold text-lg text-gray-500 pt-3 pb-2">My Mission</h3>
              <p className="flex flex-col text-gray-500">I am committed to helping businesses secure their digital assets, streamline IT operations, 
                and adopt emerging technologies to drive efficiency. Whether it’s cybersecurity, IT support, 
                or software development, I am always ready to take on new challenges.
                <span className="pt-2">📩 Let’s Collaborate! If you’re looking for an IT professional to work on a project, I’d love to connect. </span>
                <a className="libutton w-[160px] lg:w-[200px]" href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=edem-kwaku-avorley-b1ab48232" target="_blank">Follow on LinkedIn</a>

            </p>
            </div>
          </>
        )}
              </div>
            
              <button
                onClick={() => setShowMore(!showMore)}
                className="mt-1  py-2 text-blue-500 hover:text-blue-600 transition-all "
              >
                {showMore ? "Read Less" : "Read More"}
              </button>
              </Fade>
          </div>

          <div className="grid grid-cols-3 px-8 gap-2 lg:gap-0 lg:flex-row lg:space-x-16 pt-10 lg:px-36">
            <Fade direction="left" duration={2000}>
              <div className="flex flex-col py-6 shadow  md:py-2 lg:justify-center ring-2 w-[90%] px-2 rounded-md m-auto lg:ring-0 items-center hover:translate-x-2 cursor-pointer lg:px-2">
                <span className="text-gray-500 text-xl md:text-2xl font-bold">05+</span>
                <span className="text-gray-500 font-nornal text-sm md:text-lg">Years</span>
                <span className="text-gray-500 font-nornal text-sm md:text-lg">experience</span>
              </div>
            </Fade>
            <Fade direction="up" duration={2000}>
            <div className="flex flex-col py-6 shadow  md:py-2 lg:justify-center ring-2 w-[90%] px-2 rounded-md m-auto lg:ring-0 items-center hover:translate-x-2 cursor-pointer lg:px-2">
              <span className="text-gray-500 text-xl md:text-2xl font-bold">10+</span>
                <span className="text-gray-500 font-nornal text-sm md:text-lg">Completed</span>
                <span className="text-gray-500 font-nornal text-sm md:text-lg">projects</span>
              </div>
            </Fade>
            <Fade direction="right" duration={2000}>
            <div className="flex flex-col py-6 shadow  md:py-2 lg:justify-center ring-2 w-[90%] px-2 rounded-md m-auto lg:ring-0 items-center hover:translate-x-2 cursor-pointer lg:px-2">  
              <span className="text-gray-500 text-xl md:text-2xl font-bold">02+</span>
                <span className="text-gray-500 font-nornal text-sm md:text-lg">Companies</span>
                <span className="text-gray-500 font-nornal text-sm md:text-lg">worked</span>
              </div>
            </Fade>
          </div>

          <Fade direction="up" duration={2000}>
          <a
            href='https://drive.google.com/file/d/1o7t0KoMKwPWwMfgqjUJnwl_LXFriCzTK/view?usp=sharing' target="_blank"
            className="flex justify-center items-center lg:justify-none"
          >
            <div className="bg-yellow-500 text-blue-800 py-2 px-2 md:py-4 md:px-5 mt-10 rounded-lg lg:w-[50%] flex flex-row justify-center space-x-3 ring-2 ring-yellow-500 hover:scale-105 hover:translate-x-1 hover:bg-yellow-600 hover:text-blue-800 hover:ring-2 hover:ring-yellow-500">
              <button className="font-bold">Download CV</button>
              <FaFileDownload className="text-lg font-bold" />
            </div>
          </a>
          </Fade>
        </div>
      </div>

      <div className="hidden md:flex">
        {showMore && (
          <div className="px-10">
            <Fade direction="right" duration={2000}>
              <div className="cursor-pointer">
                <h3 className=" font-bold text-lg pt-3  text-gray-500 pb-2">Education & Certifications</h3>
                <p className=" text-gray-500">I hold a Bachelor of Technology in ICT and an HND in ICT from Ho Technical University, 
                  as well as a Diploma in Network Administration & Engineering from GCOM Academy. 
                  I’ve also earned globally recognized certifications, including:
                </p>
                <p className="flex flex-col py-2 pl-2">
                  <li className=" text-gray-500">ISC² Certified in Cybersecurity (CC)</li>
                  <li className=" text-gray-500">Google Cybersecurity Certificate</li>
                  <li className=" text-gray-500">Google IT Support Specialist Certificate</li>
                </p>
              </div>
           
              <div className="cursor-pointer">
                <h3 className=" font-bold text-lg  text-gray-500 pt-3 pb-2">Technical Expertise</h3>
                <p className=" text-gray-500">I have hands-on experience in:</p>
                <p className="flex flex-col py-2 pl-2">
                  <li className=" text-gray-500">Cybersecurity & Network Administration</li>
                  <li className=" text-gray-500">IT Support & Troubleshooting</li>
                  <li className=" text-gray-500">System Administration (Linux & Windows Servers)</li>
                  <li className=" text-gray-500">Web Development (Laravel, React, Inertia.js)</li>
                  <li className=" text-gray-500">Computer Hardware & Software Installation</li>
                  <li className=" text-gray-500">Ethical Hacking</li>
                </p>
              </div>
           
              <div className="cursor-pointer">
                <h3 className=" font-bold text-lg pt-3  text-gray-500 pb-2">Professional Experience</h3>
                <p className=" text-gray-500">I completed my national service at the Electricity Company of Ghana, Ho Regional Office,
                  where I provided IT support, managed networks, and ensured system efficiency. Over the years, 
                  I have worked on multiple projects, helping businesses and institutions improve their IT infrastructure and security.
                </p>
              </div>
            
              <div className=" cursor-pointer">
                <h3 className=" font-bold text-lg pt-3  text-gray-500 pb-2">My Mission</h3>
                <p className="flex flex-col  text-gray-500">I am committed to helping businesses secure their digital assets, streamline IT operations, 
                  and adopt emerging technologies to drive efficiency. Whether it’s cybersecurity, IT support, 
                  or software development, I am always ready to take on new challenges.
                  <span className="pt-2  text-gray-500">📩 Let’s Collaborate! If you’re looking for an IT professional to work on a project, I’d love to connect. </span>
                  <a className="libutton w-[160px] lg:w-[200px] mt-2" href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=edem-kwaku-avorley-b1ab48232" target="_blank">Follow on LinkedIn</a>

                </p>
              </div>
            </Fade>
            <button
                onClick={() => setShowMore(!showMore)}
                className="mt-1  py-2 text-blue-500 hover:text-blue-600 transition-all "
              >
                {showMore ? "Read Less" : "Read More"}
              </button>
            
          </div>
        )}
        </div>

    </div>
  );
}

//Skills page
function Skill() {
  const [showSkillDeveloper, setshowSkillDeveloper] = useState(false);
  const [showSkillNetworking, setshowSkillNetworking] = useState(false);
  const [showSkillSecurity, setshowSkillSecurity] = useState(false);

  function onShowSkillDeveloper() {
    setshowSkillDeveloper(!showSkillDeveloper);
  }
  function onShowSkillNetworking() {
    setshowSkillNetworking(!showSkillNetworking);
  }
  function onShowSkillSecurity() {
    setshowSkillSecurity(!showSkillSecurity);
  }

  return (
    <div className="bg-white pt-8 pb-20 lg:px-20 2xl:w-[80%] m-auto" id="skill">
      <div className="heading flex flex-col justify-center items-center hover:scale-105 hover:translate-x-2 cursor-pointer">
        <span className="text-xl md:text-3xl font-bold text-blue-900 opacity-80">
          Skills
        </span>
        <span className="text-lg font-semibold text-gray-500">
          My technical level
        </span>
      </div>

      <div className="flex mx-5 md:px-10 lg:px-0 gap-8 lg:gap-0 flex-col md:flex-row lg:justify-around pt-10">
        <div className="skill-section space-x-10">
        <Fade direction="up" duration={2000}>
          <div className="software-dev  flex lg:flex-none justify-center">
            <FaLaptopCode className="text-xl text-yellow-500 mb-3" />
            <button
              onClick={() => onShowSkillDeveloper()}
              className="flex justify-center items-center space-x-2"
            >
              {showSkillDeveloper ? (
                <FaSortUp className="text-xl text-yellow-500" />
              ) : (
                <FaSortDown className="text-xl text-yellow-500" />
              )}
              <h3 className="md:text-xl font-semibold text-gray-600">
                Software Development
              </h3>
            </button>
          </div>
          </Fade>

          {showSkillDeveloper && (
            <>
              <div className="ml-5 pb-2">
                <SkillSet heading={"Frontend Developer"}>
                  <div className="px-10">
                    <li className="text-gray-500">HTML</li>
                    <li className="text-gray-500">CSS</li>
                    <li className="text-gray-500">JavaScript</li>
                    <p className="pt-2 text-black">Frameworks</p>
                    <li className="text-gray-500">React</li>
                    <li className="text-gray-500">Tailwind-CSS(Framework)</li>
                  </div>
                </SkillSet>
              </div>

              <div className="ml-5">
                <SkillSet heading={"Backend Developer"}>
                  <div className="px-10">
                  <p className="pt-2 text-black">Programming Languages</p>
                    <li className="text-gray-600">Python</li>
                    <li className="text-gray-600">Php</li>
                    <p className="pt-2 text-black">Frameworks</p>
                    <li className="text-gray-600">Laravel</li>
                    <li className="text-gray-600">Django</li>
                  </div>
                  <div className="px-10 pt-2">
                    <p className="text-black">Databases</p>
                    <li className="text-gray-600">MySql</li>
                    <li className="text-gray-600">PostgresSQL</li>
                  </div>
                </SkillSet>
              </div>
            </>
          )}
        </div>

        <div className="skill-section space-x-10">
        <Fade direction="up" duration={2000}>
          <div className="software-dev flex lg:flex-none justify-center ">
            <FaNetworkWired className="text-xl text-yellow-500 mb-3" />
            <button
              onClick={() => onShowSkillNetworking()}
              className="flex justify-center items-center space-x-2"
            >
              {showSkillNetworking ? (
                <FaSortUp className="text-xl text-yellow-500" />
              ) : (
                <FaSortDown className="text-xl text-yellow-500" />
              )}
              <h3 className="md:text-xl font-semibold text-gray-600">
                Network Admin & Eng
              </h3>
            </button>
          </div>
          </Fade>

          {showSkillNetworking && (
            <>
              <div className="ml-5 prose list-outside">
                <div className="px-10">
                  <li className="text-gray-600">Office & Home Networking</li>
                  <li className="text-gray-600">Local Area Network (LAN)</li>
                  <li className="text-gray-600">Wireless Networking</li>
                  <li className="text-gray-600">Switching</li>
                  <li className="text-gray-600">Routing</li>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="skill-section space-x-10">
        <Fade direction="up" duration={2000}>
          <div className="software-dev  flex lg:flex-none justify-center ">
            <MdOutlineSecurity className="text-xl text-yellow-500 mb-3" />
            <button
              onClick={() => onShowSkillSecurity()}
              className="flex justify-center items-center space-x-2"
            >
              {showSkillSecurity ? (
                <FaSortUp className="text-xl text-yellow-500" />
              ) : (
                <FaSortDown className="text-xl text-yellow-500" />
              )}
              <h3 className="md:text-xl font-semibold text-gray-600">
                Cyber Security
              </h3>
            </button>
          </div>
          </Fade>

          {showSkillSecurity && (
            <>
              <div className="ml-5 prose list-outside">
                <div className="pl-14">
                  <li className="text-gray-600">SIEM Tool(Splunk Technology)</li>
                  <li className="text-gray-600">Python</li>
                  <li className="text-gray-600">Detection and Responds</li>
                  <li className="text-gray-600">Assets, Threats and Vulneralbility</li>
                  <li className="text-gray-600">Manage Security Risks</li>
                  <li className="text-gray-600">Linux and SQL</li>
                  <li className="text-gray-600">Ethical Hacking</li>
                  <p className="pt-2 text-black">Tool</p>
                  <li className="text-gray-600">Kali Linux</li>
                  <li className="text-gray-600">Metaploit</li>
                  <li className="text-gray-600">Wireshark</li>
                  <li className="text-gray-600">Others</li>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

//Qualification page
function Qualification() {
  return (
    <div
      className="bg-white min-h-screen pb-10 pt-1 lg:px-20 2xl:w-[80%] m-auto"
      id="skill"
    >
      <div className="heading flex flex-col justify-center items-center hover:scale-105 cursor-pointer">
        <span className="text-xl md:text-3xl font-bold text-blue-900 opacity-80">
          Qualification
        </span>
        <span className="text-md md:text-lg font-semibold text-gray-500">
          My Personal Journey
        </span>
      </div>

      <div className="sub-heading  item-center gap-40 pt-16">
        <div className="education">
          <div className="text px-5 md:px-10  lg:px-8 flex gap-4 item-center">
            <img src={Cap} alt="education-icon" className="w-6 md:w-10 pacity-80"/>
            {/* <FaHardHat className=" text-blue-900 opacity-80 md:ml-8" /> */}
            <h3 className="text-lg md:text-xl text-blue-900 opacity-80 font-bold">
              Education
            </h3>
          </div>
          <div className="grid px-3 grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-y-10 justify-center item-center pt-10 md:px-8">
            <a href="https://drive.google.com/file/d/1XZUCT3RM0KyVZIGRB3r3bH4J4httrNjj/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <Slide direction="left" duration={2000}>
              <div className="education-section pt-5 flex flex-col w-[90%] h-64 shadow-xl  m-auto lg:w-full lg:m-0 ring-1 ring-yellow-500 rounded-md px-6">
                <span className="text-base md:text-lg font-bold text-gray-600">
                  B'Tech <br />
                  Information & <br />
                  Communication Technology
                </span>
                <span className="text-gray-500 pt-3 font-semibold">
                  Ho Technical University
                </span>
                <span className="flex flex-row gap-3 pt-4 text-semibold">
                  <FaCalendar className="text-lg text-gray-500" />{" "}
                  <p className=" text-gray-500 text-sm">2022 - 2024</p>
                </span>
              </div>
            </Slide>
            </a>

            <a href="https://drive.google.com/file/d/10-tE2GW27-lh_pLYOrkZ3ECy5AYo6FvS/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <Slide direction="right" duration={2000}>
              <div className="education-section py-5 flex flex-col ring-1 ring-yellow-500 rounded-md px-6 w-[90%] h-64 shadow-xl m-auto lg:w-full lg:m-0">
                <span className="text-base md:text-lg font-bold text-gray-600">
                  HND <br />
                  Information & <br />
                  Communication Technology
                </span>
                <span className="text-gray-500 pt-3 font-semibold">
                  Ho Technical University
                </span>
                <span className="flex flex-row gap-3 pt-4 text-semibold">
                  <FaCalendar className="text-lg text-gray-500" />
                  <p className=" text-gray-500 text-sm">2019 - 2022</p>
                </span>
              </div>
            </Slide>
            </a>
            
            <a href="https://drive.google.com/file/d/1-ugLAytljLccMSManCXhSqD1ViIZW95y/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <Slide direction="left" duration={2000}>
              <div className="education-section py-5 flex flex-col ring-1 ring-yellow-500 rounded-md px-6 w-[90%] h-64 shadow-xl m-auto lg:w-full lg:m-0">
                <span className="text-base md:text-lg font-bold text-gray-600">
                  Google
                  <br />
                  Cybersecurity
                </span>
                <span className="text-gray-500 pt-3 font-semibold">
                  Cousera
                </span>
                <span className="flex flex-row gap-3 pt-4 text-semibold">
                  <FaCalendar className="text-lg text-gray-500" />
                  <p className=" text-gray-500 text-sm">
                    January 2023 -July 2023
                  </p>
                </span>
              </div>
            </Slide>
            </a>

            <a href="https://drive.google.com/file/d/1-t4Bjzr6udvrQn7f3pOLwJer_Hk-2MsW/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <Slide direction="left" duration={2000}>
              <div className="education-section py-5 flex flex-col ring-1 ring-yellow-500 rounded-md px-6 w-[90%] h-64 shadow-xl m-auto lg:w-full lg:m-0">
                <span className="text-base md:text-lg font-bold text-gray-600">
                  ISC2 
                  <br />
                  Certified in Cybersecurity
                </span>
                <span className="text-gray-500 pt-3 font-semibold">
                  ISC2
                </span>
                <span className="flex flex-row gap-3 pt-4 text-semibold">
                  <FaCalendar className="text-lg text-gray-500" />
                  <p className=" text-gray-500 text-sm">
                    November 1, 2024
                  </p>
                </span>
              </div>
            </Slide>
            </a>
            
            <Slide direction="right" duration={2000}>
              <div className="education-section py-5 flex flex-col ring-1 ring-yellow-500 rounded-md px-6 w-[90%] h-64 shadow-xl m-auto lg:w-full lg:m-0">
                <span className="text-base md:text-lg font-bold text-gray-600">
                  Google
                  <br />
                  IT Support
                </span>
                <span className="text-gray-500 pt-3 font-semibold">
                  Cousera
                </span>
                <span className="flex flex-row gap-3 pt-4 text-semibold">
                  <FaCalendar className="text-lg text-gray-500" />
                  <p className=" text-gray-500 text-sm">
                    November 2022 - May 2023
                  </p>
                </span>
              </div>
            </Slide>

            <a href="https://drive.google.com/file/d/1-wa8lRri4-7V8tFNeYhJR8A72SDjzisD/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <Slide direction="left" duration={2000}>
              <div className="education-section py-5 flex flex-col ring-1 ring-yellow-500 rounded-md px-6 w-[90%] h-64 shadow-xl m-auto lg:w-full lg:m-0">
                <span className="text-base md:text-lg font-bold text-gray-600">
                  Diploma
                  <br />
                  Networking Eng & <br />
                  Administration
                </span>
                <span className="text-gray-500 pt-3 font-semibold text-base md:text-lg">
                  GCOM IT ACADEMY
                </span>
                <span className="flex flex-row gap-3 pt-4 text-semibold">
                  <FaCalendar className="text-lg text-gray-500" />{" "}
                  <p className=" text-gray-500 text-sm">
                    December, 2023
                  </p>
                </span>
              </div>
            </Slide>
            </a>
            
          
            
          </div>
        </div>

        <div className="work-section">
          <div className="text flex gap-4 pt-16 item-center px-5 md:px-10 lg:px-8">
          <img src={Work} alt="education-icon" className="w-6 md:w-10 pacity-80"/>
            <h3 className="text-xl  text-blue-900 opacity-80 font-bold">
              Work
            </h3>
          </div>

          <div className="grid grid-cols-2 px-3 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-y-10 justify-center item-center pt-6 md:pt-10">
            <Fade direction="left" duration={2000}>
              <div className=" pt-5 flex flex-col ring-1 ring-yellow-500 rounded-md px-6 py-6 md:p-10 w-[90%] m-auto h-74 md:h-60 shadow-xl">
                <span className="font-bold text-gray-600">
                  IT Support Specialist (National Service)
                </span>
                <span className="text-gray-500 pt-3 font-semibold hidden md:flex">
                  Electricity Company of Ghana
                </span>
                <span className="text-gray-500 pt-3 font-semibold flex md:hidden">
                  ECG
                </span>
                <span className="flex flex-row gap-3 pt-4 text-semibold">
                  <FaCalendar className="text-lg text-gray-500" />{" "}
                  <p className="font-semibold text-gray-500 hidden md:flex">
                    November,2022 - October, 2023
                  </p>
                  <p className="font-semibold text-gray-500 text-sm flex md:hidden">
                    Nov,2022 - October, 2023
                  </p>

                </span>
              </div>
            </Fade>

            <Fade direction="right" duration={2000}>
              <div className=" pt-5 flex flex-col ring-1 ring-yellow-500 rounded-md px-6 py-6 md:p-10 w-[90%] m-auto h-74 md:h-60 shadow-xl">
                <span className="font-bold text-gray-600">
                  IT Support Specialist (Intenship)
                </span>
                <span className="text-gray-500 pt-3 font-semibold hidden md:flex">
                  Electricity Company of Ghana
                </span>
                <span className="text-gray-500 pt-3 font-semibold flex md:hidden">
                  ECG
                </span>
                <span className="flex flex-row gap-3 pt-4 text-semibold">
                  <FaCalendar className="text-lg text-gray-500" />{" "}
                  <p className="font-semibold text-gray-500 text-sm">
                    June 2021 - August 2022
                  </p>
                </span>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}

//Services page
function Service() {
  const [showCardSoftware, setShowCardSoftware] = useState(false);
  const [showCardNetworking, setShowCardNetworking] = useState(false);
  const [showCardHardSoftware, setShowCardHardSoftware] = useState(false);
  const [showCardSecurity, setShowCardSecurity] = useState(false);

  const onShowCardSoftware = () => {
    setShowCardSoftware(!showCardSoftware);
  };

  const onShowCardNetworking = () => {
    setShowCardNetworking(!showCardNetworking);
  };

  const onShowCardHardSoftWare = () => {
    setShowCardHardSoftware(!showCardHardSoftware);
  };

  const onShowCardSecurity = () => {
    setShowCardSecurity(!showCardSecurity);
  };

  return (
    <div
      className="bg-white  2xl:w-[80%] m-auto pb-20 pt-8 md:pt-20 lg:px-20  relative"
      id="services"
    >
      <div className="heading flex flex-col justify-center items-center hover:scale-105 cursor-pointer">
        <span className="text-xl md:text-3xl font-bold  text-blue-900 opacity-80">
          Services
        </span>
        <span className="text-lg font-semibold text-gray-500">
          What I offer
        </span>
      </div>

      <div className="sevice-wrapper grid grid-cols-2 pt-8 md:pt-20 px-6 lg:px-10 md:grid-cols-4 gap-5 gap-y-5 lg:grid-cols-4">
        <Slide direction="left" duration={2000}>
          <div className="software-wrapper block ring-1 h-56 lg:h-auto ring-yellow-500 shadow-lg shadow-blue-800 justify-bottom items-bottom py-5  px-3 rounded-md">
            <FaLaptopCode className="text-4xl text-yellow-500" />
            <p className="py-3 text-semibold text-lg text-gray-700">
              Software Development
            </p>
            <div
              onClick={() => {
                onShowCardSoftware();
              }}
              className="bg-yellow-500 block mt-3 ring-1 ring-yellow-500  hover:bg-yelow-700 hover:text-blue-800 hover:ring-2 hover:ring-yellow-500 rounded-md py-2 px-3"
              >
                <span className="cursor-pointer w-full flex flex-row items-center justify-center gap-2">View More <FaArrowRight /></span>
                
            </div>
          </div>
        </Slide>

        <Slide direction="right" duration={2000}>
        <div className="software-networking block ring-1 h-56 lg:h-auto ring-yellow-500 shadow-lg shadow-blue-800 justify-bottom items-bottom py-5  px-3 rounded-md">
            <FaNetworkWired className="text-4xl  text-yellow-500" />
            <p className="py-3 text-semibold text-lg text-gray-700">
              Computer Networking
            </p>
            <div
              onClick={() => {
                onShowCardNetworking();
              }}
              className="bg-yellow-500 block ring-1 mt-3 ring-yellow-500  hover:bg-yelow-700 hover:text-blue-800 hover:ring-2 hover:ring-yellow-500 rounded-md py-2 px-3"
              >
                <span className="cursor-pointer w-full flex flex-row items-center justify-center gap-2">View More <FaArrowRight /></span>
                
            </div>
          </div>
        </Slide>

        <Slide direction="left" duration={2000}>
        <div className="hardware-wrapper block ring-1 h-56 lg:h-auto ring-yellow-500 shadow-lg shadow-blue-800 justify-bottom items-bottom py-5 px-3 rounded-md">
            <MdOutlineHardware className="text-4xl   text-yellow-500" />
            <p className="py-3 text-semibold text-lg text-gray-700">
              Computer Hardware and Software
            </p>
          
            <div
              onClick={() => {
                onShowCardHardSoftWare();
             }}
              className="bg-yellow-500 block mt-3 ring-1 ring-yellow-500  hover:bg-yelow-700 hover:text-blue-800 hover:ring-2 hover:ring-yellow-500 rounded-md py-2 px-3"
            >
              <span className="cursor-pointer w-full flex flex-row items-center justify-center gap-2">View More <FaArrowRight /></span>
              
            </div>
           
          </div>
        </Slide>

        <Slide direction="right" duration={2000}>
        <div className="software-wrapper block ring-1 h-56 lg:h-auto ring-yellow-500 shadow-lg shadow-blue-800 justify-bottom items-bottom py-5 px-3 rounded-md">
            <MdOutlineSecurity className="text-4xl   text-yellow-500" />
            <p className="py-3 text-semibold text-lg text-gray-700">
              Computer Security
            </p>
            <div
              onClick={() => {
                onShowCardSecurity();
              }}
              className="bg-yellow-500 block mt-3 ring-1 ring-yellow-500  hover:bg-yelow-700 hover:text-blue-800 hover:ring-2 hover:ring-yellow-500 rounded-md py-2 px-3"
            >
              <span className="cursor-pointer w-full flex flex-row items-center justify-center gap-2">View More <FaArrowRight /></span>
              
            </div>
          </div>
        </Slide>
      </div>

      {/* Software Development Service card */}
      {showCardSoftware && (
        <div className="software-overlay min-h-screen lg:px-10 z-[100] bg-gray-100 flex justify-center left-0 items-center fixed  top-0">
          <div className="">
            <div
              className="absolute right-7 top-4"
              onClick={() => {
                onShowCardSoftware();
              }}
            >
              <p className="text-white font-bold text-xl md:left-20 cursor-pointer px-3 py-1 flex items-center bg-red-300 rounded-full">
                x
              </p>
            </div>
          </div>

          <div className="content px-1 md:px-4 py-20 md:py-10 bg-white ">
            <h2 className="font-bold text-xl">
              Services Under Software Development I Render
            </h2>
            <br />
            <p className=" text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
              aut distinctio enim tempore beatae obcaecati ut. Molestias, est
              sint. Cupiditate numquam alias velit reiciendis molestias.
              Expedita et totam consequatur consectetur! Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Ipsum aut distinctio enim
              tempore beatae obcaecati ut. Molestias, est sint. Cupiditate
              numquam alias velit reiciendis molestias. Expedita et totam
              consequatur consectetur! <br />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
              aut distinctio enim tempore beatae obcaecati ut. Molestias, est
              sint. Cupiditate numquam alias velit reiciendis molestias.
              Expedita et totam consequatur consectetur! Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Ipsum aut distinctio enim
              tempore beatae obcaecati ut. Molestias, est sint. Cupiditate
              numquam alias velit reiciendis molestias. Expedita et totam
              consequatur consectetur!
              <br />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
              aut distinctio enim tempore beatae obcaecati ut. Molestias, est
              sint. Cupiditate numquam alias velit reiciendis molestias.
              Expedita et totam consequatur consectetur! Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Ipsum aut distinctio enim
              tempore beatae obcaecati ut. Molestias, est sint. Cupiditate
              numquam alias velit reiciendis molestias. Expedita et totam
              consequatur consectetur!
              <br />
            </p>
          </div>
        </div>
      )}

      {/* Networking Service card */}
      {showCardNetworking && (
        <div className="software-overlay min-h-screen lg:px-10 z-[100] bg-gray-100 flex justify-center left-0 items-center fixed top-0">
          <div className="">
            <div
              className="absolute right-7 top-4"
              onClick={() => {
                onShowCardNetworking();
              }}
            >
              <p className="text-white font-bold text-xl md:left-20 cursor-pointer px-3 py-1 flex items-center bg-red-300 rounded-full">
                x
              </p>
            </div>
          </div>

          <div className="content px-1 md:px-4 py-20 md:py-10 bg-white">
            <h2 className="font-bold text-xl">
              Services Under Computer Networking I Render
            </h2>
            <br />
            <p className=" text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
              aut distinctio enim tempore beatae obcaecati ut. Molestias, est
              sint. Cupiditate numquam alias velit reiciendis molestias.
              Expedita et totam consequatur consectetur! Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Ipsum aut distinctio enim
              tempore beatae obcaecati ut. Molestias, est sint. Cupiditate
              numquam alias velit reiciendis molestias. Expedita et totam
              consequatur consectetur! <br />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
              aut distinctio enim tempore beatae obcaecati ut. Molestias, est
              sint. Cupiditate numquam alias velit reiciendis molestias.
              Expedita et totam consequatur consectetur! Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Ipsum aut distinctio enim
              tempore beatae obcaecati ut. Molestias, est sint. Cupiditate
              numquam alias velit reiciendis molestias. Expedita et totam
              consequatur consectetur!
              <br />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
              aut distinctio enim tempore beatae obcaecati ut. Molestias, est
              sint. Cupiditate numquam alias velit reiciendis molestias.
              Expedita et totam consequatur consectetur! Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Ipsum aut distinctio enim
              tempore beatae obcaecati ut. Molestias, est sint. Cupiditate
              numquam alias velit reiciendis molestias. Expedita et totam
              consequatur consectetur!
              <br />
            </p>
          </div>
        </div>
      )}

      {/* Hardware & Software Service card */}
      {showCardHardSoftware && (
        <div className="software-overlay min-h-screen lg:px-10 z-[100] bg-gray-100 flex justify-center left-0 items-center fixed top-0">
          <div className="">
            <div
              className="absolute right-7 top-4"
              onClick={() => {
                onShowCardHardSoftWare();
              }}
            >
              <p className="text-white font-bold text-xl md:left-20 cursor-pointer px-3 py-1 flex items-center bg-red-300 rounded-full">
                x
              </p>
            </div>
          </div>

          <div className="content px-1 md:px-4 py-20 md:py-10 bg-white">
            <h2 className="font-bold text-xl">
              Services Under Computer Hardware & Software I Render
            </h2>
            <br />
            <p className=" text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
              aut distinctio enim tempore beatae obcaecati ut. Molestias, est
              sint. Cupiditate numquam alias velit reiciendis molestias.
              Expedita et totam consequatur consectetur! Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Ipsum aut distinctio enim
              tempore beatae obcaecati ut. Molestias, est sint. Cupiditate
              numquam alias velit reiciendis molestias. Expedita et totam
              consequatur consectetur! <br />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
              aut distinctio enim tempore beatae obcaecati ut. Molestias, est
              sint. Cupiditate numquam alias velit reiciendis molestias.
              Expedita et totam consequatur consectetur! Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Ipsum aut distinctio enim
              tempore beatae obcaecati ut. Molestias, est sint. Cupiditate
              numquam alias velit reiciendis molestias. Expedita et totam
              consequatur consectetur!
              <br />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
              aut distinctio enim tempore beatae obcaecati ut. Molestias, est
              sint. Cupiditate numquam alias velit reiciendis molestias.
              Expedita et totam consequatur consectetur! Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Ipsum aut distinctio enim
              tempore beatae obcaecati ut. Molestias, est sint. Cupiditate
              numquam alias velit reiciendis molestias. Expedita et totam
              consequatur consectetur!
              <br />
            </p>
          </div>
        </div>
      )}

      {/* Security Service card */}
      {showCardSecurity && (
        <div className="software-overlay min-h-screen lg:px-10 z-[100] bg-transparent flex justify-center left-0 items-center fixed top-0">
          {/* <div className="">
            <div
              className="absolute right-7 top-4"
              
            >
             
            </div>
          </div> */}

          <div className="content px-1 md:px-4 py-20 md:py-10 bg-white lg:w-[70%] rounded-md shadow-md">
             <div className="flex justify-end">
             <p onClick={() => {
                onShowCardSecurity();
              }} className="text-white font-bold text-2xl md:left-20 cursor-pointer px-4 py-4 flex items-center justify-center bg-red-300 rounded-full w-3 h-3 right-0">
                x
              </p>
             </div>
            <h2 className="font-bold text-xl text-gray-500">
              Services Under Computer & Network Security I Render
            </h2>
            <br />
            <p className=" text-lg text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
              aut distinctio enim tempore beatae obcaecati ut. Molestias, est
              sint. Cupiditate numquam alias velit reiciendis molestias.
              Expedita et totam consequatur consectetur! Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Ipsum aut distinctio enim
              tempore beatae obcaecati ut. Molestias, est sint. Cupiditate
              numquam alias velit reiciendis molestias. Expedita et totam
              consequatur consectetur! <br />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
              aut distinctio enim tempore beatae obcaecati ut. Molestias, est
              sint. Cupiditate numquam alias velit reiciendis molestias.
              Expedita et totam consequatur consectetur! Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Ipsum aut distinctio enim
              tempore beatae obcaecati ut. Molestias, est sint. Cupiditate
              numquam alias velit reiciendis molestias. Expedita et totam
              consequatur consectetur!
              <br />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
              aut distinctio enim tempore beatae obcaecati ut. Molestias, est
              sint. Cupiditate numquam alias velit reiciendis molestias.
              Expedita et totam consequatur consectetur! Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Ipsum aut distinctio enim
              tempore beatae obcaecati ut. Molestias, est sint. Cupiditate
              numquam alias velit reiciendis molestias. Expedita et totam
              consequatur consectetur!
              <br />
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

//Portfolio page
function Portfolio() {
  return (
    <div className="bg-white pt-5 px-8 lg:px-20  2xl:w-[80%] m-auto" id="portfolio">
      <div className="heading flex flex-col justify-center items-center hover:scale-105 cursor-pointer">
        <span className="text-xl md:text-3xl font-bold  text-blue-900 opacity-80">
          Portfolio
        </span>
        <span className="text-lg font-semibold text-gray-500">
          Most recent works
        </span>
      </div>

      <div className="pt-10">
        <PorfolioItems />
      </div>
    </div>
  );
}

//Contact page
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_r3qb7nt",    
        "template_em856np",   
        form.current,
        "AZ9OSfXNIWeP00qHN"
      )
      .then(
        (response) => {
          alert("Message sent Successfully!", response.status, response.text);
        },
        (error) => {
          alert("Oooops! Something went wrong", error);
          console.error(error.text);
        }
      );
      e.target.reset();
  };

  return (
    <div className="pt-20 lg:px-20 2xl:w-[80%] m-auto" id="contact">
      <div className="heading flex flex-col justify-center items-center hover:scale-105 cursor-pointer">
        <span className="text-xl md:text-3xl font-bold text-blue-800 opacity-70">
          Contact Me
        </span>
        <span className="text-lg font-semibold text-gray-500">
          Get in touch
        </span>
      </div>

      <div className="flex flex-col md:flex-row px-4 md:px-10 ">
        <div className=" flex flex-col flex-1">
          <div className="flex items-center md:items-start flex-row gap-4 pt-8">
            <FiPhone className=" text-3xl text-yellow-500 mt-5" />
            <div className="flex flex-col">
              <span className=" font-bold text-xl opacity-70">Call Me</span>
              <span className="text-gray-400">+233 540 908 248</span>
              <span className="text-gray-400">+233 256 344 845</span>
            </div>
          </div>

          <div className="flex flex-row gap-4 pt-6 items-center md:items-start">
            <MdOutlineEmail className="rotate-0 text-3xl text-yellow-500 mt-5" />
            <div className="flex flex-col">
              <span className=" font-bold text-xl opacity-70">Email</span>
              <span className="text-gray-400">edemkwakuavorley@gmail.com</span>
              <span className="text-gray-400">edenkwaku85@gmail.com</span>
            </div>
          </div>

          <div className="flex flex-row gap-4 pt-6 items-center md:items-start">
            <MdOutlineLocationOn className="rotate-0 text-3xl text-yellow-500 mt-5" />
            <div className="flex flex-col">
              <span className=" font-bold text-xl opacity-70">Location</span>
              <span className="text-gray-400">Kabakaba Hill, Ho</span>
              <span className="text-gray-400">Volta Region</span>
            </div>
          </div>
        </div>

        <form
          action=""
          id="myForm"
          ref={form}
          className="pt-10 flex-1"
          autoComplete="off"
          onSubmit={sendEmail}
        >
          <div className="form-group py-2">
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              name="user_name"
              placeholder="name"
              className="bg-gray-100 focus-within:border-collapse text-black outline-1 outline-yellow-500 ring-1  w-full px-2 py-3 rounded-md"
            />
          </div>
          <div className="form-group py-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="user_email"
              placeholder="Email"
              className="bg-gray-100 focus-within:ring-yellow-500 text-black outline-1 outline-yellow-500 ring-1  w-full px-2 py-3 rounded-md"
            />
          </div>
          <div className="form-group py-2">
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              name="user_subject"
              placeholder="subject"
              className="bg-gray-100 focus-within:ring-yellow-500 text-black outline-1 outline-yellow-500 ring-1  w-full px-2 py-3 rounded-md"
            />
          </div>
          <div className="form-group py-3">
            <textarea
              cols={30}
              rows={4}
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              className="bg-gray-100 focus-within:ring-yellow-500 text-black outline-1 outline-yellow-500 ring-1  w-full px-2 py-3 rounded-md"
            ></textarea>
          </div>

          <div className="mb-10 flex justify-end">
            <input
              type="submit"
              value="Send Message"
              className="text-lg bg-yellow-500 hover:bg-yellow-600 py-1 md:py-3 px-4 md:px-10 text-white font-bold rounded-md"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

//Home page
function Home() {
  const [showMore, setShowMore] = useState(false);

  return (
    
      <div
        className="bg-white pt-10 lg:pt-4 pb-10 px-2 2xl:w-[80%] m-auto"
        id="home"
      >
        
        <div className="flex flex-col  gap-7 lg:py-3 px-6 lg:px-20 ">
          <Fade direction="down" duration={2000}>
            <div className="flex profile visible pr-4 justify-center pt-6 items-center flex-1 md:pb-4">
              <img
                src={Profile}
                alt=""
                className="w-[100px] md:w-[200px]  lg:w-[400px] xl:w-[350px]"
              />
            </div>
          </Fade>

          {/* <Fade direction="down" duration={2000}>
              <div className="hidden lg:flex profile visible pr-4 lg:pr-0 justify-center pt-6 lg:pt-0 items-center flex-1 hover:scale-110">
                <img
                  src={Profile}
                  alt=""
                  className="w-[250px] md:300px lg:ml-14"
                />
              </div>
          </Fade> */}
          <div className="md:px-3 flex gap-8 items-center justify-center mt-0">
            <a
              href="https://web.facebook.com/edem.kwaku.581"
              className="hover:translate-y-2"
            >
              <FaFacebook className="text-2xl text-yellow-500" />
            </a>
            <a
              href="https://github.com/kwakuedem"
              className="hover:translate-y-2"
            >
              <FaGithub className="text-2xl text-yellow-500" />
            </a>
            <a
              href="https://twitter.com/edemkwaku4"
              className="hover:translate-y-2"
            >
              <FaTwitter className="text-2xl text-yellow-500" />
            </a>
            <a
              href="https://www.linkedin.com/in/edem-kwaku-avorley-b1ab48232"
              className="hover:translate-y-2"
            >
              <FaLinkedin className="text-2xl text-yellow-500" />
            </a>
          </div>

          <div className="flex flex-col md:px-0">
            <div className="intro-text-wrapper flex flex-col md:flex-row">
              <div className="flex flex-col flex-1">
                
                <div className="name md:pl-3  flex-col lg:pb-4 cursor-pointer gap-2 md:gap-0">
                  <p className=" opacity-80 dark:text-gray-600 md:text-xl lg:text-2xl font-semibold py-1 leading-3 lg:leading-6 lg:tracking-wide">
                    Hello, and welcome to my digital space!
                  </p>
                  <p className=" opacity-80 dark:text-gray-600 md:text-xl lg:text-2xl font-semibold py-1 leading-3 lg:leading-6 lg:tracking-wide">
                    I’m Edem Kwaku Avorley, 
                  </p>
                 
                </div>
                <Fade direction="left" duration={2000}>
                 <div className="text-gray-500 md:text-lg py-2 md:mx-3">
                    <p className=" pb-2 cursor-pointer flex flex-col">
                    a Cybersecurity Analyst, Network Administrator, 
                    IT Support Engineer, and Full-Stack Developer. With expertise in cybersecurity, 
                    networking, system administration (Linux & Windows), and web development (Laravel, React, Inertia.js), 
                    I am passionate about creating secure, efficient, and scalable IT solutions. 
                    My goal is to leverage technology to enhance productivity, security, and user experience.

                    <span className=" pt-2 font-semibold"> 📩 Let’s Connect! Whether you’re looking for an IT expert or a cybersecurity consultant, 
                    I’m open to collaborations and new opportunities</span>
                    </p>      
                    <a className="libutton w-[160px] lg:w-[200px] mt-2" href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=edem-kwaku-avorley-b1ab48232" target="_blank">Follow on LinkedIn</a>

                  </div>
                </Fade>

             
                <Fade direction="up" duration={2000}>
                  <AnchorLink
                    href="#about"
                    className="mt-12 md:mt-14  lg:mt-20 m-auto w-[50%] md:w-[40%] lg:w-[15%] gap-2 bg-yellow-500 flex justify-center items-center rounded-md ring-2 ring-yellow-500 hover:text-yellow-500 hover:bg-yellow-600 hover:ring-yellow-500"
                  >
                    <button className="py-2 lg:py-2 text-lg font-bold ">
                      About Me
                    </button>
                    <FaArrowRight />
                  </AnchorLink>
                </Fade>
              </div>
          </div>
        </div>
      </div>
      </div>
  );
}

//Footer
function Footer() {
  return (
    <div className="bg-yellow-500 opacity-90 py-3 px-1 w-full">
      <div className="  grid grid-cols-1 lg:grid-cols-2 gap-y-1 lg:gap-y-6  px-10 md:px-20">
        <ul className="flex flex-col md:flex-row gap-2 md:gap-3 px-6 py-6 md:justify-center md:items-center">
          <div className="pb-4 md:flex md:flex-col md:justify-center  md:pt-3 md:gap-4">
            <AnchorLink href="#home">
              <p className="text-xl text-blue-900 font-bold opacity-80">
                Edem
              </p>
            </AnchorLink>
          </div>
          <li>
            <AnchorLink href="#home" className="font-semibold">
              Home
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href="#about" className="font-semibold">
              About Me
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href="#skill" className="font-semibold">
              Skill
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href="#services" className="font-semibold">
              Services
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href="#portfolio" className="font-semibold">
              Portfolio
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href="#contact" className="font-semibold">
              Contact Me
            </AnchorLink>
          </li>
        </ul>
        <div className="flex flex-col md:flex-row px-6 justify-center">
          <div className="social-link-wrapper py-1 md:py-3  md:px-3 flex flex-row gap-4 items-center  ">
            <a
              href="https://web.facebook.com/edem.kwaku.581"
               target="_blank" rel="noopener noreferrer"
              className="hover:translate-y-2"
            >
              <FaFacebook className="text-2xl text-blue-900" />
            </a>
            <a
              href="https://github.com/kwakuedem"
               target="_blank" rel="noopener noreferrer"
              className="hover:translate-y-2"
            >
              <FaGithub className="text-2xl text-blue-900" />
            </a>
            <a
              href="https://twitter.com/edemkwaku4"
               target="_blank" rel="noopener noreferrer"
              className="hover:translate-y-2"
            >
              <FaTwitter className="text-2xl text-blue-900" />
            </a>
            <a
              href="https://www.linkedin.com/in/edem-kwaku-avorley-b1ab48232/
"
               target="_blank" rel="noopener noreferrer"
              className="hover:translate-y-2"
            >
              <FaLinkedin className="text-2xl text-blue-900" />
            </a>
          </div>
          <div className="flex flex-row pt-3 md:pt-0 pb-4 md:pb-0 md:flex-col md:justify-center md:items-center">
            <span className="text-white">
              Developed with
              <span className="text-3xl text-red-600 px-2 md:px-2">
                &hearts;
              </span>
              By Edem
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

//Main
function Main() {
  return (
    <>
      <NavigationBar />
      <Home />
      <About />
      <Skill />
      <Qualification />
      <Service />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default Main;
