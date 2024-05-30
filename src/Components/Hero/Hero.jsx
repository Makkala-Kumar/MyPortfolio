import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img className='img-profile' src={profile_img} alt='profile'/>
      <h1><span>I'm Hemanth Kumar,</span><br/> A Data Analyst and an Aspiring Cloud Architect</h1>
      <p>Contact me for business related and download my resume</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me </AnchorLink></div>
        <div className="hero-resume">
          <a  href="../../assets/Resume.pdf" download="Resume.pdf">My Resume</a></div>
      </div>
    </div>
  )
}

export default Hero
