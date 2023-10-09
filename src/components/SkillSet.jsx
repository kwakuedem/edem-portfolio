import React, { useState } from 'react'
import { FaSortDown } from 'react-icons/fa';
import { Fade } from "react-awesome-reveal";

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
export default SkillSet