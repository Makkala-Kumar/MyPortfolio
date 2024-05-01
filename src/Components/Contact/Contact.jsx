import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import linkedin_icon from '../../assets/linkedin.svg'; 
import instagram_icon from '../../assets/insta.svg';
import youtube_icon from '../../assets/youtube.svg'; 

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "27154f1b-beb0-43df-b40c-3f4c6d20aa9e");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };


    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="theme" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    {/* <h1>Let's Talk</h1> */}
                    <p>Ready to work on on-site jobs, so feel free to contact me</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="icons" /><p>makkalakumar55@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="icons" /><p>Hyderabad, Telangana, India</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="icons" /><p>+91 79954 43410</p>
                        </div>
                        <div className="contact-detail">
                            <a href="https://www.linkedin.com/in/makkala-kumar-438698264/" target="_blank" rel="noopener noreferrer">
                                <img src={linkedin_icon} alt="LinkedIn" />
                            </a>
                            <p>LinkedIn Profile</p>
                        </div>
                        <div className="contact-detail">
                            <a href="https://www.instagram.com/hemanth_analytics_and_compute/" target="_blank" rel="noopener noreferrer">
                                <img src={instagram_icon} alt="Instagram" />
                            </a>
                            <p>Instagram Profile</p>
                        </div>
                        <div className="contact-detail">
                            <a href="https://www.youtube.com/channel/UCSrvEp9j-BjJ86h7sIITsjg" target="_blank" rel="noopener noreferrer">
                                <img src={youtube_icon} alt="YouTube" />
                            </a>
                            <p>YouTube Channel</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter Your Name' name='name'/>
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter Your Email' name='email'/>
                    <label htmlFor="">Write Your Message Here</label>
                    <textarea name="message" rows="8" placeholder='Enter Your Message'></textarea>
                    <button type='submit' className='contact-submit'>Submit now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
