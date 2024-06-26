import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Projects from './Components/MyProjects/Projects'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import SkillsTools from './Components/SkillsTools/SkillsTools'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Services/>
      <SkillsTools/>
      <Contact/>    
      {/* <Footer/> */}
    </div>
  )
}

export default App
