import React from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";

function SideBar() {
  return (
    <div className="absolute top-0 w-full h-full bg-red-300! z-50">
      <div className="bg-yellow-600 h-full w-[40%] p-5 z-50">
        <div className="py-6">
          <span className="font-bold text-lg cursor-pointer text-blue-900 md:text-gray-900">
            EdTech
          </span>
        </div>
        <div className="nav-menus">
          <ul className="flex flex-col gap-3 md:gap-5 ">
            <li>
              <AnchorLink
                href="#home"
                className="font-semibold text-blue-900 text-lg md:text-gray-900"
              >
                Home
              </AnchorLink>
            </li>
            <li>
              <AnchorLink
                href="#skill"
                className="font-semibold text-blue-900 text-lg md:text-gray-900"
              >
                Skill
              </AnchorLink>
            </li>
            <li>
              <AnchorLink
                href="#services"
                className="font-semibold text-blue-900 text-lg md:text-gray-900"
              >
                Services
              </AnchorLink>
            </li>
            <li>
              <AnchorLink
                href="#portfolio"
                className="font-semibold text-blue-900 text-lg md:text-gray-900"
              >
                Portfolio
              </AnchorLink>
            </li>
            <li>
              <AnchorLink
                href="#contact"
                className="font-semibold text-blue-900 text-lg md:text-gray-900"
              >
                Contact Me
              </AnchorLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SideBar