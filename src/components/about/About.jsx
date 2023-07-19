// import React from 'react'
import "./about.scss"
import me from '../../images/umar-farooq.png'

const About = () => {
  return (
    <div id='about'>
      <div className="container">
        <h1>About</h1>
        <div className='right-left'>
          <div className="left">
            {/* keep about short */}
            <p>A self-taught UI/UX designer, functioning in the industry for 3+ years now.
              I make meaningful and delightful digital products that create an equilibrium
              between user needs and business goals.</p>
              <p>delightful digital products that create an equilibrium
              between user needs and business goals.</p>
              <p>Let s connect and explore exciting opportunities together. Feel free to reach out to me via email or connect with me on LinkedIn!</p>
          </div>
          <div className="right">
            <div className="img-div"><img src={me} alt="Umar Farooq" /></div>
            
          </div>
        </div>


      </div>


    </div>
  )
}

export default About