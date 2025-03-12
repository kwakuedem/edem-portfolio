import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Fade, Slide } from "react-awesome-reveal";

import Profile from "../assets/Profile.png";
import Picture from "../assets/Picture.png";
import Project from "../assets/Project.png";

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
import Resume from "../assets/resume.pdf";
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
      <div className="fixed m-auto top-0 w-full  z-[200] h-full bg-white">
        <div className="bg-white relative transition duration-1000 z-10 w-full top-0 h-full ">
          <div
            className="nav-wrapper py-5 px-4 flex flex-col relative"
            onClick={() => onShowMenu()}
          >
            <div className="absolute right-7 ">
              <p className="text-white font-bold text-xl  md md:left-20 cursor-pointer px-3 py-1 flex items-center bg-red-300 rounded-full">
                x
              </p>
            </div>

            <div className="brand pb-3 md:pb-0 flex  justify-center">
              <AnchorLink href="#home">
                <span className="font-bold text-2xl cursor-pointer text-white pt-4">
                  Edem
                </span>
              </AnchorLink>
            </div>
            <div className="nav-menus flex justify-center pt-4 lg:pt-32 flex-col md:flex-row">
              <ul className="flex flex-col gap-3 md:gap-5 px-4 pb-6 lg:pb-0">
                <p className="text-white font-bold text-xl text underline">
                  Menu
                </p>
                <li>
                  <AnchorLink href="#home" className="font-semibold text-white">
                    Home
                  </AnchorLink>
                </li>
                <li>
                  <AnchorLink
                    href="#skill"
                    className="font-semibold text-white"
                  >
                    Skill
                  </AnchorLink>
                </li>
                <li>
                  <AnchorLink
                    href="#services"
                    className="font-semibold text-white"
                  >
                    Services
                  </AnchorLink>
                </li>
                <li>
                  <AnchorLink
                    href="#portfolio"
                    className="font-semibold text-white"
                  >
                    Portfolio
                  </AnchorLink>
                </li>
                <li>
                  <AnchorLink
                    href="#contact"
                    className="font-semibold text-white"
                  >
                    Contact Me
                  </AnchorLink>
                </li>
              </ul>
              <hr className="" />
              <div className="follow px-4 lg:px-0 pt-6 lg:pt-0 lg:ml-6 flex flex-col lg:flex-row gap-8">
                <div>
                  <p className="text-white font-bold text-xl pb-5">Follow</p>
                  <div className=" social-links flex gap-x-2 lg:gap-x-4">
                    <a
                      href="https://web.facebook.com/edem.kwaku.581"
                      className="hover:translate-y-2"
                    >
                      <FaFacebook className="text-2xl text-gray-400" />
                    </a>
                    <a
                      href="https://github.com/kwakuedem"
                      className="hover:translate-y-2"
                    >
                      <FaGithub className="text-2xl text-gray-400" />
                    </a>
                    <a
                      href="https://twitter.com/edemkwaku4"
                      className="hover:translate-y-2"
                    >
                      <FaTwitter className="text-2xl text-gray-400" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/avorley-edem-kwaku-b1ab48232/"
                      className="hover:translate-y-2"
                    >
                      <FaLinkedin className="text-2xl text-gray-400" />
                    </a>
                  </div>
                </div>

                <div className="contact pb-6 lg:pb-0">
                  <div className="flex flex-col">
                    <span className=" font-bold text-white text-xl pb-4">
                      Call or What'sApp Me
                    </span>
                    <span className="text-gray-400">+233 540 908 248</span>
                    <span className="text-gray-400">+233 200 786 190</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="bg-white px-2 lg:px-20  sticky py-4 z-10 w-full top-0 flex justify-between ring-2 ring-gray-300 2xl:w-[80%] m-auto">
        <div className="brand pl-5  flex justify-center">
          <span className="font-bold text-2xl cursor-pointer text-yellow-600 ">
            Edem
          </span>
        </div>
        <div
          className="px-3 mr-5 bg-yellow-500 py-1 cursor-pointer shadow-lg shadow-gray-300 rounded-md"
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
  return (
    <div
      className="bg-white min-h-screen pb-10 pt-20 md:pt-0 lg:pt-20 lg:px-20  2xl:w-[80%] m-auto"
      id="about"
    >
      <div className="heading flex flex-col justify-center items-center hover:translate-x-2">
        <span className="text-3xl font-bold text-blue-900 opacity-80">
          About Me
        </span>
        <span className="text-lg font-semibold text-gray-500">
          My Introduction
        </span>
      </div>

      <div className="content flex flex-col lg:flex-row pt-10 lg:pt-20 lg:px-10">
        <div className="flex justify-center item-center">
          <div className="image-card w-full lg:w-[350px] flex lg:flex-1 justify-center items-center lg:hover:scale-110">
            <img src={Picture} className="w-[90%] md:w-[60%] lg:w-[350px] rounded-md" />
          </div>
        </div>

        <div className="text-section flex-1 justify-center pt-6 md:pt-0">
          <div className="hover:scale-105 cursor-pointer w-[90%] m-auto md:m-0 md:w-full md:pt-6 lg:pt-0 md:px-16 lg:px-8">
            <p className="text-lg text-gray-500">
              I have knowledge in Web development, Computer networking, Computer
              Security, Linux and Windows Server Administration, and Computer
              Hardware.With extensive knowledge and years of experience, working
              in web technologies and Ui / Ux design,networking, Cybersecurity,
              linux and windows server administration and computer Hardware, I
              ensure on delivering quality work.
            </p>
          </div>

          <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row lg:space-x-16 pt-10 lg:px-56">
            <Fade direction="left" duration={2000}>
              <div className="flex flex-col py-10 lg:py-0 lg:justify-center ring-2 w-[90%] rounded-md m-auto lg:ring-0 items-center hover:translate-x-2 cursor-pointer">
                <span className="text-gray-500 text-2xl font-bold">05+</span>
                <span className="text-gray-500 font-semibold">Years</span>
                <span className="text-gray-500 font-semibold">experience</span>
              </div>
            </Fade>
            <Fade direction="up" duration={2000}>
              <div className="flex flex-col py-10 lg:py-0 lg:justify-center ring-2 w-[90%] rounded-md m-auto lg:ring-0 items-center hover:translate-x-2 cursor-pointer">
                <span className="text-gray-500 text-2xl font-bold">10+</span>
                <span className="text-gray-500 font-semibold">Completed</span>
                <span className="text-gray-500 font-semibold">projects</span>
              </div>
            </Fade>
            <Fade direction="right" duration={2000}>
              <div className="flex flex-col py-10 lg:py-0 lg:justify-center ring-2 w-[90%] rounded-md m-auto lg:ring-0 items-center hover:translate-x-2 cursor-pointer">
                <span className="text-gray-500 text-2xl font-bold">02+</span>
                <span className="text-gray-500 font-semibold">Companies</span>
                <span className="text-gray-500 font-semibold">worked</span>
              </div>
            </Fade>
          </div>

          <a
            href={Resume}
            className="flex justify-center items-center lg:justify-none"
          >
            <div className="bg-yellow-600 text-blue-800 py-4 px-5 mt-10 rounded-lg lg:w-[50%] flex flex-row justify-center space-x-3 ring-2 ring-blue-800 hover:scale-105 hover:translate-x-1 hover:bg-white hover:text-yellow-600 hover:ring-2 hover:ring-yellow-600">
              <button className="font-bold">Download CV</button>
              <FaFileDownload className="text-lg font-bold" />
            </div>
          </a>
        </div>
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
    <div className="bg-white pt-20 pb-20 lg:px-20 2xl:w-[80%] m-auto" id="skill">
      <div className="heading flex flex-col justify-center items-center hover:scale-105 hover:translate-x-2 cursor-pointer">
        <span className="text-3xl font-bold text-blue-900 opacity-80">
          Skills
        </span>
        <span className="text-lg font-semibold text-gray-500">
          My technical level
        </span>
      </div>

      <div className="flex mx-5 md:px-10 lg:px-0 gap-8 lg:gap-0 flex-col md:flex-row lg:justify-around pt-10">
        <div className="skill-section space-x-10">
          <div className="software-dev  flex lg:flex-none md:justify-center">
            <FaLaptopCode className="text-xl text-yellow-600 mb-3" />
            <button
              onClick={() => onShowSkillDeveloper()}
              className="flex justify-center items-center space-x-2"
            >
              {showSkillDeveloper ? (
                <FaSortUp className="text-xl text-yellow-600" />
              ) : (
                <FaSortDown className="text-xl text-yellow-600" />
              )}
              <h3 className="text-xl font-semibold text-gray-600">
                Software Developer
              </h3>
            </button>
          </div>

          {showSkillDeveloper && (
            <>
              <div className="ml-5">
                <SkillSet heading={"Frontend Developer"}>
                  <ul>
                    <li className="text-gray-500">HTML</li>
                    <li className="text-gray-500">CSS</li>
                    <li className="text-gray-500">JavaScript</li>
                    <li className="text-gray-500">React</li>
                    <li className="text-gray-500">Tailwind Css</li>
                  </ul>
                </SkillSet>
              </div>

              <div className="ml-5">
                <SkillSet heading={"Backend Developer"}>
                  <ul>
                    <li className="text-gray-600">Python</li>
                    <li className="text-gray-600">Php</li>
                    <li className="text-gray-600">Rust</li>
                    <li className="text-gray-600">Laravel</li>
                    <li className="text-gray-600">Django</li>
                  </ul>
                </SkillSet>
              </div>
            </>
          )}
        </div>

        <div className="skill-section space-x-10">
          <div className="software-dev flex lg:flex-none md:justify-center ">
            <FaNetworkWired className="text-xl text-yellow-600 mb-3" />
            <button
              onClick={() => onShowSkillNetworking()}
              className="flex justify-center items-center space-x-2"
            >
              {showSkillNetworking ? (
                <FaSortUp className="text-xl text-yellow-600" />
              ) : (
                <FaSortDown className="text-xl text-yellow-600" />
              )}
              <h3 className="text-xl font-semibold text-gray-600">
                Network Engineer
              </h3>
            </button>
          </div>

          {showSkillNetworking && (
            <>
              <div className="ml-5 prose list-outside">
                <ul>
                  <li className="text-gray-600">Office Networking</li>
                  <li className="text-gray-600">LAN</li>
                  <li className="text-gray-600">Wireless Networking</li>
                  <li className="text-gray-600">Switching</li>
                  <li className="text-gray-600">Routing</li>
                </ul>
              </div>
            </>
          )}
        </div>

        <div className="skill-section space-x-10">
          <div className="software-dev  flex lg:flex-none md:justify-center ">
            <MdOutlineSecurity className="text-xl text-yellow-600 mb-3" />
            <button
              onClick={() => onShowSkillSecurity()}
              className="flex justify-center items-center space-x-2"
            >
              {showSkillSecurity ? (
                <FaSortUp className="text-xl text-yellow-600" />
              ) : (
                <FaSortDown className="text-xl text-yellow-600" />
              )}
              <h3 className="text-xl font-semibold text-gray-600">
                Cyber Security Analist
              </h3>
            </button>
          </div>

          {showSkillSecurity && (
            <>
              <div className="ml-5 prose list-outside">
                <ul>
                  <li className="text-gray-600">SIEM Tool(Splunk Technology)</li>
                  <li className="text-gray-600">Python</li>
                  <li className="text-gray-600">Detection and Responds</li>
                  <li className="text-gray-600">Assets, Threats and Vulneralbility</li>
                  <li className="text-gray-600">Manage Security Risks</li>
                  <li className="text-gray-600">Linux and SQL</li>
                </ul>
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
      className="bg-white min-h-screen pb-10 pt-10 lg:px-20 2xl:w-[80%] m-auto"
      id="skill"
    >
      <div className="heading flex flex-col justify-center items-center hover:scale-105 cursor-pointer">
        <span className="text-3xl font-bold text-blue-900 opacity-80">
          Qualification
        </span>
        <span className="text-lg font-semibold text-gray-500">
          My Personal Journey
        </span>
      </div>

      <div className="sub-heading  item-center gap-40 pt-16">
        <div className="education">
          <div className="text px-5 md:px-10  lg:px-0 flex gap-4 item-center">
            <FaHardHat className="text-2xl text-blue-900 opacity-80 md:ml-8" />
            <h3 className="text-xl   text-blue-900 opacity-80 font-bold">
              Education
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-y-10 justify-center item-center pt-10 md:px-8">
            <a href="https://drive.google.com/file/d/1XZUCT3RM0KyVZIGRB3r3bH4J4httrNjj/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <Slide direction="left" duration={2000}>
              <div className="education-section pt-5 flex flex-col w-[90%] h-52 shadow-xl  m-auto lg:w-full lg:m-0 ring-1 ring-yellow-600 rounded-md px-10">
                <span className="font-bold text-gray-600">
                  B'Tech <br />
                  Information & <br />
                  Communication Technology
                </span>
                <span className="text-gray-500 pt-3 font-semibold">
                  Ho Technical University
                </span>
                <span className="flex flex-row gap-3 pt-4 text-semibold">
                  <FaCalendar className="text-lg text-gray-500" />{" "}
                  <p className="font-semibold text-gray-500">2022 - 2024</p>
                </span>
              </div>
            </Slide>
            </a>

            <a href="https://drive.google.com/file/d/10-tE2GW27-lh_pLYOrkZ3ECy5AYo6FvS/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <Slide direction="right" duration={2000}>
              <div className="education-section py-5 flex flex-col ring-1 ring-yellow-600 rounded-md px-10 w-[90%] h-52 shadow-xl m-auto lg:w-full lg:m-0">
                <span className="font-bold text-gray-600">
                  HND <br />
                  Information & <br />
                  Communication Technology
                </span>
                <span className="text-gray-500 pt-3 font-semibold">
                  Ho Technical University
                </span>
                <span className="flex flex-row gap-3 pt-4 text-semibold">
                  <FaCalendar className="text-lg text-gray-500" />
                  <p className="font-semibold text-gray-500">2019 - 2022</p>
                </span>
              </div>
            </Slide>
            </a>
            
            <a href="https://drive.google.com/file/d/1-ugLAytljLccMSManCXhSqD1ViIZW95y/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <Slide direction="left" duration={2000}>
              <div className="education-section py-5 flex flex-col ring-1 ring-yellow-600 rounded-md px-10 w-[90%] h-52 shadow-xl m-auto lg:w-full lg:m-0">
                <span className="font-bold text-gray-600">
                  Google
                  <br />
                  Cybersecurity
                </span>
                <span className="text-gray-500 pt-3 font-semibold">
                  Cousera
                </span>
                <span className="flex flex-row gap-3 pt-4 text-semibold">
                  <FaCalendar className="text-lg text-gray-500" />
                  <p className="font-semibold text-gray-500">
                    January 2023 -July 2023
                  </p>
                </span>
              </div>
            </Slide>
            </a>

            <a href="https://drive.google.com/file/d/1-t4Bjzr6udvrQn7f3pOLwJer_Hk-2MsW/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <Slide direction="left" duration={2000}>
              <div className="education-section py-5 flex flex-col ring-1 ring-yellow-600 rounded-md px-10 w-[90%] h-52 shadow-xl m-auto lg:w-full lg:m-0">
                <span className="font-bold text-gray-600">
                  ISC2 
                  <br />
                  Certified in Cybersecurity
                </span>
                <span className="text-gray-500 pt-3 font-semibold">
                  ISC2
                </span>
                <span className="flex flex-row gap-3 pt-4 text-semibold">
                  <FaCalendar className="text-lg text-gray-500" />
                  <p className="font-semibold text-gray-500">
                    November 1, 2024
                  </p>
                </span>
              </div>
            </Slide>
            </a>
            
            <Slide direction="right" duration={2000}>
              <div className="education-section py-5 flex flex-col ring-1 ring-yellow-600 rounded-md px-10 w-[90%] h-52 shadow-xl m-auto lg:w-full lg:m-0">
                <span className="font-bold text-gray-600">
                  Google
                  <br />
                  IT Support
                </span>
                <span className="text-gray-500 pt-3 font-semibold">
                  Cousera
                </span>
                <span className="flex flex-row gap-3 pt-4 text-semibold">
                  <FaCalendar className="text-lg text-gray-500" />
                  <p className="font-semibold text-gray-500">
                    November 2022 - May 2023
                  </p>
                </span>
              </div>
            </Slide>

            <a href="https://drive.google.com/file/d/1-wa8lRri4-7V8tFNeYhJR8A72SDjzisD/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <Slide direction="left" duration={2000}>
              <div className="education-section py-5 flex flex-col ring-1 ring-yellow-600 rounded-md px-10 w-[90%] h-52 shadow-xl m-auto lg:w-full lg:m-0">
                <span className="font-bold text-gray-600">
                  Diploma
                  <br />
                  Networking Eng & <br />
                  Administration
                </span>
                <span className="text-gray-500 pt-3 font-semibold">
                  GCOM IT ACADEMY
                </span>
                <span className="flex flex-row gap-3 pt-4 text-semibold">
                  <FaCalendar className="text-lg text-gray-500" />{" "}
                  <p className="font-semibold text-gray-500">
                    June, 2021 - December, 2023
                  </p>
                </span>
              </div>
            </Slide>
            </a>
            
            <a href="https://drive.google.com/file/d/1-uuXBgtK0Wr7feOCh8yLb0u4zp-B8NGD/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <Slide direction="right" duration={2000}>
              <div className="education-section py-5 flex flex-col ring-1 ring-yellow-600 rounded-md px-10 w-[90%] h-52 shadow-xl m-auto lg:w-full lg:m-0">
                <span className="font-bold text-gray-600">
                  WASSCE
                  <br />
                </span>
                <span className="text-gray-500 pt-3 font-semibold">
                  Business Senior High,Tamale
                </span>
                <span className="flex flex-row gap-3 pt-4 text-semibold">
                  <FaCalendar className="text-lg text-gray-500" />{" "}
                  <p className="font-semibold text-gray-500">
                    August,2013,June, 2016
                  </p>
                </span>
              </div>
            </Slide>
            </a>
            
          </div>
        </div>

        <div className="work-section">
          <div className="text flex gap-4 pt-16 item-center px-5 md:px-10 lg:px-0">
            <FaFile className="text-2xl text-blue-900 opacity-80 md:ml-4" />
            <h3 className="text-xl  text-blue-900 opacity-80 font-bold">
              Work
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-y-10 justify-center item-center pt-6 md:pt-10">
            <Fade direction="left" duration={2000}>
              <div className=" pt-5 flex flex-col ring-1 ring-yellow-600 rounded-md p-10 w-[90%] m-auto h-52 shadow-xl">
                <span className="font-bold text-gray-600">
                  IT Support Specialist (National Service)
                </span>
                <span className="text-gray-500 pt-3 font-semibold">
                  Electricity Company of Ghana
                </span>
                <span className="flex flex-row gap-3 pt-4 text-semibold">
                  <FaCalendar className="text-lg text-gray-500" />{" "}
                  <p className="font-semibold text-gray-500">
                    November 2022 - October 2023
                  </p>
                </span>
              </div>
            </Fade>

            <Fade direction="right" duration={2000}>
              <div className=" pt-5 flex flex-col ring-1 ring-yellow-600 rounded-md p-10 w-[90%] m-auto h-52 shadow-xl">
                <span className="font-bold text-gray-600">
                  IT Support Specialist (Intenship)
                </span>
                <span className="text-gray-500 pt-3 font-semibold">
                  Electricity Company of Ghana
                </span>
                <span className="flex flex-row gap-3 pt-4 text-semibold">
                  <FaCalendar className="text-lg text-gray-500" />{" "}
                  <p className="font-semibold text-gray-500">
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
      className="bg-white min-h-screen 2xl:w-[80%] m-auto pb-20 pt-20 lg:px-20  relative"
      id="services"
    >
      <div className="heading flex flex-col justify-center items-center hover:scale-105 cursor-pointer">
        <span className="text-3xl font-bold  text-blue-900 opacity-80">
          Services
        </span>
        <span className="text-lg font-semibold text-gray-500">
          What I offer
        </span>
      </div>

      <div className="sevice-wrapper pt-20 px-4 lg:px-10 grid md:grid-cols-2 gap-5 gap-y-5 lg:grid-cols-3">
        <Slide direction="left" duration={2000}>
          <div className="software-wrapper flex flex-col gap-5 ring-1 ring-yellow-600 shadow-lg shadow-blue-800 justify-bottom items-bottom py-5 md:py-10 px-3 rounded-md">
            <FaLaptopCode className="text-4xl md:mt-10  text-yellow-600" />
            <p className="p-y text-semibold text-lg text-gray-700">
              Software Development
            </p>
            <div
              onClick={() => {
                onShowCardSoftware();
              }}
              className="bg-yellow-600 flex flex-row gap-2 items-center ring-1 ring-blue-900 w-[50%] md:w-[40%] lg:w-[40%]  hover:bg-blue-800 hover:text-white hover:ring-2 hover:ring-yellow-600 rounded-md py-2 px-3"
            >
              <span className="cursor-pointerg">View More</span>
              <FaArrowRight />
            </div>
          </div>
        </Slide>

        <Slide direction="right" duration={2000}>
          <div className="network-wrapper flex flex-col gap-5 ring-1 py-5 ring-yellow-600 shadow-lg shadow-blue-800 justify-bottom items-bottom lg:py-10 px-3 rounded-md">
            <FaNetworkWired className="text-4xl md:mt-10  text-yellow-600" />
            <p className="p-y text-semibold text-lg text-gray-700">
              Computer Networking
            </p>
            <div
              onClick={() => {
                onShowCardNetworking();
              }}
              className=" bg-yellow-600 flex flex-row gap-2 items-center ring-1 ring-blue-900 w-[50%] md:w-[40%] lg:w-[40%] hover:bg-blue-800 hover:text-white hover:ring-2 hover:ring-yellow-600 rounded-md py-2 px-3"
            >
              <span className="cursor-pointer ">View More</span>
              <FaArrowRight />
            </div>
          </div>
        </Slide>

        <Slide direction="left" duration={2000}>
          <div className="hardware-wrapper flex flex-col gap-5 ring-1 py-5 ring-yellow-600 shadow-lg shadow-blue-800 justify-bottom items-bottom lg:py-10 px-3 rounded-md">
            <MdOutlineHardware className="text-4xl md:mt-10  text-yellow-600" />
            <p className="p-y text-semibold text-lg text-gray-700">
              Computer Hardware and Software
            </p>
            <div
              onClick={() => {
                onShowCardHardSoftWare();
              }}
              className=" bg-yellow-600 flex flex-row gap-2 items-center ring-1 ring-blue-900 w-[50%] md:w-[40%] lg:w-[40%] hover:bg-blue-800 hover:text-white hover:ring-2 hover:ring-yellow-600 rounded-md py-2 px-3"
            >
              <span className="cursor-pointer ">View More</span>
              <FaArrowRight />
            </div>
          </div>
        </Slide>

        <Slide direction="right" duration={2000}>
          <div className="security-wrapper flex flex-col gap-5 ring-1 py-5 ring-yellow-600 shadow-lg shadow-blue-800 justify-bottom items-bottom lg:py-10 px-3 rounded-md">
            <MdOutlineSecurity className="text-4xl md:mt-10  text-yellow-600" />
            <p className="p-y text-semibold text-lg text-gray-700">
              Computer Security
            </p>
            <div
              onClick={() => {
                onShowCardSecurity();
              }}
              className="bg-yellow-600 flex flex-row gap-2 items-center ring-1 ring-blue-900 w-[50%] md:w-[40%] lg:w-[40%] hover:bg-blue-800 hover:text-white hover:ring-2 hover:ring-yellow-600 rounded-md py-2 px-3"
            >
              <span className="cursor-pointerg">View More</span>
              <FaArrowRight />
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
    <div className="bg-white pt-20 lg:px-20  2xl:w-[80%] m-auto" id="portfolio">
      <div className="heading flex flex-col justify-center items-center hover:scale-105 cursor-pointer">
        <span className="text-3xl font-bold  text-blue-900 opacity-80">
          Portfolio
        </span>
        <span className="text-lg font-semibold text-gray-500">
          Most recent works
        </span>
      </div>

      <div className="pt-10 ">
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
        "service_79wqo8m",
        "template_50l1l64",
        "#myForm",
        "kB-zDe4i9kpoF0Ec2"
      )
      .then(
        (response) => {
          alert("Message sent Successfully!", response.status, response.text);
        },
        (error) => {
          alert("Oooops! Something went wrong", error);
        }
      );
  };

  return (
    <div className="pt-20 lg:px-20 2xl:w-[80%] m-auto" id="contact">
      <div className="heading flex flex-col justify-center items-center hover:scale-105 cursor-pointer">
        <span className="text-3xl font-bold text-blue-800 opacity-70">
          Contact Me
        </span>
        <span className="text-lg font-semibold text-gray-500">
          Get in touch
        </span>
      </div>

      <div className="flex flex-col md:flex-row px-4 md:px-10 ">
        <div className=" flex flex-col flex-1">
          <div className="flex flex-row gap-4 pt-8">
            <FiPhone className=" text-3xl text-yellow-600 mt-5" />
            <div className="flex flex-col">
              <span className=" font-bold text-xl opacity-70">Call Me</span>
              <span className="text-gray-400">+233 540 908 248</span>
              <span className="text-gray-400">+233 256 344 845</span>
              <span className="text-gray-400">+233 200 786 190</span>
            </div>
          </div>

          <div className="flex flex-row gap-4 pt-6">
            <MdOutlineEmail className="rotate-0 text-3xl text-yellow-600 mt-5" />
            <div className="flex flex-col">
              <span className=" font-bold text-xl opacity-70">Email</span>
              <span className="text-gray-400">edemkwakuavorley@gmail.com</span>
              <span className="text-gray-400">edenkwaku85@gmail.com</span>
            </div>
          </div>

          <div className="flex flex-row gap-4 pt-6">
            <MdOutlineLocationOn className="rotate-0 text-3xl text-yellow-600 mt-5" />
            <div className="flex flex-col">
              <span className=" font-bold text-xl opacity-70">Location</span>
              <span className="text-gray-400">edemkwakuavorley@gmail.com</span>
              <span className="text-gray-400">edenkwaku85@gmail.com</span>
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
              className="bg-gray-100 ring-1 w-full px-2 py-3 rounded-md"
            />
          </div>
          <div className="form-group py-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="user_email"
              placeholder="Email"
              className="bg-gray-100 ring-1 w-full px-2 py-3 rounded-md"
            />
          </div>
          <div className="form-group py-2">
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              name="user_subject"
              placeholder="subject"
              className="bg-gray-100 ring-1 w-full px-2 py-3 rounded-md"
            />
          </div>
          <div className="form-group py-3">
            <textarea
              cols={30}
              rows={4}
              type="text"
              name="user_message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              className="bg-gray-100 ring-1 w-full px-2 py-3 rounded-md"
            ></textarea>
          </div>

          <div className="mb-10 flex justify-end">
            <input
              type="submit"
              value="Send Message"
              className="text-lg bg-yellow-600 py-3 px-10 text-blue-900 font-bold rounded-md"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

//Home page
function Home() {
  return (
    <>
      <div
        className="bg-white min-h-screen pt-10 pb-10 lg:pt-32 px-2 2xl:w-[80%] m-auto"
        id="home"
      >
        <div className="flex flex-col lg:flex-row gap-7 lg:py-3 px-6 lg:px-20 ">
          <div className="md:px-3 flex lg:flex-col gap-8 items-center mt-0 lg:mt-16">
            <a
              href="https://web.facebook.com/edem.kwaku.581"
              className="hover:translate-y-2"
            >
              <FaFacebook className="text-2xl text-yellow-600" />
            </a>
            <a
              href="https://github.com/kwakuedem"
              className="hover:translate-y-2"
            >
              <FaGithub className="text-2xl text-yellow-600" />
            </a>
            <a
              href="https://twitter.com/edemkwaku4"
              className="hover:translate-y-2"
            >
              <FaTwitter className="text-2xl text-yellow-600" />
            </a>
            <a
              href="https://www.linkedin.com/in/edem-kwaku-avorley-b1ab48232"
              className="hover:translate-y-2"
            >
              <FaLinkedin className="text-2xl text-yellow-600" />
            </a>
          </div>

          <div className="flex flex-col md:px-0">
            <div className="intro-text-wrapper flex flex-col md:flex-row">
              <div className="flex flex-col flex-1">
                <div className="name flex md:pl-3 lg:pl-0 flex-col pb-4 hover:scale-105 cursor-pointer">
                  <span className=" opacity-80 dark:text-gray-600 text-xl lg:text-2xl font-bold pb-4 leading-3 lg:leading-6 lg:tracking-wide">
                    Hi, I am
                  </span>
                  <span className=" opacity-80 text-xl dark:text-gray-600 lg:text-2xl font-bold pb-4 leading-3 lg:leading-6 lg:tracking-wide">
                    Edem Kwaku
                  </span>
                  <span className=" opacity-80 text-xl dark:text-gray-600 lg:text-2xl font-bold pb-4 leading-3 lg:leading-6 lg:tracking-wide">
                    Avorley
                  </span>
                </div>

                <span className="text-gray-500 text-lg font-semibold pb-3 hover:scale-105 cursor-pointer md:px-4">
                  IT Professional
                </span>
                <span className="text-gray-500 text-lg hover:scale-105 cursor-pointer md:px-4">
                  Attentive, focused and highly motivated IT professional
                  seeking to utilize his skills for the enhancement of the next
                  team he joins. Committed to driving continuous improvements
                  for IT operations through identification of process
                  enhancement opportunities. My goal is to be part of a
                  challenging organization to utilize and enhance his knowledge
                  and skills to gain professional experience whiles helping the
                  organization to achieve its goals.
                  <br />
                </span>
              </div>

              <div className="profile visible pr-4 lg:pr-0 flex justify-center pt-6 lg:pt-0 items-center flex-1 hover:scale-110">
                <img
                  src={Profile}
                  alt=""
                  className="w-[250px] md:300px lg:w-[400px] xl:w-[350px] lg:ml-14"
                />
              </div>
            </div>
            <AnchorLink
              href="#about"
              className="mt-12 md:mt-14  lg:mt-20 m-auto w-[70%] md:w-[40%] lg:w-[15%] gap-2 bg-yellow-600 flex justify-center items-center rounded-md ring-2 ring-blue-800 hover:text-yellow-600 hover:bg-white hover:ring-yellow-600"
            >
              <button className="py-2 lg:py-2 text-lg font-bold ">
                About Me
              </button>
              <FaArrowRight />
            </AnchorLink>
          </div>
        </div>
      </div>
    </>
  );
}

//Footer
function Footer() {
  return (
    <div className="bg-yellow-600 opacity-90 py-3 px-1 w-full">
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
              className="hover:translate-y-2"
            >
              <FaFacebook className="text-2xl text-blue-900" />
            </a>
            <a
              href="https://github.com/kwakuedem"
              className="hover:translate-y-2"
            >
              <FaGithub className="text-2xl text-blue-900" />
            </a>
            <a
              href="https://twitter.com/edemkwaku4"
              className="hover:translate-y-2"
            >
              <FaTwitter className="text-2xl text-blue-900" />
            </a>
            <a
              href="https://www.linkedin.com/in/avorley-edem-kwaku-b1ab48232/"
              className="hover:translate-y-2"
            >
              <FaLinkedin className="text-2xl text-blue-900" />
            </a>
          </div>
          <div className="flex flex-row pt-3 md:pt-0 pb-4 md:pb-0 md:flex-col md:justify-center md:items-center">
            <span>
              Developed with
              <span className="text-3xl text-red-600 px-2 md:px-0">
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
