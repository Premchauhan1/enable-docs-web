import React from 'react';
import './IndustriesWeServe.css';

function IndustriesWeServe() {
  const industries = [
    {
      title: "Education & Publishing",
      description: "Making educational materials accessible to all learners including textbooks, course materials, and digital learning platforms.",
      icon: "🎓"
    },
    {
      title: "Government & Public Sector",
      description: "Ensuring public information and services are accessible to all citizens in compliance with Section 508 and other regulations.",
      icon: "🏛️"
    },
    {
      title: "Corporate & Legal",
      description: "Creating accessible corporate communications, legal documents, and financial reports for inclusive business practices.",
      icon: "💼"
    },
    {
      title: "Healthcare & Insurance",
      description: "Making vital health information, patient materials, and insurance documents accessible to all patients and clients.",
      icon: "🏥"
    },
    {
      title: "Nonprofits & NGOs",
      description: "Helping mission-driven organizations reach all audiences with accessible content and digital experiences.",
      icon: "🤝"
    }
  ];

  return (
    <section className="industries-section" id="industries">
      <div className="container">
        <h2 className="section-title" data-text="Industries We Serve">Industries We Serve</h2>
        <p className="section-subtitle">Delivering accessibility solutions across diverse sectors</p>
        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div key={index} className="industry-card">
              <div className="industry-icon">{industry.icon}</div>
              <h3 className="industry-title">{industry.title}</h3>
              <p className="industry-description">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IndustriesWeServe;