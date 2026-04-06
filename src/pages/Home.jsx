import React, { useEffect, useState, useMemo } from "react";
import "./Home.css";

function Home() {

  const roles = useMemo(() => [
    "Software Developer",
    "Web Developer",
    "Full Stack Developer"
  ], []);

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const delayBetweenWords = 1500;

    const type = () => {
      const fullText = roles[currentRoleIndex];

      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      let timeout = isDeleting ? deletingSpeed : typingSpeed;

      if (!isDeleting && currentText === fullText) {
        timeout = delayBetweenWords;
        setIsDeleting(true);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        timeout = 500;
      }

      timer = setTimeout(type, timeout);
    };

    timer = setTimeout(type, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, roles]);

  return (
    <div className="section-container home-section">
      <div className="hero-content">
        <h2 className="greeting">Hi, I'm</h2>
        <h1 className="name gradient-text">Shivani Thakur</h1>

        <div className="typewriter-container">
          <span className="role-text">Aspiring </span>
          <span className="typewriter">{currentText}</span>
          <span className="cursor">|</span>
        </div>

        <p className="intro-text">
          Passionate about Data Structures & Algorithms, modern web development, and solving real-world problems.
        </p>

        <div className="cta-container">
          <a href="#projects" className="primary-btn">View Projects</a>
          <a href="/resume.pdf" className="secondary-btn" download target="_blank" rel="noreferrer">
            Download Resume
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="glow-blob blob-1"></div>
        <div className="glow-blob blob-2"></div>

        <div className="profile-container glass-panel">
          <img src="/profile.png" alt="Shivani" className="profile-img" />

          <div className="floating-icon" style={{ animationDelay: "0s" }}>⚛️</div>
          <div className="floating-icon" style={{ animationDelay: "1s" }}>🟩</div>
          <div className="floating-icon" style={{ animationDelay: "2s" }}>🟨</div>
        </div>
      </div>
    </div>
  );
}

export default Home;