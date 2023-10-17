// import React from 'react'
import "./about.scss";
import me from "../../images/umar-farooq.jpg";

const About = () => {
  return (
    <div id="about">
      <div className="container">
        <h1>About</h1>
        <div className="right-left">
          <div className="left">
            {/* keep about short */}
            <p>
              A self-taught Frontend Developer with a passion for crafting
              visually appealing and user-friendly interfaces.
            </p>
            <p>
              While my expertise has been cultivated through independent
              learning rather than formal training or prior experience, I take
              pride in possessing an exceptional grasp of various technologies.
              My journey has led me to develop several small projects that
              effectively showcase my skills and dedication to this field.
            </p>
          </div>
          <div className="right">
            <div className="img-div">
              <img src={me} alt="Umar Farooq" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
