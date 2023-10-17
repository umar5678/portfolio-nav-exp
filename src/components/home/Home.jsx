// import React from 'react'
import wave from "../../images/wave.svg"
import "./home.scss"


const Home = () => {
  return (
    <>
    <div id='home'>
         <div className="container">
          <p>Hi, my name is</p>
          <h1>Umar Farooq</h1>
          <h2>I bring digital visions to life as a web developer</h2>
          <p>Welcome to my portfolio as a <span>Frontend Developer</span></p>
          <div className="btn-group">
            <a href="https://github.com/umar5678"  target="_blank" rel="noreferrer"><button className="btn">GitHub</button></a>
            <a href="https://www.linkedin.com/in/umar-farooq-823509220/" target="_blank" rel="noreferrer"><button className="btn" href="#">Linkedin</button></a>
          </div>
         </div>
    </div>
    <div className="wave-div"><img src={wave} alt="wave" /></div>
    
    </>
  )
}

export default Home