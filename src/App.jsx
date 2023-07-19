// import React from 'react'
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Home from "./components/home/Home"
import Projects from "./components/Projects/Projects"
import Skills from "./components/skills/Skills"
import Header from "./components/header/Header"
import Sidebar from "./components/sidebarForSocial/Sidebar"





const App = () => {


  return (
    <>
      <Header />
      <div id="content">
        <Sidebar />
      
          <Home />
          <About />
          <Projects />
          <Skills />
          <Contact />

      </div>
    </>
  )
}

export default App