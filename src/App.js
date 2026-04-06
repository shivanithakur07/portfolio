import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  useEffect(() => {
    // Simple intersection observer to add fade-up class on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
          entry.target.style.opacity = 1;
        }
      });
    }, { threshold: 0.1 });

    const sections = document.querySelectorAll('.section-animate');
    sections.forEach(section => {
      section.style.opacity = 0; // hide initially
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about" className="section-animate">
          <About />
        </section>
        <section id="projects" className="section-animate">
          <Projects />
        </section>
        <section id="contact" className="section-animate">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;