import React from 'react'
import wave from "../../images/wave.svg"
import waveTwo from "../../images/wave-2.svg"
import "./projects.scss"
const Projects = () => {
  return (<>
    <img src={waveTwo} alt="Wave Two" />
    <div id='projects'>
         <h1>Projects</h1>
        
    </div>
    <img src={wave} alt="wave" className="wave-down" />
  </>
  )
}

export default Projects