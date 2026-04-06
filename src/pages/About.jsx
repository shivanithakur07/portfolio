import React from 'react';
import './About.css';

const About = () => {
  const skills = [
    { name: "HTML5", level: 90 },
    { name: "CSS3", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 75 },
    { name: "Node.js", level: 70 },
    { name: "Python", level: 85 },
    { name: "Java", level: 80 },
    { name: "MySQL", level: 75 },
    { name: "MongoDB", level: 70 },
  ];

  return (
    <div className="section-container about-section">
      <h2 className="section-title">About Me</h2>
      
      <div className="about-content">
        <div className="about-column max-w-sm">
          <div className="glass-panel education-card">
            <h3 className="card-title">Education</h3>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <h4>B.E. Computer Science (AI & ML)</h4>
                <p className="institution">Chandigarh University</p>
                <p className="timeline-date">2023 - Present</p>
              </div>
            </div>
          </div>

          <div className="glass-panel achievements-card mt-6">
            <h3 className="card-title">Achievements</h3>
            <ul className="achievement-list">
              <li>
                <span className="bullet">🏆</span> 
                Participated in Multiple Hackathons
              </li>
              <li>
                <span className="bullet">🏅</span> 
                District-level Sports Player
              </li>
              <li>
                <span className="bullet">🎤</span> 
                Event Hosting & Public Speaking
              </li>
            </ul>
          </div>
        </div>

        <div className="about-column">
          <div className="glass-panel skills-card">
            <h3 className="card-title">Technical Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div 
                      className="skill-bar-fill" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;