import React from 'react';
import './Hero.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import profile_img from '../../assets/arya.svg';

const Hero = () => {
    const resumePath = new URL('../../assets/Resume.pdf', import.meta.url).href;

    const handleDownload = (event) => {
        event.preventDefault();
        fetch(resumePath)
            .then(response => response.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'Aryabhatt_Narasimha_Rao_Kankipati_Resume.pdf';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            })
            .catch(error => console.error('Download error:', error));
    };

    return (
        <div id='home' className="hero">
            <img src={profile_img} alt="" />
            <h1><span>I'm Aryabhatt Narasimha Rao Kankipati,</span> a Software Engineer</h1>
            <p>I am a Software Engineer with experience in web development and data analytics. I have expertise in HTML, CSS, JavaScript, React, AWS, Python, Java, C, Flask, SQL.</p>
            <div className="hero-action">
                <div className="hero-connect">
                    <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Arya</AnchorLink>
                </div>
                <div className="hero-resume">
                    <a href={resumePath} onClick={handleDownload}>Download Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
