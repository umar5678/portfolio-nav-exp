// import React from 'react'
import waveThree from '../../images/wave-3.svg'
import "./contact.scss"



const Contact = () => {
  return (<>
    <img src={waveThree} alt="wave" />
    <div id='contact'>
      <h1>Get In Touch</h1>
      <p>At this moment, I am actively seeking new employment opportunities. Whether your company requires a team player or a dedicated <a href="https://www.upwork.com/freelancers/~01216a39f2c5a8a3fc" target='_blank' rel='noreferrer'>freelancer</a> for short-term contract, I am eager to explore potential collaborations.</p>

      <div className="contact-btn-group">
        <a href="mailto::uamrfarooq567800@gmail.com">
          <button>Email</button>
        </a>
        <a href="https://www.linkedin.com/in/umar-farooq-823509220/" target="_blank" rel="noreferrer"><button>Linkedin</button></a>
      </div>

    </div>
  </>
  )
}

export default Contact