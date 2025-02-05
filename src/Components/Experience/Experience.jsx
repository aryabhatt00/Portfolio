import React from 'react';
import './Experience.css';
import experience_data from '../../assets/experience_data';

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <h1 className="experience-title">My Experience</h1>
      
      <div className="timeline">
        {experience_data.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
              <h2 className="experience-role">{exp.role}</h2>
              <h3 className="experience-company">{exp.company}</h3>
              <p className="experience-duration">{exp.duration}</p>
              <p className="experience-description">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;