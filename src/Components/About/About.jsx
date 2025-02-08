import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme.png'
import profile_img from '../../assets/profile.jpg'


const About = () => {




    return (
        <div id='about' className="about">
            <div className="about-title">
                <h1>About Arya</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" style={{width:'300px',height:'auto'}} />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am a dedicated and passionate individual with a background in Electronics and Communication, currently expanding my expertise in technology. I thrive in dynamic environments, always eager to learn and adapt to new challenges.</p>
                        <p>With experience in software engineering, leadership roles, and a strong foundation in communication and problem-solving, I am committed to making a positive impact in both professional and personal growth.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS</p>
                            <div className="skill-line html"></div>
                            <span className="percentage">80%</span>
                        </div>
                        <div className="about-skill">
                            <p>React JS</p>
                            <div className="skill-line react"></div>
                            <span className="percentage">80%</span>
                        </div>
                        <div className="about-skill">
                            <p>JavaScript</p>
                            <div className="skill-line javascript"></div>
                            <span className="percentage">50%</span>
                        </div>
                        <div className="about-skill">
                            <p>Java</p>
                            <div className="skill-line java"></div>
                            <span className="percentage">70%</span>
                        </div>
                        <div className="about-skill">
                            <p>Python</p>
                            <div className="skill-line python"></div>
                            <span className="percentage">90%</span>
                        </div>
                        <div className="about-skill">
                            <p>VHDL</p>
                            <div className="skill-line vhdl"></div>
                            <span className="percentage">80%</span>
                        </div>
                        <div className="about-skill">
                            <p>Flask</p>
                            <div className="skill-line flask"></div>
                            <span className="percentage">50%</span>
                        </div>
                        <div className="about-skill">
                            <p>AWS</p>
                            <div className="skill-line aws"></div>
                            <span className="percentage">50%</span>
                        </div>
                    </div>

                </div>
            </div>
            <div className="about-achivements">
                <div className="about-achivement">
                    <h1>1.5+</h1>
                    <p>Years of Experinece</p>
                </div>
                <hr />
                <div className="about-achivement">
                    <h1>First Prize</h1>
                    <p>in Project Based Learning in college</p>
                </div>
                <hr />
                <div className="about-achivement">
                    <h1>5+</h1>
                    <p>Projects that I have worked on</p>
                </div>

            </div>
        </div>
    )
}

export default About