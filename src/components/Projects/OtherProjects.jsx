import React from 'react'
import {PiCodeBlock, } from "react-icons/pi"
import {BsBoxArrowUpRight} from 'react-icons/bs'
import {LuGithub} from "react-icons/lu"
import otherProjects from "../../projects/otherProjects/index"
import "./otherProjects.scss"


const OtherProjects = () => {
  return (
    <div className='other-projects'>
   <h1>Other Projects I have Built</h1>
    <div className="other-projects-container">
      
   {
    otherProjects.map((data) => (
      <ProjectCard 
      key={data.id}
      repo={data.repo}
      url={data.url}
      title={data.title}
      description={data.description}
      />
     ) )
   }

    </div>
    </div>
  )
}

export default OtherProjects

const ProjectCard = ({repo, url, title, description} ) => {
  return (

    <div className="project-card" >
        <div className="upper">
          <div className="project-icon">
            <PiCodeBlock/>
          </div>
          <div className="links">
          <a href={repo} target='_blank' rel="noopener noreferrer"><LuGithub/></a>
            <a href={url} target='_blank' rel="noopener noreferrer"><BsBoxArrowUpRight/></a>
          </div>
        </div>
        <div className="lower">
          <h3 className='title'>
            {title}
          </h3>
          <div className="desc">
            <p>
              {description}
            </p>
          
          </div>
        </div>
      </div>

  )
}