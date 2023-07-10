import React, { useEffect, useState } from 'react'
import logo from "../../images/logo.png"
import Navbar from './Navbar'
import MobileNavbar from './MobileNav'
import "./header.scss"




const Header = () => {

  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisibe] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisibe(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos)
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll)
    };
  }, [prevScrollPos]);


  return (
    <div className={`header ${visible ? 'nav-down' : 'nav-up'}`}>
      <a href="#home">
        <img src={logo} alt="umar farooq" />
      </a>
      <Navbar />
      <MobileNavbar />
    </div>
  )
}

export default Header
