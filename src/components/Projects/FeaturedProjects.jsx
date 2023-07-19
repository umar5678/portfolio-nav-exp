/* eslint-disable react/prop-types */

import "./featuredProjects.scss"

const FeaturedProjects = ({ project }) => {

    const techStack = Array.isArray(project.tech) ? project.tech : []
    
    return (
      <>
  
        <div className="featured-project-card">
          <div className="project-description">
            <h1 className="project-title">
              {project.title}
            </h1>
            <p className='description'>
              {project.description}
            </p>
            <div className="tech-stack">
              {
                techStack.map((tech, i) => (
                  <span key={i} > {tech}</span>
                ))
              }
            </div>
            <div className="link-btn-group">
              <a href={project.repo} target="_blank" rel="noreferrer"><button className="btn">GitHub</button></a>
              <a href={project.url} target="_blank" rel="noreferrer" ><button className="btn">Visit</button></a>
            </div>
          </div>
          <div className="project-img">
            <img src={project.img} alt="Project" />
          </div>
        </div>
  
  
      </>
    )
  }

  export default FeaturedProjects