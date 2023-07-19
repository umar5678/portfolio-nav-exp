// import React from 'react'
import FeaturedProjects from "./FeaturedProjects"
import OtherProjects from "./OtherProjects"
import wave from "../../images/wave.svg"
import waveTwo from "../../images/wave-2.svg"
import featuredProjects from "../../projects/featuredProjects/index.js"


import "./projects.scss"


const Projects = () => {
  return (<>
    <img src={waveTwo} alt="Wave Two" />
    <div id='projects'>
      {/* <div className="container-for-heading"> <h1>Projects I have built </h1></div> */}
      <div className="container">
        <h1 className="proj-sec-heading">Projects I ahve built</h1>
        {
          featuredProjects.map((project) => (
            <FeaturedProjects key={project.id} project={project} />
          ))
        }

        <OtherProjects/>

      </div>
    </div>

    <img src={wave} alt="wave" className="wave-down" />
  </>
  )
}


export default Projects

