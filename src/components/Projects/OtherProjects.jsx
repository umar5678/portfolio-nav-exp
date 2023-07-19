import React from 'react'
import {PiCodeBlock, } from "react-icons/pi"
import {BsBoxArrowUpRight} from 'react-icons/bs'
import {LuGithub} from "react-icons/lu"
import "./otherProjects.scss"


const OtherProjects = () => {
  return (
    <div className='other-projects'>
   <h1>Other Projects I have Built</h1>
    <div className="other-projects-container">
      
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
      

    </div>
    </div>
  )
}

export default OtherProjects

const ProjectCard = () => {
  return (

    <div className="project-card">
        <div className="upper">
          <div className="project-icon">
            <PiCodeBlock/>
          </div>
          <div className="links">
          <a href="#"><LuGithub/></a>
            <a href="#"><BsBoxArrowUpRight/></a>
          </div>
        </div>
        <div className="lower">
          <h3 className='title'>
            The Example Project
          </h3>
          <div className="desc">
            <p>
              This is the short description of a sample project.
          This is the short description of a sample project.
            </p>
          
          </div>
        </div>
      </div>

  )
}