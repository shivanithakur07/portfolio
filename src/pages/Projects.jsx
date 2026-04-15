import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    id: "01",
    title: "TaskMaster",
    description: "A full-stack task management application with user authentication, real-time updates, and a responsive dashboard.",
    techStack: ["React", "Node.js", "MongoDB", "JWT"],
    githubLink: "https://github.com/shivanithakur07/Task-Master.git",
    liveLink: "https://task-master-one-swart.vercel.app/",
    image: "/taskmaster.png"
  },
  {
    id: "02",
    title: "Weather App",
    description: "A dynamic weather application providing real-time forecasts, utilizing external APIs and browser geolocation.",
    techStack: ["JavaScript", "HTML/CSS", "Weather API"],
    githubLink: "https://github.com/shivanithakur07/weather.git",
    liveLink: "https://weatherclone-nu.vercel.app/",
    image: "/weather.png"
  },
  {
    id: "03",
    title: "Tic Tac Toe Game",
    description: "An interactive, beautifully designed browser game with a responsive layout and intelligent move detection.",
    techStack: ["React", "CSS3", "JavaScript"],
    githubLink: "https://github.com/shivanithakur07/Tic-Tac-Toe.git",
    liveLink: "https://tic-tac-toe-psi-nine-75.vercel.app/",
    image: "/tictactoe.png"
  }
];

const Projects = () => {
  const targetRef = useRef(null);

  // Create a scroll trigger based on this tall container
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Calculate the horizontal translation. 
  // It moves the track from slightly offset right to far left as you scroll down.
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-70%"]);

  return (
    <div className="projects-tall-container" ref={targetRef}>
      <div className="projects-sticky-view">

        <div className="projects-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="projects-subtitle">Scroll down to explore the ecosystem</p>
        </div>

        <motion.div style={{ x }} className="projects-horizontal-track">
          {projects.map((project, index) => (
            <ProjectCard project={project} key={project.id} index={index} />
          ))}
        </motion.div>

      </div>
    </div>
  );
};

const ProjectCard = ({ project, index }) => {
  return (
    <div className={`project-node-container ${index % 2 !== 0 ? 'staggered-down' : 'staggered-up'}`}>

      {/* Network line connecting to previous card */}
      {index !== 0 && (
        <svg className="connecting-line" preserveAspectRatio="none" viewBox="0 0 100 100">
          <path d={index % 2 !== 0 ? "M0,90 Q50,90 50,50 T100,10" : "M0,10 Q50,10 50,50 T100,90"}
            className="animated-path" />
        </svg>
      )}

      <div className="glass-panel project-frame">
        <div className="project-image-wrapper">
          <img src={project.image} alt={project.title} className="project-thumbnail" />
          <div className="image-overlay">
            <a href={project.liveLink} className="action-btn live-btn" target="_blank" rel="noreferrer">
              Live Demo
            </a>
            <a href={project.githubLink} className="action-btn github-btn" target="_blank" rel="noreferrer">
              Code
            </a>
          </div>
        </div>

        <div className="project-info">

          <div className="title-row">
            <div className="mask-container">
              <span className="project-number">{project.id}</span>
            </div>
            <div className="mask-container">
              <h3 className="project-title-slide">{project.title}</h3>
            </div>
          </div>

          <p className="project-desc-fade">{project.description}</p>

          <div className="tech-stack-row">
            {project.techStack.map((tech, i) => (
              <span key={i} className="tech-pill">{tech}</span>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Projects;