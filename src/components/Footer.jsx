import React from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";

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
  )
}

export default Footer