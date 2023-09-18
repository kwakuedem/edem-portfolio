import React from "react";
import Profile from "../assets/Profile.png";
import Picture from "../assets/Picture.png";
import { FaFileDownload } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaArrowRight,
  FaCode,
  FaSortDown,
  FaHardHat,
  FaSortUp,
  FaNetworkWired,
  FaLock,
  FaFile,
  FaCalendar,
} from "react-icons/fa";
import { useState } from "react";
import Resume from "../assets/resume.pdf";

//Navigation bar
function NavigationBar() {
  return (
    <div className="bg-yellow-600 fixed z-10 w-full lg:top-0 lg:w-[70%] xlg:w-[50%] md:m-auto">
      <div className="nav-wrapper py-5 px-4 flex flex-col md:flex-row md:justify-between opacity-90 md:bg-white">
        <div className="brand pb-3 md:pb-0">
          <span className="font-bold cursor-pointer text-blue-900 md:text-gray-900">EdTech</span>
        </div>
        <div className="nav-menus">
          <ul className="flex  lg:flex-row gap-3 md:gap-5 ">
            <li>
              <AnchorLink href="#home" className="font-semibold text-blue-900 md:text-gray-900">
                Home
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#skill" className="font-semibold text-blue-900 md:text-gray-900">
                Skill
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#services" className="font-semibold text-blue-900 md:text-gray-900">
                Services
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#portfolio" className="font-semibold text-blue-900 md:text-gray-900">
                Portfolio
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#contact" className="font-semibold text-blue-900 md:text-gray-900">
                Contact Me
              </AnchorLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

//About page
function About() {
  return (
    <div className="min-h-screen pt-20" id="about">
      <div className="heading flex flex-col justify-center items-center hover:translate-x-2">
        <span className="text-3xl font-bold text-blue-900 opacity-80">
          About Me
        </span>
        <span className="text-lg font-semibold text-gray-500">
          My Introduction
        </span>
      </div>

      <div className="content flex flex-col lg:flex-row pt-10 lg:pt-20 px-10 lg:px-10">
        <div className="flex justify-center item-center">
          <div className="image-card w-[90%] lg:w-[350px] flex lg:flex-1 justify-center items-center lg:hover:scale-110">
            <img src={Picture} className="w-[90%] lg:w-[350px] rounded-md" />
          </div>
        </div>

        <div className="text-section flex-1 justify-center pt-6 md:pt-0">
          <div className="hover:scale-105 cursor-pointer w-[80%] m-auto md:m-0 md:w-full md:pt-6 lg:pt-0 md:px-16 lg:px-8">
            <p className="text-lg">
              Web developer, with extensive knowledge and years of experience,
              working in web technologies and Ui / Ux design, delivering quality
              work working in web technologies and Ui / Ux design, delivering
              quality work
            </p>
          </div>

          <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row lg:space-x-16 pt-10">
            <div className="flex flex-col py-10 lg:py-0 lg:justify-center ring-2 w-[80%] m-auto lg:m-0 lg:ring-0 items-center hover:translate-x-2 cursor-pointer">
              <span className="text-2xl font-bold">05+</span>
              <span>Years</span>
              <span>experience</span>
            </div>
            <div className="flex flex-col py-10 lg:py-0 lg:justify-center ring-2 w-[80%] m-auto lg:m-0 lg:ring-0 items-center hover:translate-x-2 cursor-pointer">
              <span className="text-2xl font-bold">10+</span>
              <span>Completed</span>
              <span>projects</span>
            </div>
            <div className="flex flex-col py-10 lg:py-0 lg:justify-center ring-2 w-[80%] m-auto lg:m-0 lg:ring-0 items-center hover:translate-x-2 cursor-pointer">
              <span className="text-2xl font-bold">02+</span>
              <span>Companies</span>
              <span>worked</span>
            </div>
          </div>

          <a
            href={Resume}
            className="flex justify-center items-center lg:justify-none items-start"
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
  const [showSkill, setshowSkills] = useState(false);

  function onShowSkills() {
    setshowSkills(!showSkill);
  }

  return (
    <div className="pt-20 pb-20" id="skill">
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
            <FaCode className="text-xl text-yellow-600 mb-3" />
            <button
              onClick={() => onShowSkills()}
              className="flex justify-center items-center space-x-2"
            >
              {showSkill ? (
                <FaSortUp className="text-xl text-yellow-600" />
              ) : (
                <FaSortDown className="text-xl text-yellow-600" />
              )}
              <h3 className="text-xl font-semibold text-gray-600">
                Software Developer
              </h3>
            </button>
          </div>

          {showSkill && (
            <>
              <div className="ml-5">
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

              <div className="ml-5">
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
          )}
        </div>

        <div className="skill-section space-x-10">
          <div className="software-dev flex lg:flex-none justify-center ">
            <FaNetworkWired className="text-xl text-yellow-600 mb-3" />
            <button
              onClick={() => onShowSkills()}
              className="flex justify-center items-center space-x-2"
            >
              {showSkill ? (
                <FaSortUp className="text-xl text-yellow-600" />
              ) : (
                <FaSortDown className="text-xl text-yellow-600" />
              )}
              <h3 className="text-xl font-semibold text-gray-600">
                Network Engineer
              </h3>
            </button>
          </div>

          {showSkill && (
            <>
              <div className="ml-5">
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
          )}
        </div>

        <div className="skill-section space-x-10">
          <div className="software-dev  flex lg:flex-none justify-center ">
            <FaLock className="text-xl text-yellow-600 mb-3" />
            <button
              onClick={() => onShowSkills()}
              className="flex justify-center items-center space-x-2"
            >
              {showSkill ? (
                <FaSortUp className="text-xl text-yellow-600" />
              ) : (
                <FaSortDown className="text-xl text-yellow-600" />
              )}
              <h3 className="text-xl font-semibold text-gray-600">
                Cyber Security Analist
              </h3>
            </button>
          </div>

          {showSkill && (
            <>
              <div className="ml-5">
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
          )}
        </div>
      </div>
    </div>
  );
}

function SkillSet({ heading, children }) {
  const [showSkills, setShowSkills] = useState(false);
  return (
    <>
      <button
        onClick={() => setShowSkills(!showSkills)}
        className="software-devision"
      >
        <span>{}</span>
        <div className="flex space-x-2">
          <FaSortDown className="text-xl text-yellow-600" />
          <span className="text-lg  text-gray-600">{heading}</span>
        </div>
      </button>
      {showSkills && <div className="prose list-outside">{children}</div>}
    </>
  );
}

//Qualification page
function Qualification(props) {
  return (
    <div className="min-h-screen pt-10" id="skill">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-y-10 justify-center item-center pt-10 px-8">
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
        <div className="work pt-20 ">
          <div className="text flex gap-4 item-center px-10 lg:px-0">
            <FaFile className="text-2xl text-blue-900 opacity-80" />
            <h3 className="text-xl  text-blue-900 opacity-80 font-bold">
              Work
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 gap-y-10 justify-center item-center pt-10 px-8 lg:px-0">
            <div className="education-section pt-5 flex flex-col ring-1 ring-yellow-600 rounded-md p-10 w-[90%] h-52 shadow-xl m-auto lg:w-full lg:m-0">
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

            <div className="education-section pt-5 flex flex-col ring-1 ring-yellow-600 rounded-md p-10 w-[90%] h-52 shadow-xl m-auto lg:w-full lg:m-0">
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
    <div className="min-h-screen pt-20" id="services">
      <div className="heading flex flex-col justify-center items-center hover:scale-105 cursor-pointer">
        <span className="text-3xl font-bold">Services</span>
        <span className="text-lg font-semibold text-gray-500">
          What I offer
        </span>
      </div>
    </div>
  );
}

//Portfolio page
function Portfolio() {
  return (
    <div className="min-h-screen pt-20" id="portfolio">
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
  return (
    <div className="pt-20" id="contact">
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

        <form action="" method="post" className="pt-10 flex-1">
          <div className="form-group py-2">
            <input
              type="text"
              placeholder="name"
              className="bg-gray-100 w-full px-2 py-3 rounded-md"
            />
          </div>
          <div className="form-group py-2">
            <input
              type="email"
              placeholder="Email"
              className="bg-gray-100 w-full px-2 py-3 rounded-md"
            />
          </div>
          <div className="form-group py-2">
            <input
              type="text"
              placeholder="subject"
              className="bg-gray-100 w-full px-2 py-3 rounded-md"
            />
          </div>
          <div className="form-group py-3">
            <textarea
              cols={30}
              rows={4}
              type="text"
              placeholder="Message"
              className="bg-gray-100 w-full px-2 py-3 rounded-md"
            ></textarea>
          </div>

          <div className="mb-10 flex justify-end">
            <button
              type="submit"
              className="text-lg bg-blue-600 py-3 px-10 text-white rounded-md"
            >
              Submit Message
            </button>
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
      <div className=" min-h-screen pt-32 max-xl:pt-52 px-2" id="home">
        <div className="flex flex-col lg:flex-row gap-7 px-6 lg:px-3">
          <div className="social-link-wrapper  md:px-3 flex lg:flex-col gap-8 items-center mt-0 lg:mt-16">
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

          <div className="flex flex-col px-2 md:px-0">
            <div className="intro-text-wrapper flex flex-col md:flex-row">
              <div className="flex flex-col flex-1">
                <div className="name flex flex-col pb-4 px-4 hover:scale-105 cursor-pointer">
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  perspiciatis accusamus soluta iure <br />
                  quaerat numquam placeat maxime neque adipisicing elit. Sequi
                  perspiciatis accusamus soluta <br />
                  adipisicing elit. Sequi perspiciatis accusamus
                  <br />
                </span>
              </div>

              <div className="profile-im visible pr-4 flex justify-center pt-6 lg:pt-0 items-center flex-1 hover:scale-110">
                <img
                  src={Profile}
                  alt=""
                  className="w-[250px] md:300px lg:w-[400px] xl:w-[350px]"
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
    <div className="bg-yellow-600 opacity-90 py-3 px-1">
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
