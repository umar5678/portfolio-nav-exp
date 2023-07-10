import React, { useState } from 'react';
import {FiList} from 'react-icons/fi'

import "./mobileNav.scss"

const MobileNavbar = () => {

    const [navOpenClose, setNavOpenClose] = useState(false)

    const handleNavToggle = ( ) => {
        setNavOpenClose (!navOpenClose)
    }

  return (
    <>
<input type="checkbox" id="btnControl"/>
<label className='btn' htmlFor="btnControl">

   <button className='nav-open-close'
    onClick={() => {
        const checkbox = document.getElementById('btnControl');
      checkbox.checked = !checkbox.checked;
        handleNavToggle()
        document.body.classList.toggle('blur')
        console.log('clok')
        
    }}
    ><FiList/></button>
    </label>


    <nav className={`closeMobileMenu ${navOpenClose ? ' mobile-navbar' : ''}`} >
<div className="listContainer">


      <ul>
          <li><a onClick={() => {
            const checkbox = document.getElementById('btnControl');
            checkbox.checked = !checkbox.checked;
            handleNavToggle()
            document.body.classList.remove('blur')
    }} href="#about">About</a></li>
          <li><a onClick={() => {
             const checkbox = document.getElementById('btnControl');
            checkbox.checked = !checkbox.checked;
        handleNavToggle()
        document.body.classList.remove('blur')
        console.log('clok')
    }} href="#projects">Projects</a></li>
          <li><a onClick={() => {
             const checkbox = document.getElementById('btnControl');
             checkbox.checked = !checkbox.checked;
        handleNavToggle()
        document.body.classList.remove('blur')
        console.log('clok')
    }} href="#skills">Skills</a></li>
          <li><a onClick={() => {
             const checkbox = document.getElementById('btnControl');
             checkbox.checked = !checkbox.checked;
        handleNavToggle()
        document.body.classList.remove('blur')
        console.log('clok')
    }} href="#contact">Contact</a></li>
        </ul>
        </div>
    </nav>
    </>
  );
};

export default MobileNavbar;
