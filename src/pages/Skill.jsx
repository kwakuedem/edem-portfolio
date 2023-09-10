import React, { useState } from 'react'
import {FaCode,FaSortDown, FaSortUp,FaNetworkWired,FaLock} from 'react-icons/fa';

function Skill() {
    const [showSkill, setshowSkills]=useState(false)

    function onShowSkills(){
        setshowSkills(!showSkill);
    }

  return (
    <div className='min-h-screen '>
        <div className="heading flex flex-col justify-center items-center">
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

export default Skill

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