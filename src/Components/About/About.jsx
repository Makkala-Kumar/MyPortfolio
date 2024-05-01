import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="theme" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="Profile" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>My details will be added here</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore enim doloribus ab harum consequatur </p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>Excel</p><hr style={{width: "50%"}}/></div>
                <div className="about-skill"><p>SQL</p><hr style={{width: "70%"}}/></div>
                <div className="about-skill"><p>Tableau</p><hr style={{width: "60%"}}/></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>10+</h1>
            <p>PROJECTS ON DATA ANALYSIS</p>
        </div>
        <hr/>
        <div className="about-achievement">
            <h1>10+</h1>
            <p>PROJECTS USING AWS</p>
        </div>
        <hr/>
        <div className="about-achievement">
            <h1>10+</h1>
            <p>PROJECTS USING AZURE</p>
        </div>
        <hr/>
      </div>
    </div>
  )
}

export default About
