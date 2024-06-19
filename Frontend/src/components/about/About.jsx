// src/components/about/About.jsx
import React from 'react';
import './about.scss';
import aboutImage from '../../../Assets/about.png';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const About = () => {
  return (
    <section id="About" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h1 className="animated-text">Hi, I'm <span className="name-highlight">Kirtan Rajesh</span></h1>
          <ul>
            <li>Passionate developer with keen interest in web technologies, Robotics, and Data Science.</li>
            <li>Fourth-year dynamic Computer Science Engineer.</li>
            <li>Exploring the latest trends in Web Development and Data Science.</li>
            <li>Enjoys exploring new technologies, working out at the gym, and playing sports.</li>
            <li>Eager to take on new challenges and collaborate with others to build amazing projects.</li>
          </ul>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="about-image">
          <img src={aboutImage} alt="About me" />
        </div>
      </div>
    </section>
  );
};

export default About;
