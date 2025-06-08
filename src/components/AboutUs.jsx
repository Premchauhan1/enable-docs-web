import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <section className="about-us-section" id="about">
      <div className="container">
        <h2 className="section-title" data-text="About Us">About Us</h2>
        <p className="section-subtitle">
          Our journey to make digital content accessible for everyone
        </p>
        
        <div className="about-content">
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Who We Are</h3>
              <p>
                EnableDocs is a digital accessibility company helping organizations deliver inclusive, 
                compliant content. Founded by accessibility experts, our mission is to bridge compliance 
                with usability.
              </p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Our Vision</h3>
              <p>
                A world where inclusion is the standard in all digital experiences.
              </p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Our Mission</h3>
              <p>
                To enable digital equity by making content accessible one document, one webpage, 
                and one user at a time.
              </p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-content features">
              <h3>What Sets Us Apart</h3>
              <ul className="features-list">
                <li>Accessibility-First Mindset</li>
                <li>Human Expertise + Smart Automation</li>
                <li>Uncompromising Quality</li>
                <li>Client-Centric Approach</li>
              </ul>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Our Team</h3>
              <p>
                We bring together specialists, technologists, and writers to deliver 
                accessibility at scale across sectors.
              </p>
              
              <div className="team-grid">
                <div className="team-role">
                  <span>Accessibility Specialists</span>
                </div>
                <div className="team-role">
                  <span>Technologists</span>
                </div>
                <div className="team-role">
                  <span>Content Writers</span>
                </div>
                <div className="team-role">
                  <span>Project Managers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;