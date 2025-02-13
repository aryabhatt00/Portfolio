import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import profile_img from '../../assets/arya.svg'
import resume from '../../assets/resume.pdf'

const Hero = () => {
    return (
        <div id='home' className="hero">
            <img src={profile_img} alt="" />
            <h1><span>I'm Aryabhatt Narasimha Rao Kankipati,</span> a Software Engineer</h1>
            <p>I am a Software Engineer with experience in web development and data analytics. I have expertise in HTML, CSS, JavaScript, React, AWS, Python, Java, C, Flask, SQL.</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Arya</AnchorLink></div>
                <div className="hero-resume"><a href={resume} download="Arya_Resume.pdf">
              Download Resume
          </a></div>

            </div>

        </div>
    )
}

export default Hero