import React from 'react'
import {RiJavascriptFill, RiHtml5Fill, RiCss3Fill, RiReactjsFill} from "react-icons/ri"
import {SiTailwindcss, SiFigma} from "react-icons/si"
import {TbBrandVscode} from "react-icons/tb"
import {BiLogoGit, BiLogoSass, BiLogoGithub} from "react-icons/bi"
import "./skills.scss"

const Skills = () => {
  return (
    <div id='skills'>
        <div className="container">
          <h1>Skills</h1>
          <div className="tech-skills">
            <p>Technologies for Building Web Pages</p>
            <div className="icons">
              <div><RiJavascriptFill className='js'/> <p>JavaScript</p></div>
              <div><RiHtml5Fill className='html'/> <p>HTML</p></div>
              <div><RiCss3Fill className='css'/> <p>CSS</p></div>
            </div>
          </div>
          <div className="tech-skills">
            <p>Frameworks & Libraries</p>
            <div className="icons">
              <div><RiReactjsFill className='react'/><p>React</p> </div>
              <div><SiTailwindcss className='tailwind'/><p>Tailwind CSS</p> </div>
            </div>
          </div>
          <div className="tech-skills">
            <p>Software & Tools</p>
            <div className="icons">
              <div><BiLogoSass className='sass'/><p>SASS</p></div>
              <div><SiFigma className='figma'/> <p>Figma</p></div>
              <div><BiLogoGithub className='github'/> <p>GitHub</p></div>
              <div><BiLogoGit className='git'/> <p>Git</p></div>
              <div><TbBrandVscode className='vscode'/> <p>VsCode</p></div>
            </div>
          </div>
        </div>
        
    </div>
  )
}

export default Skills