import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import Profile from "../assets/Profile.png";
import Picture from "../assets/Picture.png";
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

//Navigation bar
function NavigationBar() {
  const [showMenu, setShowMenu] = useState(false);

  function onShowMenu() {
    setShowMenu(!showMenu);
  }
  function Menu() {
    return (
      <div className="fixed m-auto top-0 w-full z-[200] h-full">
        <div className="bg-black relative z-10 w-full top-0 h-full ">
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
              <span className="font-bold text-2xl cursor-pointer text-white pt-4">
                EdTech
              </span>
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
                    <a href="" className="hover:translate-y-2">
                      <FaFacebook className="text-2xl text-gray-400" />
                    </a>
                    <a href="" className="hover:translate-y-2">
                      <FaGithub className="text-2xl text-gray-400" />
                    </a>
                    <a href="" className="hover:translate-y-2">
                      <FaTwitter className="text-2xl text-gray-400" />
                    </a>
                    <a href="" className="hover:translate-y-2">
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
      <div className="bg-white px-2 lg:px-20  sticky m-auto py-4 z-10 w-full top-0 flex justify-between ring-2 ring-gray-300">
        <div className="brand pl-5  flex justify-center">
          <span className="font-bold text-2xl cursor-pointer text-yellow-600 ">
            EdTech
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
    <div className="min-h-screen pb-10 pt-20 lg:px-20 bg-white" id="about ">
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
            <img src={Picture} className="w-[90%] lg:w-[350px] rounded-md" />
          </div>
        </div>

        <div className="text-section flex-1 justify-center pt-6 md:pt-0">
          <div className="hover:scale-105 cursor-pointer w-[90%] m-auto md:m-0 md:w-full md:pt-6 lg:pt-0 md:px-16 lg:px-8">
            <p className="text-lg">
              I have knowledge in Web development, Computer networking, Computer
              Security, Linux and Windows Server Administration, and Computer
              Hardware.With extensive knowledge and years of experience, working
              in web technologies and Ui / Ux design,networking, Cybersecurity,
              linux and windows server administration and computer Hardware, I
              ensure on delivering quality work.
            </p>
          </div>

          <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row lg:space-x-16 pt-10">
            <div className="flex flex-col py-10 lg:py-0 lg:justify-center ring-2 w-[90%] rounded-md m-auto lg:ring-0 items-center hover:translate-x-2 cursor-pointer">
              <span className="text-2xl font-bold">05+</span>
              <span>Years</span>
              <span>experience</span>
            </div>
            <div className="flex flex-col py-10 lg:py-0 lg:justify-center ring-2 w-[90%] rounded-md m-auto lg:ring-0 items-center hover:translate-x-2 cursor-pointer">
              <span className="text-2xl font-bold">10+</span>
              <span>Completed</span>
              <span>projects</span>
            </div>
            <div className="flex flex-col py-10 lg:py-0 lg:justify-center ring-2 w-[90%] rounded-md m-auto lg:ring-0 items-center hover:translate-x-2 cursor-pointer">
              <span className="text-2xl font-bold">02+</span>
              <span>Companies</span>
              <span>worked</span>
            </div>
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
    <div className="pt-20 pb-20 lg:px-20 bg-white" id="skill">
      <div className="heading flex flex-col justify-center items-center hover:scale-105 hover:translate-x-2 cursor-pointer">
        <span className="text-3xl font-bold text-blue-900 opacity-80">
          Skills
        </span>
        <span className="text-lg font-semibold text-gray-500">
          My technical level
        </span>
      </div>

      <div className="flex px-10 lg:px-0 gap-8 lg:gap-0 flex-col lg:flex-row lg:justify-around pt-10">
        <div className="skill-section space-x-10">
          <div className="software-dev  flex lg:flex-none justify-center">
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
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Tailwind Css</li>
                  </ul>
                </SkillSet>
              </div>

              <div className="ml-5">
                <SkillSet heading={"Backend Developer"}>
                  <ul>
                    <li>Python</li>
                    <li>Php</li>
                    <li>Rust</li>
                    <li>Laravel</li>
                    <li>Django</li>
                  </ul>
                </SkillSet>
              </div>
            </>
          )}
        </div>

        <div className="skill-section space-x-10">
          <div className="software-dev flex lg:flex-none justify-center ">
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
                  <li>Office Networking</li>
                  <li>LAN</li>
                  <li>Wireless Networking</li>
                  <li>Switching</li>
                  <li>Routing</li>
                </ul>
              </div>
            </>
          )}
        </div>

        <div className="skill-section space-x-10">
          <div className="software-dev  flex lg:flex-none justify-center ">
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
                  <li>SIEM Tool(Splunk Technology)</li>
                  <li>Python</li>
                  <li>Detection and Responds</li>
                  <li>Assets, Threats and Vulneralbility</li>
                  <li>Manage Security Risks</li>
                  <li>Linux and SQL</li>
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
    <div className="min-h-screen pb-10 pt-10 lg:px-20" id="skill">
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
          <div className="text px-10 lg:px-0 flex gap-4 item-center">
            <FaHardHat className="text-2xl text-blue-900 opacity-80" />
            <h3 className="text-xl  text-blue-900 opacity-80 font-bold">
              Education
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-y-10 justify-center item-center pt-10 md:px-8">
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
                <p className="font-semibold text-gray-500">2022 - present</p>
              </span>
            </div>
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
            <div className="education-section py-5 flex flex-col ring-1 ring-yellow-600 rounded-md px-10 w-[90%] h-52 shadow-xl m-auto lg:w-full lg:m-0">
              <span className="font-bold text-gray-600">
                Google
                <br />
                Cybersecurity
              </span>
              <span className="text-gray-500 pt-3 font-semibold">Cousera</span>
              <span className="flex flex-row gap-3 pt-4 text-semibold">
                <FaCalendar className="text-lg text-gray-500" />
                <p className="font-semibold text-gray-500">
                  January 2023 -July 2023
                </p>
              </span>
            </div>
            <div className="education-section py-5 flex flex-col ring-1 ring-yellow-600 rounded-md px-10 w-[90%] h-52 shadow-xl m-auto lg:w-full lg:m-0">
              <span className="font-bold text-gray-600">
                Google
                <br />
                IT Support
              </span>
              <span className="text-gray-500 pt-3 font-semibold">Cousera</span>
              <span className="flex flex-row gap-3 pt-4 text-semibold">
                <FaCalendar className="text-lg text-gray-500" />
                <p className="font-semibold text-gray-500">
                  November 2022 - May 2023
                </p>
              </span>
            </div>

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
          </div>
        </div>
        <div className="work-section">
          <div className="text flex gap-4 pt-16 item-center px-10 lg:px-0">
            <FaFile className="text-2xl text-blue-900 opacity-80" />
            <h3 className="text-xl  text-blue-900 opacity-80 font-bold">
              Work
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-y-10 justify-center item-center pt-10">
            <div className="education-section pt-5 flex flex-col ring-1 ring-yellow-600 rounded-md p-10 w-[90%] m-auto h-52 shadow-xl">
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

            <div className="education-section pt-5 flex flex-col ring-1 ring-yellow-600 rounded-md p-10 w-[90%] m-auto h-52 shadow-xl">
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
          </div>
        </div>
      </div>
    </div>
  );
}

//Services page
function Service() {
  return (
    <div className="min-h-screen pb-20 pt-20 lg:px-20 bg-white" id="services">
      <div className="heading flex flex-col justify-center items-center hover:scale-105 cursor-pointer">
        <span className="text-3xl font-bold">Services</span>
        <span className="text-lg font-semibold text-gray-500">
          What I offer
        </span>
      </div>

      <div className="sevice-wrapper pt-20 px-4 lg:px-10 grid md:grid-cols-2 gap-5 gap-y-5 lg:grid-cols-3">
        <div className="software-wrapper flex flex-col gap-5 ring-1 ring-yellow-600 shadow-lg shadow-blue-800 justify-bottom items-bottom py-10 px-3 rounded-md">
          <FaLaptopCode className="text-4xl mt-10  text-yellow-600" />
          <p className="p-y text-semibold text-lg text-gray-700">
            Software Development
          </p>
          <div className="flex flex-row gap-4 items-center ring-1 ring-blue-900 w-[60%] hover:bg-blue-800 hover:text-white hover:ring-2 hover:ring-yellow-600 rounded-md py-2 px-3">
            <span className="text-lg">View More</span>
            <FaArrowRight />
          </div>
        </div>

        <div className="network-wrapper flex flex-col gap-5 ring-1 ring-yellow-600 shadow-lg shadow-blue-800 justify-bottom items-bottom py-10 px-3 rounded-md">
          <FaNetworkWired className="text-4xl mt-10  text-yellow-600" />
          <p className="p-y text-semibold text-lg text-gray-700">
            Computer Networking
          </p>
          <div className="flex flex-row gap-4 items-center ring-1 ring-blue-900 w-[60%] hover:bg-blue-800 hover:text-white hover:ring-2 hover:ring-yellow-600 rounded-md py-2 px-3">
            <span className="text-lg">View More</span>
            <FaArrowRight />
          </div>
        </div>

        <div className="hardware-wrapper flex flex-col gap-5 ring-1 ring-yellow-600 shadow-lg shadow-blue-800 justify-bottom items-bottom py-10 px-3 rounded-md">
          <MdOutlineHardware className="text-4xl mt-10  text-yellow-600" />
          <p className="p-y text-semibold text-lg text-gray-700">
            Computer Hardware and Software
          </p>
          <div className="flex flex-row gap-4 items-center ring-1 ring-blue-900 w-[60%] hover:bg-blue-800 hover:text-white hover:ring-2 hover:ring-yellow-600 rounded-md py-2 px-3">
            <span className="text-lg">View More</span>
            <FaArrowRight />
          </div>
        </div>

        <div className="security-wrapper flex flex-col gap-5 ring-1 ring-yellow-600 shadow-lg shadow-blue-800 justify-bottom items-bottom py-10 px-3 rounded-md">
          <MdOutlineSecurity className="text-4xl mt-10  text-yellow-600" />
          <p className="p-y text-semibold text-lg text-gray-700">
            Computer Security
          </p>
          <div className="flex flex-row gap-4 items-center ring-1 ring-blue-900 w-[60%] hover:bg-blue-800 hover:text-white hover:ring-2 hover:ring-yellow-600 rounded-md py-2 px-3">
            <span className="text-lg">View More</span>
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
}

//Portfolio page
function Portfolio() {
  return (
    <div className="min-h-screen pt-20 lg:px-20 bg-white" id="portfolio">
      <div className="heading flex flex-col justify-center items-center hover:scale-105 cursor-pointer">
        <span className="text-3xl font-bold">Portfolio</span>
        <span className="text-lg font-semibold text-gray-500">
          Most recent works
        </span>
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
          alert("Message sent Successfully!",response.status,response.text);
        },
        (error) => {
          alert("Oooops! Something went wrong",error);
        }
      )};

    return (
      <div className="pt-20 lg:px-20 bg-white" id="contact">
        <div className="heading flex flex-col justify-center items-center hover:scale-105 cursor-pointer">
          <span className="text-3xl font-bold text-blue-800 opacity-70">
            Contact Me
          </span>
          <span className="text-lg font-semibold text-gray-500">
            Get in touch
          </span>
        </div>

        <div className="flex flex-col md:flex-row px-10 ">
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
                <span className="text-gray-400">
                  edemkwakuavorley@gmail.com
                </span>
                <span className="text-gray-400">edenkwaku85@gmail.com</span>
              </div>
            </div>

            <div className="flex flex-row gap-4 pt-6">
              <MdOutlineLocationOn className="rotate-0 text-3xl text-yellow-600 mt-5" />
              <div className="flex flex-col">
                <span className=" font-bold text-xl opacity-70">Location</span>
                <span className="text-gray-400">
                  edemkwakuavorley@gmail.com
                </span>
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
                className="text-lg bg-blue-600 py-3 px-10 text-white rounded-md"
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
        className=" min-h-screen pt-10 pb-10 lg:pt-32 px-2 bg-white"
        id="home"
      >
        <div className="flex flex-col lg:flex-row gap-7 lg:py-3 px-6 lg:px-20 ">
          <div className="md:px-3 flex lg:flex-col gap-8 items-center mt-0 lg:mt-16">
            <a href="" className="hover:translate-y-2">
              <FaFacebook className="text-2xl text-yellow-600" />
            </a>
            <a href="" className="hover:translate-y-2">
              <FaGithub className="text-2xl text-yellow-600" />
            </a>
            <a href="" className="hover:translate-y-2">
              <FaTwitter className="text-2xl text-yellow-600" />
            </a>
            <a href="" className="hover:translate-y-2">
              <FaLinkedin className="text-2xl text-yellow-600" />
            </a>
          </div>

          <div className="flex flex-col md:px-0">
            <div className="intro-text-wrapper flex flex-col md:flex-row">
              <div className="flex flex-col flex-1">
                <div className="name flex flex-col pb-4 hover:scale-105 cursor-pointer">
                  <span className="text-lg lg:text-3xl font-bold pb-4 leading-3 lg:leading-6 lg:tracking-wide">
                    Hi, I am
                  </span>
                  <span className="text-lg lg:text-3xl font-bold pb-4 leading-3 lg:leading-6 lg:tracking-wide">
                    Edem Kwaku
                  </span>
                  <span className="text-lg lg:text-3xl font-bold pb-4 leading-3 lg:leading-6 lg:tracking-wide">
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
              className="mt-0 xl:mt-10 max-xl:mt-20 m-auto w-[70%] lg:w-[20%] gap-2 bg-yellow-600 flex justify-center items-center rounded-md ring-2 ring-blue-800 hover:-translate-y-3 hover:text-yellow-600 hover:bg-white hover:ring-yellow-600"
            >
              <button className="py-2 lg:py-4 text-lg font-bold ">
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
      <div className="  grid grid-cols-2 gap-y-6  px-10 md:px-20">
        <ul className="flex flex-col gap-2 md:gap-3 px-6 py-6">
          <div className="pb-4">
            <p className="text-xl text-blue-900 font-bold opacity-80">EdTech</p>
            <p className="text-base text-white">IT Profesional</p>
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
        <div className="flex flex-col justify-center">
          <div className="social-link-wrapper py-3  md:px-3 flex flex-row gap-4 items-center  ">
            <a href="" className="lg:hover:translate-y-2">
              <FaFacebook className="text-2xl text-blue-900" />
            </a>
            <a href="" className="lg:hover:translate-y-2">
              <FaGithub className="text-2xl text-blue-900" />
            </a>
            <a href="" className="lg:hover:translate-y-2">
              <FaTwitter className="text-2xl text-blue-900" />
            </a>
            <a href="" className="lg:hover:translate-y-2">
              <FaLinkedin className="text-2xl text-blue-900" />
            </a>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p>Developed with</p>
            <p className="text-2xl">&hearts;</p>
            <p>By Edem Kwaku Avorley</p>
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
