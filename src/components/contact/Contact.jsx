import React from 'react'
import waveThree from '../../images/wave-3.svg'
import "./contact.scss"



const Contact = () => {
  return (<>
    <img src={waveThree} alt="wave" />
    <div id='contact'>
      <h1>Get In Touch</h1>
      <p>I am currently on the lookout for new employment opportunities. Whether you are seeking a team player or a dedicated freelancer for short-term contract, I am eager to explore potential collaborations.</p>

      <div className="contact-btn-group">
        <a href="mailto::uamrfarooq567800@gmail.com">
          <button>Email</button>
        </a>
        <a href="#"><button>Linkedin</button></a>
      </div>

    </div>
  </>
  )
}

export default Contact