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
            <p>Welcome!</p>
            <p>I'm a proactive 3rd-year Computer Science Engineering student with a keen interest in data analytics and cloud computing, particularly AWS. Despite being a fresher, I possess a strong foundation in analytical thinking and am eager to apply my skills to real-world challenges. </p><p>I'm also an active content creator on YouTube, where I produce videos on data analytics and AWS to help viewers understand complex concepts while refining my own skills. Additionally, I share content on Instagram reels to extend my reach and engage with a broader audience.</p>
          </div>

        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1+</h1>
          <p> YEAR OF EXPERIENCE IN DATA ANALYSIS THROUGH PROJECTS AND COURSEWORK</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>3+</h1>
          <p>PROJECTS ON DATA ANALYSIS</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>3+</h1>
          <p>WEBSITES BUILD AND MANAGED</p>
        </div>
        <hr />
      </div>
    </div>
  )
}

export default About
